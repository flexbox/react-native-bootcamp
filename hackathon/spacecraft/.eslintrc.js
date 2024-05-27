module.exports = {
  extends: ["expo", "react-native-wcandillon"],
  plugins: ["@tanstack/query"],
  requireConfigFile: false,
  rules: {
    camelcase: "off",
    "import/no-anonymous-default-export": [1, { allowArray: true }],
  },
};
