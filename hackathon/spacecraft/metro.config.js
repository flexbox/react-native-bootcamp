// metro.config.js
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  configPath: path.resolve(__dirname, "./.storybook"),
  // Strip Storybook from the bundle unless `STORYBOOK_ENABLED=true`
  enabled: process.env.STORYBOOK_ENABLED === "true",
});
