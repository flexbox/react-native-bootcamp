module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["transform-remove-console", "react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "~/",
          rootPathSuffix: "./src/",
        },
      ],
    ],
  };
};
