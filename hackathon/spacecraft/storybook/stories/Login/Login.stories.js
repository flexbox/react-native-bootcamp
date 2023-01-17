import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import { StarshipCard } from "~/components/StarshipCard";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "~/screens/LoginScreen";

storiesOf("Screen", module).add("Login Screen", () => (
  <NavigationContainer>
    <LoginScreen />
  </NavigationContainer>
));
