# Release

## 📡 What you will learn

- Add an automated Over The Air Updates workflow with [EAS Update](https://docs.expo.dev/eas-update/introduction/) and GitHub Actions.

![OTA](https://raw.githubusercontent.com/flexbox/react-native-workshop/main/challenges/release/ota.jpg)

Over The Air updates allows us to update the code of your application without releasing a build to the Apple App Store and the Google Play Store.

## 👾 Before we start the exercise

Today we'll walk you through the options for distributing your `react-native` app.

- You need to have an Expo and a GitHub account
- You should have a basic knowledge of CI/CD with [GitHub Actions](https://github.com/features/actions)

## 👨‍🚀 Exercise 1

- [ ] Configure EAS Update in your project:

```console
npx expo install expo-updates
eas update:configure
```

- [ ] Create a [personal access token](https://expo.dev/settings/access-tokens) and add it as `EXPO_TOKEN` to **repository** > **settings** > **secrets and variables** > **actions**
- [ ] Create a `.github/workflows/update.yml` file that publishes an update on every push to `main`:

```yml
name: update
on:
  push:
    branches: [main]

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: npm
      - uses: expo/expo-github-action@v9
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}
      - run: npm ci
      - run: eas update --auto --non-interactive
```

- [ ] Push a commit on `main` and check the update on your [Expo dashboard](https://expo.dev).

## 👽 Bonus

We can generate a QR code to scan for every new pull request.

![GitHub action with Expo QR code](https://raw.githubusercontent.com/flexbox/react-native-workshop/main/challenges/release/github-actions-qr-preview.png)

- [ ] Create a `.github/workflows/preview.yml` file with the [`preview` action](https://github.com/expo/expo-github-action/tree/main/preview): it publishes an update on a branch named after your PR and comments the QR code for you.

```yml
name: preview
on: [pull_request]

permissions:
  contents: read
  pull-requests: write

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: npm
      - uses: expo/expo-github-action@v9
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}
      - run: npm ci
      - uses: expo/expo-github-action/preview@v9
        with:
          command: eas update --auto --branch ${{ github.event.pull_request.head.ref }}
```

- [ ] Create a new pull request on your repo to test the CI and scan the QR code with your development build.
