module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["transform-remove-console"],
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
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".ios.js",
            ".android.js",
            ".expo.js",
          ],
        },
      ],
    ],
  };
};
