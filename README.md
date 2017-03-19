# Description

This is a basic example for creating a React Native App View (μApp) that can be added and run in Gidjit ~ Smart Launcher, available in the [AppStore](https://itunes.apple.com/us/app/gidjit-smart-launcher/id1179176359?at=1001lnP4&mt=8)
 for free (currently iOS only)

Supported operating system(s) are iOS 10.0+

## Introduction

An App View (μApp) is like a micro or light weight application that will execute a well defined task or action. It may allow a user to to configure it if necessary and is displayed within a single view.

See the official [React Native website](https://facebook.github.io/react-native/) for an introduction to React Native.

### Getting Started

- Follow the [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html) to install React Native and its dependencies.
- Please use following version of react-native and react with npm.
	* "react": "15.4.2",
    * "react-native": "0.39.2",
- The following packages are included in the Gidjit and have been linked already
	* "react-native-ble": "^1.0.7"
    * "react-native-vector-icons": "^2.1.0",
- The following fonts have been included for you
	* Entypo.ttf
	* EvilIcons.ttf
	* FontAwesome.ttf
	* Foundation.ttf
	* Ionicons.ttf
	* MaterialIcons.ttf
	* Octicons.ttf
	* Zocial.ttf
- You can use your own npm packages as they will be included in your ios.jsbundle from the react bundler. If a package has a library that needs to be linked you will have to let us know so that we can add it to Gidjit first.  
- Currently the following data Will be passed to your initial element
	* props -> sessionID (can be used to check it different actions are launching your view)

### What Gidjit will require to run

* Build/Config Project

	- create your project and make sure to run npm install before next step as packages are bundled
	- generate a bundle in the root of the directory called "main.ios.jsbundle" (for example [from the root of the directory] run: react-native bundle --platform ios --dev false --entry-file views/ios/index.ios.js --bundle-output main.ios.jsbundle --assets-dest ./)
	- Optionally add an icon.png to the root of the directory preferably 120x120px
	- Upload your entire project to Github. Make sure you have an appropriate gitignore. You can use the one from this example as a good start.
	- To summarize ensure you have to following in the root of your project directory

		1. package.json
		2. main.ios.jsbundle
		3. assets (optional, directory for static images that at the moment is not supported, however it will be in a future update)
		4. icon.png (optional)


* Add the micro app (μApp) to Gidjit

	- Select a Launcher Panel
	- Select **"All Other Actions"**
	- From the available action list select **"React Native Action View"**
	- Press **"Select Github Zip"** and search for your repository in the WebView. When a link for your project zip (automatically generated by Github) is found you will be able to select it. Alternatively you can directly enter the URL of your desired zip in the text field below. Gidjit will extract the required files from the zip. They should have the following structure. _Project.zip -> RepoName-branch -> [package.json, icon.png, main.ios.jsbundle, assets ....]_
	- Once complete just press **"Done"** and your action is ready to go


### Updates

* Mar 19, 2017
	- From the Gidjit App you can now hide/show the primary app navigation bar with a three finger tap on the screen.
