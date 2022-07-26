import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen } from "../screens/OnboardingScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { LoginScreen } from "../screens/LoginScreen";

import { Routes } from "./routes";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.ONBOARDING_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={Routes.ONBOARDING_SCREEN}
          component={OnboardingScreen}
        />
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.SIGN_IN_SCREEN} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
