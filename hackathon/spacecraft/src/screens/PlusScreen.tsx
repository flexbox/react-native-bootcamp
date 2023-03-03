import React from "react";
import { List } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { Routes } from "~/navigation/Routes";

interface Props {}

export const PlusScreen = ({ navigation }: Props) => {
  const navigateToDoYouLikeScreen = () => {
    navigation.navigate(Routes.DO_YOU_LIKE_SCREEN);
  };

  return (
    <ScreenContainer title={"Plus"}>
      <List.Item
        title="Do you like Spacecraft?"
        onPress={navigateToDoYouLikeScreen}
        left={(props) => <List.Icon {...props} icon="star" />}
      />
    </ScreenContainer>
  );
};
