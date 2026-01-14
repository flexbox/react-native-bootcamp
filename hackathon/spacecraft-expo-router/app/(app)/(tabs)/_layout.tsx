import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tabs.Screen
        name="starships"
        options={{
          title: "Starships",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="rocket"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pilots"
        options={{
          title: "Pilots",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="people"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="planets"
        options={{
          title: "Planets",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="planet"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: "Plus",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="add-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
