import { ScreenContainer } from "@/components/ScreenContainer";
import { useAuthentication } from "@/context/Authentication";
import { Routes } from "@/navigation/Routes";
import * as Application from "expo-application";
import { View } from "react-native";
import { List, Text } from "react-native-paper";

export const PlusScreen = ({ navigation }: any) => {
  const navigateToDoYouLikeScreen = () => {
    navigation.navigate(Routes.DO_YOU_LIKE_SCREEN);
  };

  const { setUser } = useAuthentication();
  const handleLogout = () => {
    setUser(false);
  };

  return (
    <ScreenContainer title={"Plus"}>
      <View style={{ flex: 1 }}>
        <List.Item
          left={(props) => (
            <List.Icon
              {...props}
              icon="star"
            />
          )}
          onPress={navigateToDoYouLikeScreen}
          title="Do you like Spacecraft?"
        />
        <List.Item
          left={(props) => (
            <List.Icon
              {...props}
              icon="logout"
            />
          )}
          onPress={handleLogout}
          title="Logout"
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <Text variant="bodySmall">Built in France by David Leuliette</Text>
        <Text variant="bodySmall">
          {Application.applicationName} {Application.nativeBuildVersion}
        </Text>
      </View>
    </ScreenContainer>
  );
};
