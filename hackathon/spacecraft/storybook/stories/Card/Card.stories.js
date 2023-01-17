import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import { StarshipCard } from "~/components/StarshipCard";
import { NavigationContainer } from "@react-navigation/native";

const shipFixture = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
};
storiesOf("Card", module).add("Simple Card", () => (
  <NavigationContainer>
    <StarshipCard ship={shipFixture} />
  </NavigationContainer>
));
