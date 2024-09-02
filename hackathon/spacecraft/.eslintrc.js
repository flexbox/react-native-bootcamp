module.exports = {
  env: {
    node: true,
  },
  extends: [
    "expo",
    "eslint:recommended", // ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:react/recommended", // React rules
    "plugin:react/jsx-runtime", // Support for React 17 JSX
    "plugin:prettier/recommended", // Prettier recommended rules
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: [
    "react",
    "react-native",
    "simple-import-sort",
    "perfectionist", // Existing plugins plus 'perfectionist'
  ],
  root: true, // Make sure eslint picks up the config at the root of the directory
  rules: {
    "@typescript-eslint/no-explicit-any": "warn", // Detect usage of `any` type
    "@typescript-eslint/no-unused-vars": "warn", // Detect unused variables
    camelcase: "off", // Disable camelcase rule
    "perfectionist/sort-imports": "error", // Previous perfectionist rule
    "perfectionist/sort-interfaces": ["error"], // New perfectionist rule
    "perfectionist/sort-objects": ["error", { type: "alphabetical" }], // New perfectionist rule
    "prettier/prettier": [
      "warn",
      {
        usePrettierrc: true,
      },
    ],
    "react-native/no-color-literals": 2, // Enforce color literals are not used
    "react-native/no-raw-text": 0, // Detect raw text outside of Text component
    "react-native/no-unused-styles": 2, // Detect unused StyleSheet rules
    "react-native/sort-styles": 2, // Enforce style definitions are sorted
    "simple-import-sort/exports": "warn", // Enforce sorting exports within module
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
  },
  settings: {
    perfectionist: {
      partitionByComment: true,
      type: "line-length",
    },
  },
};
