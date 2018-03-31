# Description

This is a basic example for creating a React Native App View (μApp) that can be added and run in Gidjit ~ Smart Launcher, available in the [AppStore](https://itunes.apple.com/us/app/gidjit-smart-launcher/id1179176359?at=1001lnP4&mt=8)
 (currently iOS only)

Supported operating system(s) are iOS 10.0+

## Introduction

Gidjit is great for finding and launching apps/actions from your iDevice. The following guide will show you how to add and share your own React Native Apps/Actions within Gidjit. This current repo has a React Native bundled app that can be used as a demo from Gidjit. To run the demo

* Install and Open Gidjit
* From the Home screen of Gidjit create a Launcher Panel if not done so
* Select the Panel from the Home screen to add the action
* Press the button **"All Other Actions"** then scroll to and select **"React Native µApp"**
* Press **"Select Github Zip URL"**
* In the search field enter **"user:gidjituser"**  
* Select **"gidjituser/HelloReact"**
* You should now see this repo. Press the blue box in the bottom right to select the bundled zip.
* Complete setting up the action and press **"Done"**.
* You can now launch the React Native action from Gidjit

See the official [React Native website](https://facebook.github.io/react-native/) for an introduction to React Native.

### Getting Started with your React Native App

- Follow the [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html) to install React Native and its dependencies.
- The following are the recommended versions of react-native and react to use in your app.
  * "react": "16.3.0",
  * "react-native": "0.54.4",
- The following packages are included in the Gidjit and have been linked already
    * "react-native-ble": "^1.0.7"
    * "react-native-vector-icons": "^4.5.0",
    * "react-native-ble-plx": "^0.8.0",
- The following fonts have been linked/included in Gidjit for you
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
	* props -> sessionID (can be used to check it different actions are launching your app)

### How to build, run, and add your React Native app in Gidjit

* Build/Config Project

	- create your project and make sure to run npm install before next step as packages are bundled
	- generate a bundle in the root of the directory called ***"main.ios.jsbundle"*** (for example [from the root of the directory] run: **react-native bundle --platform ios --dev false --entry-file views/ios/index.ios.js --bundle-output main.ios.jsbundle --assets-dest ./**)
	- Optionally add an icon.png to the root of the directory preferably 120x120 px
	- The name and version will be used from your package.json in Gidjit.
	- Upload/Push your repo to Github. Make sure you have an appropriate gitignore. You can use the one from this example as a good start.
	- To summarize - ensure you have to following in the root of your project directory (and they are ***not*** in your .gitignore)

		1. package.json
		2. main.ios.jsbundle
		3. assets (optional, directory for static images that at the moment is not supported, however it will be in a future update)
		4. icon.png (optional)


* Add the micro app (μApp) to Gidjit

	- Select a Launcher Panel
	- Select **"All Other Actions"**
	- From the available action list select **"React Native µApp"**
	- Press **"Select Github Zip"** and search for your repository in the WebView. Example enter ***'user:Your Github user name'*** in the search field. You can also use other Github advanced search features to find your repo.
	- Select your repo once you have found it. When a zipped bundle has been detected, a blue button will appear in the bottom right. Press it to confirm (Please note that Github will automatically generate this zipped bundle). Gidjit will extract the required files from the zip. They will have the following structure/files. ***Project.zip -> RepoName-branch -> [package.json, icon.png, main.ios.jsbundle, assets ....]***. Alternatively if you do not want to use Github you can directly enter the URL of your bundle zipped in the text field below **"Select Github Zip"**. You will need to zip the bundle yourself and make sure it has the structure and files mentioned above.
	- Once complete just press **"Done"** and your action is ready to go
	- While viewing your RN app in Gidjit it can be updated by pressing the **info** (top-left) and selecting **"Update"**.  


### Updates

* Jan 28, 2018
  - Currently it is recommended to use base64 images or images on the cloud specified with a URL.

* Mar 19, 2017
	- From the Gidjit App you can now hide/show the primary app navigation bar with a three finger tap on the screen.
