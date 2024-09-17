// metro.config.js
const { generate } = require("@storybook/react-native/scripts/generate");
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

generate({
  configPath: path.resolve(__dirname, "./.storybook"),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

module.exports = config;
