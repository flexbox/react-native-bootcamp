import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./Routes";

import { ExploreScreen } from "~/screens/ExploreScreen";
import { PlanetDetailsScreen } from "~/screens/PlanetDetailsScreen";

const Stack = createNativeStackNavigator();

export const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.EXPLORE_SCREEN} component={ExploreScreen} />
      <Stack.Screen
        name={Routes.PLANET_DETAILS_SCREEN}
        component={PlanetDetailsScreen}
      />
    </Stack.Navigator>
  );
};
