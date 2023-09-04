# Setup instructions

You will find the instructions to set up your computer for your next React Native Bootcamp.

- 💡 I do provide advice for [Linux and macOS](https://davidl.fr/blog/react-native-setup).
- 💡 Being an **administrator on windows is mandatory**, I am **not responsible** if you encounter issues.

## System Requirements

- [ ] [git](https://git-scm.com/) v2.40 or greater
- [ ] [Node.js](https://nodejs.org/) v18 or greater

Use the following command from your terminal to check your Node version.

```console
node --version
```

If you have a recent version installed, it should do.

## Virtual Simulators

<details>
<summary>macOS</summary>

- [ ] [Xcode](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) for macOS

Check if everything is working.

```console
xcode-select --install
```

To accept terms and conditions

```console
xcode-select -p
```

Should output something like `/Applications/Xcode.app/Contents/Developer` if it's not the case run `sudo xcode-select --reset`

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

- [ ] Bonus 👽 - [Expo Orbit](https://github.com/expo/orbit) to accelerate your development workflow with one-click build launches and simulator management

</details>

<details>
<summary>Linux</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

</details>

<details>
<summary>Windows</summary>

- [ ] [Android Studio](https://developer.android.com/studio) with API levels 21+

</details>

## Smartphone Requirements

- [ ] Create an [expo account](https://expo.dev/signup).
- [ ] Download **Expo GO** on your smartphone.
- [ ] Log in to your Expo account on your smartphone.

You are going to follow a **Native Mobile Application Bootcamp**.

`iOS` phones are the easiest way, Android is nice too BUT there are more issues. You need a decent smartphone to enjoy a fast experience.

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
