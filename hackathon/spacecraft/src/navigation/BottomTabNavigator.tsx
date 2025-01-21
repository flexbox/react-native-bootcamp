import { PilotNavigator } from "@/navigation/PilotNavigator";
import { PlanetNavigator } from "@/navigation/PlanetNavigator";
import { PlusNavigator } from "@/navigation/PlusNavigator";
import { Routes } from "@/navigation/Routes";
import { StarshipNavigator } from "@/navigation/StarshipNavigator";
/* eslint-disable react/no-unstable-nested-components */
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useTheme } from "react-native-paper";

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
        component={StarshipNavigator}
        name={Routes.STARSHIP_STACK}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              color={color}
              name="space-shuttle"
              size={22}
            />
          ),
          tabBarLabel: "Starships",
        }}
      />
      <Tab.Screen
        component={PilotNavigator}
        name={Routes.PILOT_STACK}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              color={color}
              name="user-astronaut"
              size={22}
            />
          ),
          tabBarLabel: "Pilots",
        }}
      />
      <Tab.Screen
        component={PlanetNavigator}
        name={Routes.PLANETS}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              color={color}
              name="planet"
              size={22}
            />
          ),
          tabBarLabel: "Explore",
        }}
      />
      <Tab.Screen
        component={PlusNavigator}
        name={Routes.PLUS_STACK}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              color={color}
              name="plus-square"
              size={22}
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
