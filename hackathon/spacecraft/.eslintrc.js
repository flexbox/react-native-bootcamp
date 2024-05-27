module.exports = {
  extends: ["expo", "react-native-wcandillon"],
  plugins: ["@tanstack/query"],
  rules: {
    camelcase: "off",
    "import/no-anonymous-default-export": [1, { allowArray: true }],
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathPrefix: "~",
        rootPathSuffix: "src",
      },
    },
  },
};
