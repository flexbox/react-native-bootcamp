import { View } from "react-native";
import React from "react";

import { ScreenContainer } from "../components/ScreenContainer";
import { Text } from "../components/Text";

type Props = {};

export const CameraScreen = (props: Props) => {
  return (
    <ScreenContainer withGoBack styles="bg-black">
      <View className="h-screen">
        <Text variant="h1" color="light">
          Scan code
        </Text>
        <Text variant="p2" color="light">
          Place the code displayed on your parent's phone in the frame
        </Text>
      </View>
    </ScreenContainer>
  );
};
