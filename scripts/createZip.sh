#!/usr/bin/env bash 

#react-native bundle --platform ios --dev false --entry-file views/ios/index.ios.js --bundle-output main.ios.jsbundle --assets-dest ./

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
repoName=$(basename `git rev-parse --show-toplevel`)
# Go to project root directory
cd ${dir}/..

# Make sure required input files available
if [ ! -e package.json ]; then 
    echo 'could not find package.json' 
    exit 1
fi
if [ ! -e main.ios.jsbundle ]; then 
    echo 'could not find source main.ios.jsbundle' 
    exit 2
fi

#Generate temporary destination
#tmpDir=$(mktemp -d)
tmpPath=/tmp
servePath="$tmpPath/Serve"
outputPath="$servePath/Project"
[ -d $servePath ] && rm -rf $servePath
mkdir -p $outputPath

#Copy files over to temp destination
if [ -e icon.png ]; then 
    cp icon.png $outputPath 
fi

cp package.json $outputPath
cp main.ios.jsbundle $outputPath

if [ -d assets ]; then 
    cp -r assets $outputPath/assets
fi

#zip temporary destination to root repo
currDir=$dir
cd $servePath
zip -r app.zip Project

static-server

echo 'Complete!'

exit 0
