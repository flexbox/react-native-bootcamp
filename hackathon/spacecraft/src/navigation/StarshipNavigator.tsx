import type { StarshipProps } from "api/types";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { StarshipDetailsScreen } from "~/screens/StarshipDetailsScreen";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
// For Example
// import { StarshipFeedScreen } from "~/screens/exercice/StarshipFeedScreen";

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
            backgroundColor: "#fff",
          },
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
