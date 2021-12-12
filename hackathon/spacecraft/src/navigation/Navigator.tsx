import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useAuthentication } from "../context/Authentication";

import { BottomTabNavigator } from "./BottomTabNavigator";
import { AuthNavigator } from "./AuthNavigator";

const Stack = createStackNavigator();

export const Navigator = () => {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name={"BOTTOM_TABS"} component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name={"AUTH_STACK"} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
