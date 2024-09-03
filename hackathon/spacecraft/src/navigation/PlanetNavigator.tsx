import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PlanetsScreen } from "~/screens/PlanetsScreen";
import { PlanetDetailsScreen } from "~/screens/PlanetDetailsScreen";

import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export const PlanetNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.PLANETS}
        component={PlanetsScreen}
      />
      <Stack.Screen
        name={Routes.PLANET_DETAILS_SCREEN}
        component={PlanetDetailsScreen}
      />
    </Stack.Navigator>
  );
};
