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
        component={PlusScreen}
        name={Routes.PLUS_SCREEN}
      />
      <Stack.Screen
        component={DoYouLikeScreen}
        name={Routes.DO_YOU_LIKE_SCREEN}
      />
      <Stack.Screen
        component={LoveScreen}
        name={Routes.LOVE_SCREEN}
      />
      <Stack.Screen
        component={DisappointedScreen}
        name={Routes.DISAPPOINTED_SCREEN}
      />
    </Stack.Navigator>
  );
};
