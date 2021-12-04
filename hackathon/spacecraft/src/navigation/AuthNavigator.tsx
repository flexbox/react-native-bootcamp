import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import TermsScreen from "../screens/TermsScreen";

import { AppRoutes } from "./AppRoutes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
