import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button",
};

export const Default = () => (
  <View style={{ padding: 16, gap: 16 }}>
    <Button
      mode="text"
      onPress={() => {}}
    >
      Text Button
    </Button>
    <Button
      mode="outlined"
      onPress={() => {}}
    >
      Outlined Button
    </Button>
    <Button
      mode="contained"
      onPress={() => {}}
    >
      Contained Button
    </Button>
  </View>
);

Default.story = {
  name: "Default",
};
