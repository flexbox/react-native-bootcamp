import * as StoreReview from "expo-store-review";
import { View, Text, Linking, Alert } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import Constants from "expo-constants";

import { ScreenContainer } from "~/components/ScreenContainer";
import { Routes } from "~/navigation/Routes";

interface Props {
  navigation: any;
}

export const DoYouLikeScreen = ({ navigation }: Props) => {
  const appStoreUrl = Constants.expoConfig?.ios?.appStoreUrl;
  const itunesItemId = appStoreUrl?.split("/").pop();

  const handleStoreReview = async () => {
    if (await StoreReview.hasAction()) {
      // you can call StoreReview.requestReview()
      StoreReview.requestReview();
      // Linking.openURL(
      //   `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
      // );
    } else {
      Alert.alert("You can't review this app");
    }
  };

  const navigateToDisappointedScreen = () => {
    navigation.navigate(Routes.DISAPPOINTED_SCREEN);
  };

  return (
    <ScreenContainer title={""} withGoBack={true}>
      <List.Item
        title="I love Spacecraft"
        onPress={handleStoreReview}
        left={(props) => <List.Icon {...props} icon="heart" />}
      />
      <List.Item
        title="I am disappointed"
        onPress={navigateToDisappointedScreen}
        left={(props) => <List.Icon {...props} icon="emoticon-sad-outline" />}
      />
    </ScreenContainer>
  );
};
