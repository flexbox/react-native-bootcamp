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
        component={LoginScreen}
        name={Routes.LOGIN_SCREEN}
      />
      <Stack.Screen
        component={TermsScreen}
        name={Routes.TERMS_SCREEN}
      />
    </Stack.Navigator>
  );
};
