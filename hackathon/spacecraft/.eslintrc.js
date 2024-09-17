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
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  overrides: [
    {
      // Test files only
      extends: ["plugin:testing-library/react"],
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    },
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: [
    "react",
    "react-native",
    "perfectionist", // Keep only 'perfectionist'
  ],
  root: true, // Make sure eslint picks up the config at the root of the directory
  rules: {
    "@typescript-eslint/no-explicit-any": "warn", // Detect usage of `any` type
    "@typescript-eslint/no-unused-vars": "warn", // Detect unused variables
    camelcase: "off", // Disable camelcase rule
    "perfectionist/sort-imports": "error", //  Perfectionist import sorting https://perfectionist.dev/guide/introduction
    "perfectionist/sort-interfaces": ["error"], // Perfectionist interfaces sorting
    "perfectionist/sort-objects": [
      "error",
      {
        ignorePattern: ["useQuery*", "queries*", "useMutation*", "mutations*"],
        type: "natural",
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        usePrettierrc: true,
      },
    ],
    "react/no-unescaped-entities": "off",
    "react-native/no-color-literals": 2, // Enforce color literals are not used
    "react-native/no-raw-text": 0, // Detect raw text outside of Text component
    "react-native/no-unused-styles": 2, // Detect unused StyleSheet rules
    "react-native/sort-styles": 2, // Enforce style definitions are sorted
  },
  settings: {
    perfectionist: {
      partitionByComment: true,
      type: "line-length",
    },
  },
};
