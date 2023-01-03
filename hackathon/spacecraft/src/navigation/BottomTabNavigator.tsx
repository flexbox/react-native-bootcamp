import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";

import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { StarshipDetailsScreen } from "../screens/StarshipDetailsScreen";

import { Routes } from "./Routes";

import { PilotScreen } from "~/screens/PilotScreen";
import { PilotDetailsScreen } from "~/screens/PilotDetailsScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StarshipNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name={Routes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
        // component={StarshipFeedExampleScreen}
      />
      <Stack.Screen
        name={Routes.STARSHIP_DETAILS_SCREEN}
        component={StarshipDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const PilotNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.PILOT_SCREEN} component={PilotScreen} />
      <Stack.Screen
        name={Routes.PILOT_DETAILS_SCREEN}
        component={PilotDetailsScreen}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={Routes.STARSHIP_DETAILS_SCREEN}
          component={StarshipDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

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
