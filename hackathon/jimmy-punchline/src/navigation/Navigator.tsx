import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { LyricsScreen } from "../screens/LyricsScreen";

import { ROUTES } from "./Routes";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerLargeTitle: true,
          presentation: "modal"
        }}
      >
        <Stack.Screen
          name={ROUTES.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            headerShown: true,
            headerLargeTitle: true,
            headerLargeTitleStyle: {
              fontWeight: "bold"
            }
          }}
        >
          <Stack.Screen
            name={ROUTES.LYRICS_SCREEN}
            component={LyricsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
