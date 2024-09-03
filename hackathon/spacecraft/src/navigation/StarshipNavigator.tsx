import type { StarshipProps } from "api/types";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import { StarshipDetailsScreen } from "~/screens/StarshipDetailsScreen";
// For Example
// import { StarshipFeedScreen } from "~/screens/exercice/StarshipFeedScreen";

export type StarshipStackParamList = {
  [Routes.STARSHIP_FEED_SCREEN]: undefined;
  [Routes.STARSHIP_DETAILS_SCREEN]: {
    route: {
      params: StarshipProps;
    };
  };
};

const Stack = createNativeStackNavigator<StarshipStackParamList>();

export const StarshipNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
      />
      <Stack.Screen
        name={Routes.STARSHIP_DETAILS_SCREEN}
        component={StarshipDetailsScreen}
        options={{
          contentStyle: {
            backgroundColor: "#fff",
          },
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
