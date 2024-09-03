import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { PilotScreen } from "~/screens/PilotScreen";
import { PilotDetailsScreen } from "~/screens/PilotDetailsScreen";
import { StarshipDetailsScreen } from "~/screens/StarshipDetailsScreen";

const Stack = createNativeStackNavigator();

export const PilotNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.PILOT_SCREEN}
        component={PilotScreen}
      />
      <Stack.Screen
        name={Routes.PILOT_DETAILS_SCREEN}
        component={PilotDetailsScreen}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={Routes.STARSHIP_DETAILS_SCREEN}
          component={StarshipDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
