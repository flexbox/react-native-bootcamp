import React from "react";
import { View } from "react-native";

import { Button } from "../components/Button";
import { ScreenContainer } from "../components/ScreenContainer";
import { Text } from "../components/Text";

export const LoginScreen = ({ navigation }) => {
  return (
    <ScreenContainer withGoBack>
      <View className="p-4 mt-8">
        <Text variant="h1">SignIn</Text>
        <Text variant="p1">To Sign In </Text>
        <Text variant="p1">Where to find Code?</Text>
      </View>
    </ScreenContainer>
  );
};
