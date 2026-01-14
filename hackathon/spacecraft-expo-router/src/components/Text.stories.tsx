import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default {
  title: "Text",
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Text variant="displayLarge">Display Large</Text>
    <Text variant="displayMedium">Display Medium</Text>
    <Text variant="displaySmall">Display small</Text>

    <Text variant="headlineLarge">Headline Large</Text>
    <Text variant="headlineMedium">Headline Medium</Text>
    <Text variant="headlineSmall">Headline Small</Text>

    <Text variant="titleLarge">Title Large</Text>
    <Text variant="titleMedium">Title Medium</Text>
    <Text variant="titleSmall">Title Small</Text>

    <Text variant="bodyLarge">Body Large</Text>
    <Text variant="bodyMedium">Body Medium</Text>
    <Text variant="bodySmall">Body Small</Text>
  </View>
);

Default.story = {
  name: "Default",
};
