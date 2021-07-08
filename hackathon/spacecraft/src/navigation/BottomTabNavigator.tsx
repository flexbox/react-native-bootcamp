import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import StarshipFeedScreen from "../screen/StarshipFeedScreen";
import { PilotScreen } from "../screen";
import StarshipDetailsScreen from "../screen/StarshipDetailsScreen";

import { AppRoutes } from "./AppRoutes";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const StarshipNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
      />
      <Stack.Screen
        name={AppRoutes.STARSHIP_DETAIL_SCREEN}
        component={StarshipDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.purple100}
      inactiveColor={Colors.purple600}
      barStyle={{ backgroundColor: Colors.purple900 }}
    >
      <Tab.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="space-shuttle" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.PILOT_PROFILE}
        component={PilotScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-astronaut" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
