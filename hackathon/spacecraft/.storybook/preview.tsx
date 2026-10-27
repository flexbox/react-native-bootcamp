import type { Preview } from "@storybook/react-native";

import { View } from "react-native";

const preview: Preview = {
  decorators: [
    // Using a decorator to apply padding for every story
    (StoryFn) => (
      <View style={{ flex: 1 }}>
        <StoryFn />
      </View>
    ),
  ],
  parameters: {
    my_param: "anything",
  },
};

export default preview;
