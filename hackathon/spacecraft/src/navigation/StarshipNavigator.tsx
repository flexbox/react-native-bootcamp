import type { StarshipProps } from "api/types";

import { Routes } from "@/navigation/Routes";
import { StarshipDetailsScreen } from "@/screens/StarshipDetailsScreen";
import { StarshipFeedScreen } from "@/screens/StarshipFeedScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
// For Example
// import { StarshipFeedScreen } from "@/screens/exercice/StarshipFeedScreen";

export type StarshipStackParamList = {
  [Routes.STARSHIP_DETAILS_SCREEN]: {
    route: {
      params: StarshipProps;
    };
  };
  [Routes.STARSHIP_FEED_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<StarshipStackParamList>();

export const StarshipNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={StarshipFeedScreen}
        name={Routes.STARSHIP_FEED_SCREEN}
      />
      <Stack.Screen
        component={StarshipDetailsScreen}
        name={Routes.STARSHIP_DETAILS_SCREEN}
        options={{
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
