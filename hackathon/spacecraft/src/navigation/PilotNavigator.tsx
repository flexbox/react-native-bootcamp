import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { PilotDetailsScreen } from "~/screens/PilotDetailsScreen";
import { PilotScreen } from "~/screens/PilotScreen";
import { StarshipDetailsScreen } from "~/screens/StarshipDetailsScreen";

const Stack = createNativeStackNavigator();

export const PilotNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={PilotScreen}
        name={Routes.PILOT_SCREEN}
      />
      <Stack.Screen
        component={PilotDetailsScreen}
        name={Routes.PILOT_DETAILS_SCREEN}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          component={StarshipDetailsScreen}
          name={Routes.STARSHIP_DETAILS_SCREEN}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
