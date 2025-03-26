import { ExpoConfig } from "@expo/config-types";

import { version } from "./package.json";

// Project constants
const EAS_PROJECT_ID = "012accc3-4ce5-4bae-9f4d-2f842489f07a";
const PROJECT_SLUG = "spacecraft";
const OWNER = "weshipit";

// App production config
const APP_NAME = "Spacecraft";
const BUNDLE_IDENTIFIER = "weshipit.today.spacecraft";
const PACKAGE_NAME = "weshipit.today.spacecraft";
const SCHEME = "spacecraft";

export default ({ config }: { config: ExpoConfig }): ExpoConfig => {
  const environment = process.env.APP_ENV || "development";
  console.log("⚙️ Building app for environment:", environment);

  const { adaptiveIcon, bundleIdentifier, icon, name, packageName, scheme } =
    getDynamicAppConfig(
      environment as "development" | "preview" | "production",
    );

  return {
    ...config,
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff",
        foregroundImage: adaptiveIcon,
      },
      package: packageName,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=weshipit.today.spacecraft",
    },
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
    icon: icon,
    ios: {
      appStoreUrl: "https://apps.apple.com/fr/app/<compagny_name>/idxxxxxxxxx",
      bundleIdentifier: bundleIdentifier,
      supportsTablet: true,
    },
    name: name,
    newArchEnabled: true,
    orientation: "portrait",
    owner: OWNER,
    plugins: [],
    runtimeVersion: {
      policy: "appVersion",
    },
    scheme: scheme,
    slug: PROJECT_SLUG,
    splash: {
      backgroundColor: "#ffffff",
      image: "./assets/splash.png",
      resizeMode: "contain",
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
    userInterfaceStyle: "automatic",
    version,
    web: {
      bundler: "metro",
      favicon: "./assets/favicon.png",
      output: "static",
    },
  };
};

// Dynamically configure the app based on the environment
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production",
) => {
  if (environment === "production") {
    return {
      adaptiveIcon: "./assets/adaptive-icon.png",
      bundleIdentifier: BUNDLE_IDENTIFIER,
      icon: "./assets/icon.png",
      name: APP_NAME,
      packageName: PACKAGE_NAME,
      scheme: SCHEME,
    };
  }

  if (environment === "preview") {
    return {
      adaptiveIcon: "./assets/adaptive-icon-preview.png",
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      icon: "./assets/icon-preview.png",
      name: `${APP_NAME} Preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      scheme: `${SCHEME}-prev`,
    };
  }

  return {
    adaptiveIcon: "./assets/adaptive-icon-dev.png",
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    icon: "./assets/icon-dev.png",
    name: `${APP_NAME} Development`,
    packageName: `${PACKAGE_NAME}.dev`,
    scheme: `${SCHEME}-dev`,
  };
};
