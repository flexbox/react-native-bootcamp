# Workshop Setup

💡 I do provide advices for Linux and macOS.

💡 I am **not responsable** if you encounter issues on windows machines.
(But you can follow theses instructions [https://academy.infinite.red/p/installing-react-native-tutorial-on-windows-10/](https://academy.infinite.red/p/installing-react-native-tutorial-on-windows-10/) to make it work).

## System Requirements

- [ ] [git](https://git-scm.com/) v2.13 or greater
- [ ] [NodeJS](https://nodejs.org/) v12 or greater
- [ ] [npm](https://www.npmjs.com/) v6 or greater
- [ ] [yarn v1](https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

Use the following command at your terminal to check your Node version.

```
node --version
```

If you have a recent version installed, it should do.

For creating our React Native project we are going to use [Expo](https://expo.io/), which is an open-source platform for making native apps for Android and iOS using JavaScript.

```console
npm install --global expo-cli
```

## Virtual Simulators

- [ ] [Xcode 12](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) for macOS
- [ ] [Android Studio](https://developer.android.com/studio) with api levels 21+ for Linux / Windows

## Smartphone Requirements

- [ ]  Create an account [https://expo.io/signup](https://expo.io/signup)
- [ ]  Download **Expo GO**
  - iPhone : [http://bit.ly/expo-ios-client](http://bit.ly/expo-ios-client)
  - Android : [http://bit.ly/expo-android-client](http://bit.ly/expo-android-client)
- [ ]  Sign-in with your Expo account on your phone

You are going to follow a **Native Mobile Application Workshop**.
`iOS` phones are the easiest way, Android are nice too BUT there is more issues.
You need a decent smartphone to enjoy a fast experience.

## Text Editor

- [ ] Download and install [Visual Studio Code](https://code.visualstudio.com/)

```console
# macOS users

brew install --cask visual-studio-code
```

```console
# Linux users

wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```
