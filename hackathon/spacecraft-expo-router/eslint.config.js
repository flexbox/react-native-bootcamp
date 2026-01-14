// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const reactPlugin = require("eslint-plugin-react");
const typescriptParser = require("@typescript-eslint/parser");
const reactNativePlugin = require("eslint-plugin-react-native");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  prettierConfig,
  {
    ignores: ["dist/*"],
  },
  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      prettier,
      react: reactPlugin,
      "react-native": reactNativePlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          usePrettierrc: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "react-native/no-unused-styles": 2,
      "react-native/sort-styles": 2,
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^\\u0000"],
            ["^react", "^@?\\w"],
            ["^(@env)(/.*|$)"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
      camelcase: "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
