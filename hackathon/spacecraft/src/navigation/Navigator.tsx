import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screen/LoginScreen";
import TermsScreen from "../screen/TermsScreen";

import { AppRoutes } from "./AppRoutes";
import BottomTabNavigator from "./BottomTabNavigator";

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

export const Navigator = () => {
  const [user, setUser] = useState<boolean>(false);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
