module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  root: true, // make sure eslint picks up the config at the root of the directory
  extends: [
    "eslint:recommended", // ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:react/recommended", // React rules
    "plugin:react/jsx-runtime", // support for React 17 JSX
    "plugin:prettier/recommended", // Prettier recommended rules
  ],
  plugins: ["react", "react-native", "eslint-plugin-simple-import-sort"], // add React and React Native plugins
  rules: {
    camelcase: "off", // disable camelcase rule
    "@typescript-eslint/no-explicit-any": "warn", // detect usage of `any` type
    "simple-import-sort/exports": "warn", // enforce sorting exports within module
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Environment variables
          ["^(@env)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "react-native/no-color-literals": 2, // enforce color literals are not used
    "react-native/no-unused-styles": 2, // detect unused StyleSheet rules
    "react-native/no-raw-text": 0, // detect raw text outside of Text component
    "react-native/sort-styles": 2, // enforce style definitions are sorted
    "prettier/prettier": [
      // Prettier rules
      "warn",
      {
        usePrettierrc: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn", // detect unused variables
  },
};
