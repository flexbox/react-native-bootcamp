import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { PlusScreen } from "~/screens/PlusScreen";
import { DoYouLikeScreen } from "~/screens/DoYouLikeScreen";

const Stack = createNativeStackNavigator();

export const PlusNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.PLUS_SCREEN} component={PlusScreen} />
      <Stack.Screen
        name={Routes.DO_YOU_LIKE_SCREEN}
        component={DoYouLikeScreen}
      />
    </Stack.Navigator>
  );
};
