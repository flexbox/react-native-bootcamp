import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { StarshipDetailsScreen } from "~/screens/StarshipDetailsScreen";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";

const Stack = createNativeStackNavigator();

export const StarshipNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
        // component={StarshipFeedExampleScreen}
      />
      <Stack.Screen
        name={Routes.STARSHIP_DETAILS_SCREEN}
        component={StarshipDetailsScreen}
      />
    </Stack.Navigator>
  );
};
