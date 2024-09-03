/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { useTheme } from "react-native-paper";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Routes } from "~/navigation/Routes";
import { PlusNavigator } from "~/navigation/PlusNavigator";
import { PilotNavigator } from "~/navigation/PilotNavigator";
import { PlanetNavigator } from "~/navigation/PlanetNavigator";
import { StarshipNavigator } from "~/navigation/StarshipNavigator";

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
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="space-shuttle"
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Starships",
        }}
      />
      <Tab.Screen
        name={Routes.PILOT_STACK}
        component={PilotNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="user-astronaut"
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Pilots",
        }}
      />
      <Tab.Screen
        name={Routes.PLANETS}
        component={PlanetNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="planet"
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Explore",
        }}
      />
      <Tab.Screen
        name={Routes.PLUS_STACK}
        component={PlusNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="plus-square"
              size={22}
              color={color}
            />
          ),
          tabBarLabel: "Plus",
          tabBarStyle: ((currentRoute) => {
            const routeName = getFocusedRouteNameFromRoute(currentRoute) ?? "";
            if (
              routeName === Routes.DO_YOU_LIKE_SCREEN ||
              routeName === Routes.DISAPPOINTED_SCREEN ||
              routeName === Routes.LOVE_SCREEN
            ) {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};
