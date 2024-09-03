import React from "react";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { useAuthentication } from "~/context/Authentication";
import { useAppearanceTheme } from "~/hooks/useAppearanceTheme";

import { AuthNavigator } from "./AuthNavigator";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const { user } = useAuthentication();
  const appearanceTheme = useAppearanceTheme();

  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={appearanceTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name={"BOTTOM_TABS"}
            component={BottomTabNavigator}
          />
        ) : (
          <Stack.Screen
            name={"AUTH_STACK"}
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
