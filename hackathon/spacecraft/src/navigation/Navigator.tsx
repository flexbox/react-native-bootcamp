import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuthentication } from "~/context/Authentication";
import { useAppearanceTheme } from "~/hooks/useAppearanceTheme";

import { AuthNavigator } from "./AuthNavigator";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const { user } = useAuthentication();
  const appearanceTheme = useAppearanceTheme();

  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={appearanceTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            component={BottomTabNavigator}
            name={"BOTTOM_TABS"}
          />
        ) : (
          <Stack.Screen
            component={AuthNavigator}
            name={"AUTH_STACK"}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
