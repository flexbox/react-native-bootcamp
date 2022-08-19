import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { ScreenContainer } from "../components/ScreenContainer";
import { Text } from "../components/Text";

export const LoginScreen = ({ navigation }) => {
  return (
    <ScreenContainer withGoBack>
      <SafeAreaView edges={["bottom", "top"]}>
        <View className="m-auto justify-between h-screen">
          <View className="mb-32">
            <Text variant="h1" style="mb-4">
              Sign in
            </Text>
            <Text variant="p1">
              To sign in to the app you'll need to scan a code displayed on your
              parents's phone.
            </Text>
            <Text variant="p1">Where to find Code?</Text>
          </View>
          <View className="mx-auto">
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={128}
              color="#8463fc"
            />
          </View>
          <View className="m-auto justify-bottom">
            <Button styles="mb-4">Start camera</Button>
            <Button variant="outline">Log in with mobile number</Button>
          </View>
        </View>
      </SafeAreaView>
    </ScreenContainer>
  );
};
