import { View, Text, Linking } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import Constants from "expo-constants";

import { ScreenContainer } from "~/components/ScreenContainer";

interface Props {}

export const DoYouLikeScreen = (props: Props) => {
  const appStoreUrl = Constants.expoConfig?.ios?.appStoreUrl;
  const itunesItemId = appStoreUrl?.split("/").pop();

  const handleStoreReview = () => {
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
    );
  };

  return (
    <ScreenContainer title={""} withGoBack={true}>
      <List.Item
        title="I love Spacecraft"
        left={(props) => <List.Icon {...props} icon="heart" />}
      />
      <List.Item
        title="I am disappointed"
        left={(props) => <List.Icon {...props} icon="emoticon-sad-outline" />}
      />
    </ScreenContainer>
  );
};
