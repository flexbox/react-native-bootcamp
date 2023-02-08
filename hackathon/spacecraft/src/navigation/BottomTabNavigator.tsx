import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

import { Routes } from "./Routes";

import { PilotNavigator } from "~/navigation/PilotNavigator";
import { StarshipNavigator } from "~/navigation/StarshipNavigator";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.secondary}
      barStyle={{ backgroundColor: theme.colors.surface }}
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
    </Tab.Navigator>
  );
};
