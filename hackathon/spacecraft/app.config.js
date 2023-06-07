module.exports = {
  name: "spacecraft",
  description: "Learning materials for the `react-native-bootcamp` repository.",
  slug: "spacecraft",
  owner: "weshipit",
  version: "1.0.2",
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/012accc3-4ce5-4bae-9f4d-2f842489f07a",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "weshipit.today.spacecraft",
    appStoreUrl:
      "https://apps.apple.com/fr/app/retail-shake-scanner/id1234567890",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "weshipit.today.spacecraft",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=weshipit.today.spacecraft",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: "012accc3-4ce5-4bae-9f4d-2f842489f07a",
    },
  },
};
