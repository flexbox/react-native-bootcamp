# Setup instructions

You will find the instructions to set up you computer for yout next React Native Bootcamp.

💡 I do provide advices for Linux and macOS.

💡 Being **administrator on windows is mandatory**, I am **not responsible** if you encounter issues.
(_You can follow this [setup tutorial from InfiniteRed](https://academy.infinite.red/p/installing-react-native-tutorial-on-windows-10/) to make everything work_).

## System Requirements

- [ ] [git](https://git-scm.com/) v2.13 or greater
- [ ] [NodeJS](https://nodejs.org/) v12 or greater
- [ ] [npm](https://www.npmjs.com/) v6 or greater
- [ ] [yarn](https://classic.yarnpkg.com/en/docs/install)

Use the following command from your terminal to check your Node version.

```console
node --version
```

If you have a recent version installed, it should do.

For creating our React Native project we are going to use [Expo](https://expo.io/), which is an open-source platform for making native apps for Android and iOS using JavaScript.

```console
npm install --global expo-cli
```

## Virtual Simulators

<details>
<summary>macOS</summary>

- [ ] [Xcode 12](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) for macOS

Check if everything is working.

```console
xcode-select --install
```

To accept terms and conditions

```console
xcode-select -p
```

Should output something like `/Applications/Xcode.app/Contents/Developer` if it's mot the case run `sudo xcode-select --reset`

- [ ] [Android Studio](https://developer.android.com/studio) with api levels 21+

</details>

<details>
<summary>Linux</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with api levels 21+

</details>

<details>
<summary>Windows</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with api levels 21+

</details>

## Smartphone Requirements

- [ ] Create an account [https://expo.io/signup](https://expo.io/signup)
- [ ] Download **Expo GO**
  - iPhone : [http://bit.ly/expo-ios-client](http://bit.ly/expo-ios-client)
  - Android : [http://bit.ly/expo-android-client](http://bit.ly/expo-android-client)
- [ ] Sign-in with your Expo account on your phone

You are going to follow a **Native Mobile Application Bootcampt**.
`iOS` phones are the easiest way, Android are nice too BUT there is more issues.

You need a decent smartphone to enjoy a fast experience.

## Text Editor

- [ ] Download and install [Visual Studio Code](https://code.visualstudio.com/)

<details>
<summary>macOS</summary>

```console
brew install --cask visual-studio-code
```

</details>

<details>
<summary>Linux</summary>

```console
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

</details>
