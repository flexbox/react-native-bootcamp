import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import { LoginScreen } from "~/screens/LoginScreen";
import { TermsScreen } from "~/screens/TermsScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={Routes.TERMS_SCREEN}
        component={TermsScreen}
      />
    </Stack.Navigator>
  );
};
