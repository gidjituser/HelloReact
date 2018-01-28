#!/usr/bin/env bash 


dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

cd ${dir}/..
react-native bundle --platform ios --dev false --entry-file views/ios/index.ios.js --bundle-output main.ios.jsbundle --assets-dest ./

exit 0
