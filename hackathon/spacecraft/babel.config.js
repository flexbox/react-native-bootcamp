module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        plugins: ["transform-remove-console", "react-native-paper/babel"],
      },
    },
    plugins: [
      "react-native-reanimated/plugin", // order matters
    ],
    presets: ["babel-preset-expo"],
  };
};
