import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PlanetDetailsScreen } from "~/screens/PlanetDetailsScreen";
import { PlanetsScreen } from "~/screens/PlanetsScreen";

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
        component={PlanetsScreen}
        name={Routes.PLANETS}
      />
      <Stack.Screen
        component={PlanetDetailsScreen}
        name={Routes.PLANET_DETAILS_SCREEN}
      />
    </Stack.Navigator>
  );
};
