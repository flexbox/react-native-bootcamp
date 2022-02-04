import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";

import { Routes } from "./Routes";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};
