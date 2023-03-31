import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen } from "~/screens/LoginScreen";

export default {
  title: "Screen",
};

export const _LoginScreen = () => (
  <NavigationContainer>
    <LoginScreen />
  </NavigationContainer>
);
