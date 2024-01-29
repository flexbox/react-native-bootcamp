import * as StoreReview from "expo-store-review";
import { View, ScrollView, Image, Platform, Alert } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { ButtonSupport } from "~/components/ButtonSupport";

export const LoveScreen = () => {
  const handleStoreReview = async () => {
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview();
    } else {
      Alert.alert("You can't review this app");
    }
  };

  const storeName = Platform.OS === "ios" ? "App Store" : "Play Store";

  return (
    <ScreenContainer
      title={""}
      withGoBack={true}
      accessoryFooter={
        <View style={{ padding: 24, marginBottom: 12 }}>
          <Button
            onPress={handleStoreReview}
            mode="contained"
            style={{ marginBottom: 12 }}
          >
            Give 5 stars to Spacecraft
          </Button>
          <ButtonSupport mode="text" />
        </View>
      }
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif",
          }}
          style={{ width: "100%", height: 160 }}
        />
        <View style={{ padding: 16 }}>
          <Text variant="headlineLarge" style={{ marginVertical: 24 }}>
            Would you like to spread the world by rating Spacecraft?
          </Text>
          <Text variant="bodyLarge" style={{ marginBottom: 12 }}>
            Amazing! We are so proud to have you as a user.
          </Text>
          <Text variant="bodyLarge">
            You have been using Spacecraft for a while now: share your
            experience by rating us on the {storeName}!
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
