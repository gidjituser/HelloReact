#!/usr/bin/env bash 

entryFile=""
function showUsage {
    echo "Usage: $(basename "$0")
    [-h] help/usage
    [-e] entryFile Path expected by react-native bundle
    Default: [PROJECT_ROOT]/views/ios/index.ios.js

"
}
while getopts "he:" opt; do
  case ${opt} in
    h ) showUsage 
        exit 0
      ;;
    e ) entryFile=${OPTARG}
      ;;
    \? ) showUsage
        exit 0
      ;;
  esac
done

tmpPath=""
function cleanupFromScript {
    echo "Cleaning up"
    [ -d $tmpPath ] && rm -rf $tmpPath
}
trap cleanupFromScript SIGTERM SIGINT

which static-server
if [ $? -ne 0  ]; then
    echo 'Need to install global static-server via npm'
    npm install -g static-server
fi

#Get directory location of current script
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Go to project root directory
cd ${dir}/..
projectRootDir=$(pwd)
# Get repo name
repoName=$(basename `git rev-parse --show-toplevel`)

# Make sure required input files available
if [ -z "$entryFile" ]; then 
    entryFile="${projectRootDir}/views/ios/index.ios.js" 
    echo "No entryFile (-e) passed, using default entryFile $entryFile"
fi

if [ ! -e "$entryFile" ]; then 
    echo "could not locate entryFile $entryFile" 
    cleanupFromScript
    exit 1
fi
if [ ! -e package.json ]; then 
    echo 'could not find package.json' 
    cleanupFromScript
    exit 1
fi

#Generate temporary destinations for output
tmpPath="$(mktemp -d)"
#Where the final zip will be served from http server
servePath="$tmpPath/Serve"
#Where all the intermediate files are stored
outputPath="$servePath/Project"
mkdir -p $outputPath

#Copy files over to temp destination
if [ -e icon.png ]; then 
    cp icon.png $outputPath 
fi

cp package.json $outputPath

#bundle the project
react-native bundle --platform ios --dev false --entry-file "$entryFile" --bundle-output "$outputPath/main.ios.jsbundle" --assets-dest "$outputPath"
if [ $? -ne 0 ]; then 
    echo "Could not bundle the project"
    cleanupFromScript
    exit 3
fi
cd $servePath
#zip temporary destination to location to be reached from static server
zip -r app.zip Project

#Project is bundled and zipped
echo "Project is bundled, will now server the final zip"
static-server

echo 'Complete!'

exit 0
