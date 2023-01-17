import { storiesOf } from "@storybook/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen } from "~/screens/LoginScreen";

storiesOf("Screen", module).add("Login Screen", () => (
  <NavigationContainer>
    <LoginScreen />
  </NavigationContainer>
));
