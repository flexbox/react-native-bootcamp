module.exports = {
  env: {
    node: true
  },
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "react-native", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        usePrettierrc: true
      }
    ],
    "react-native/no-color-literals": 2, // enforce color literals are not used
    "react-native/no-unused-styles": 2, // detect unused StyleSheet rules
    "react-native/no-raw-text": 0, // detect raw text outside of Text component
    "react-native/sort-styles": 2, // enforce style definitions are sorted
    "@typescript-eslint/no-unused-vars": "warn", // detect unused variables
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
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
        ]
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn"
  }
};
