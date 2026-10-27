import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  addons: [],
  stories: [
    "../src/components/**/*.stories.?(ts|tsx|js|jsx)",
    "../src/screens/**/*.stories.?(ts|tsx|js|jsx)",
  ],
};

export default main;
