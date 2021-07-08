import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";

import LoginScreen from "../screen/LoginScreen";
import StarshipFeedScreen from "../screen/StarshipFeedScreen";
import { PilotScreen } from "../screen";

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
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.purple100}
      inactiveColor={Colors.purple600}
      barStyle={{ backgroundColor: Colors.purple900 }}
    >
      <Tab.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
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

export const Navigator = () => {
  const [user, setUser] = useState<boolean>(true);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
