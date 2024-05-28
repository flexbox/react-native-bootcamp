import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { DisappointedScreen } from "~/screens/DisappointedScreen";
import { DoYouLikeScreen } from "~/screens/DoYouLikeScreen";
import { LoveScreen } from "~/screens/LoveScreen";
import { PlusScreen } from "~/screens/PlusScreen";

const Stack = createNativeStackNavigator();

export const PlusNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.PLUS_SCREEN}
        component={PlusScreen}
      />
      <Stack.Screen
        name={Routes.DO_YOU_LIKE_SCREEN}
        component={DoYouLikeScreen}
      />
      <Stack.Screen
        name={Routes.LOVE_SCREEN}
        component={LoveScreen}
      />
      <Stack.Screen
        name={Routes.DISAPPOINTED_SCREEN}
        component={DisappointedScreen}
      />
    </Stack.Navigator>
  );
};
