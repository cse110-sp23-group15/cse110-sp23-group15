## Jest-Puppeteer and Appium-webdriverIO(mobile)

# Setting up Jest-puppeteer

Just refer to lab 8 materials, package.json should already be modified.

```
npm install --save-dev jest babel-jest @babel/core @babel/preset-env puppeteer jest-puppeteer
```

# Setting up Android mobile testing(very annoying and easy to get into any error)

Appium is a protocol/tool to run testing on mobile end, it recommends us to use WebDriverIO as the testing framework. (It should be compatible with Jest as well, but I have failed to set them together)

[Guide to install Appium and set up the simulation environment](https://appium.io/docs/en/2.0/quickstart/)

Appium is easy to install, but setting up mobile simulation is hard

Make sure you have Java installed on your PC and JAVA_HOME environment variable

To simulate Android environment, you need to install Android Studio SDK Manager. Within Android Studio SDK Manager, download the Android platform to automate(i.e. android sdk tools-29), and set ANDROID_HOME as an environment variable pointing to your android-sdk folder. 

You may also download the Android SDK simulator, I separately used another simulator

I also added these three to Path: 
```
%ANDROID_HOME%\build-tools\29.0.3(depending on which build-tool you downloaded)
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools.
```

Run adb in your administrator/normal command prompt to see whether the path has been set up correctly.

Install Appium, WebdriverIO, and UIAutomator2 according to the link in tutorial. Also install expect to run the tests

```
npm install expect
npm install expect-webdriverio
```

To start testing on mobile, connect your Android device(with developer mode on) or start Android simulator. Sometimes you don't need to do "adb connect", but my emulator needs so. Type "adb devices" to check the connected devices.


```
adb kill-server
adb server
adb connect 127.0.0.1:7555 //The IP address of your emulator
```

Run ```appium --allow-insecure chromedriver_autodownload``` in cmd, and you may run the tests. Afterwards you only need to do ```appium``` to start appium server.

[Guide on WebdriverIO APIs](https://webdriver.io/docs/api/)


