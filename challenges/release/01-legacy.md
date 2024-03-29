# Release

## 📡 What you will learn

- Add an automated Over The Air Updates workflow

![OTA](https://raw.githubusercontent.com/flexbox/react-native-workshop/main/challenges/release/ota.jpg)

Over The Air updates allows us to update the code of your application without releasing a build to the Apple App Store and the Google Play Store.

## 👾 Before we start the exercise

Today we'll walk you through the options for distributing your `react-native` app.

- You need to have an Expo and a GitHub account
- You should have a basic knowledge of CI/CD with [GitHub Actions](https://github.com/features/actions)
- Read this artice: [Simple automated release for React Native with Expo](https://davidl.fr/blog/github-action-expo)

## 👨‍🚀 Exercise 1

- [ ] add `EXPO_CLI_USERNAME` and `EXPO_CLI_PASSWORD` variables to **repository** > **settings** > **secrets**
- [ ] Create 2 files `staging.yml` and `production.yml`
- [ ] Create a new pull request on your repo to test the CI

## 👽 Bonus

We can generate a QR code to scan for every new pull request.

![GitHub action with Expo QR code](https://raw.githubusercontent.com/flexbox/react-native-workshop/main/challenges/release/github-actions-qr-preview.png)

1. Generate an image with [QR code API](https://goqr.me/api/)
2. Add [a comment to your pull request](https://github.com/mshick/add-pr-comment) with GitHub actions
3. Comment with a link to your project on `exp.host` with a custom `release-channel`

```yml
steps:
  - name: Add comment to PR with QR code
    uses: mshick/add-pr-comment@v1
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      EXPO_PROJECT: '@flexbox/maas' # Put in your own Expo project name here
    with:
      message: |
        ## Application
        ![Expo QR](https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=exp://exp.host/${{ env.EXPO_PROJECT }}?release-channel=pr${{ github.event.number }})
        Published to https://exp.host/${{ env.EXPO_PROJECT }}?release-channel=pr${{ github.event.number }}
```
