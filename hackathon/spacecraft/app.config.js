module.exports = {
  android: {
    adaptiveIcon: {
      backgroundColor: "#FFFFFF",
      foregroundImage: "./assets/adaptive-icon.png",
    },
    package: "weshipit.today.spacecraft",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=weshipit.today.spacecraft",
  },
  assetBundlePatterns: ["**/*"],
  description: "Learning materials for the `react-native-bootcamp` repository.",
  extra: {
    eas: {
      projectId: "012accc3-4ce5-4bae-9f4d-2f842489f07a",
    },
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  icon: "./assets/icon.png",
  ios: {
    appStoreUrl:
      "https://apps.apple.com/fr/app/retail-shake-scanner/id1234567890",
    bundleIdentifier: "weshipit.today.spacecraft",
    supportsTablet: true,
  },
  name: "spacecraft",
  orientation: "portrait",
  owner: "weshipit",
  plugins: [
    [
      "app-icon-badge",
      {
        // enable/ disable the plugin based on the environment (usually disabled for production builds)
        badges: [
          {
            background: "#FF0000", // by default it will be black and we are only supporting hex format for colors
            color: "white", // by default it will be white and the only color supported for now is white and black
            text: process.env.ENVIRONMENT || "unkown", // banner text
            type: "banner", // banner or ribbon
          },
          {
            text: process.env.version,
            type: "ribbon",
          },
        ],
        enabled: process.env.ENVIRONMENT === "production" ? false : true,
      },
    ],
  ],
  slug: "spacecraft",
  splash: {
    backgroundColor: "#ffffff",
    image: "./assets/splash.png",
    resizeMode: "contain",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/012accc3-4ce5-4bae-9f4d-2f842489f07a",
  },
  version: "1.0.2",
  web: {
    favicon: "./assets/favicon.png",
  },
};
