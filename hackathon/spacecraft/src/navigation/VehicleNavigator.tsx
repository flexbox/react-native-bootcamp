import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "@/navigation/Routes";
import { VehiclesScreen } from "@/screens/VehiclesScreen";

const Stack = createNativeStackNavigator();

export const VehicleNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={VehiclesScreen}
        name={Routes.VEHICLES_SCREEN}
      />
    </Stack.Navigator>
  );
};
