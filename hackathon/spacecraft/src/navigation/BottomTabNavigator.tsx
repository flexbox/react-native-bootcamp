/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Routes } from "~/navigation/Routes";
import { PilotNavigator } from "~/navigation/PilotNavigator";
import { StarshipNavigator } from "~/navigation/StarshipNavigator";
import { PlusNavigator } from "~/navigation/PlusNavigator";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: { backgroundColor: theme.colors.surface },
      }}
    >
      <Tab.Screen
        name={Routes.STARSHIP_STACK}
        component={StarshipNavigator}
        options={{
          tabBarLabel: "Starships",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="space-shuttle" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PILOT_STACK}
        component={PilotNavigator}
        options={{
          tabBarLabel: "Pilots",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-astronaut" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PLUS_STACK}
        component={PlusNavigator}
        options={({ route }) => ({
          tabBarLabel: "Plus",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="plus-square" size={22} color={color} />
          ),
          tabBarStyle: ((currentRoute) => {
            const routeName = getFocusedRouteNameFromRoute(currentRoute) ?? "";
            console.log(
              "file: BottomTabNavigator.tsx:57 ~ BottomTabNavigator ~ routeName",
              routeName
            );
            if (routeName === Routes.DISAPPOINTED_SCREEN) {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};
