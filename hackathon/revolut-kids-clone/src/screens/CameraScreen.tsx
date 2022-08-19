import { Camera } from "expo-camera";
import { View, StyleSheet } from "react-native";
import React from "react";

import { ScreenContainer } from "../components/ScreenContainer";
import { Text } from "../components/Text";
import { Button } from "../components/Button";

type Props = {};

export const CameraScreen = (props: Props) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    requestPermission();
  }
  if (!permission?.granted) {
    return (
      <ScreenContainer withGoBack>
        <Text>No access to camera</Text>
        <Button onPress={requestPermission}>Request permission</Button>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer withGoBack styles="bg-black">
      <View className="h-screen">
        <Camera style={styles.camera}>
          <Text variant="h1" color="light">
            Scan code
          </Text>
          <Text variant="p2" color="light">
            Place the code displayed on your parent's phone in the frame
          </Text>
        </Camera>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  camera: {
    ...StyleSheet.absoluteFill,
  },
});
