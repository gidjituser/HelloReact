#!/usr/bin/env bash 


dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


cd ${dir}/..
react-native bundle --platform ios --dev false --entry-file views/ios/index.ios.js --bundle-output main.ios.jsbundle --assets-dest ./

exit 0
