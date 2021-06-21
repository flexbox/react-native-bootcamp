import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screen/LoginScreen";
import StarshipFeedScreen from "../screen/StarshipFeedScreen";

import { AppRoute } from "./AppRoutes";

const Stack = createStackNavigator();

const StarShipStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={AppRoute.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
      />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <StarShipStack />
    </NavigationContainer>
  );
};
