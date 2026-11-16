// https://docs.expo.dev/guides/using-eslint/
const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const expoConfig = require("eslint-config-expo/flat");
const perfectionist = require("eslint-plugin-perfectionist");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const react = require("eslint-plugin-react");
const reactNative = require("eslint-plugin-react-native");
const testingLibrary = require("eslint-plugin-testing-library");
const { defineConfig } = require("eslint/config");
const globals = require("globals");

module.exports = defineConfig([
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      ".storybook/**",
      ".yarn/**",
      ".pnp.cjs",
      "dist/**",
      "web-build/**",
      "ios/**",
      "android/**",
    ],
  },
  expoConfig,
  js.configs.recommended, // ESLint rules
  tseslint.configs["flat/recommended"], // TypeScript rules
  react.configs.flat.recommended, // React rules
  react.configs.flat["jsx-runtime"], // Support for React 17 JSX
  prettierRecommended, // Prettier recommended rules
  perfectionist.configs["recommended-natural"],
  {
    // Test files only
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    ...testingLibrary.configs["flat/react"],
    rules: {
      ...testingLibrary.configs["flat/react"].rules,
      // RNTL 14 `fireEvent` is async and must be awaited
      "testing-library/no-await-sync-events": "off",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Detect usage of `any` type
      "@typescript-eslint/no-require-imports": "off", // Allow `require()` for static assets
      "@typescript-eslint/no-unused-vars": "warn", // Detect unused variables
      camelcase: "off", // Disable camelcase rule
      "perfectionist/sort-imports": "error", //  Perfectionist import sorting https://perfectionist.dev/guide/introduction
      "perfectionist/sort-interfaces": ["error"], // Perfectionist interfaces sorting
      "perfectionist/sort-modules": "off",
      "perfectionist/sort-objects": [
        "error",
        {
          // Keep TanStack Query objects in their declared order
          type: "unsorted",
          useConfigurationIf: {
            callingFunctionNamePattern:
              "^(useQuery|queries|useMutation|mutations)",
          },
        },
        {
          type: "unsorted",
          useConfigurationIf: {
            allNamesMatchPattern:
              "^(queryKey|queryFn|enabled|staleTime|gcTime|select|placeholderData|initialData|retry|mutationKey|mutationFn|onSuccess|onError|onSettled|onMutate)$",
          },
        },
        {
          type: "natural",
        },
      ],
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
      "react/no-unescaped-entities": "off",
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: "line-length",
      },
    },
  },
]);
