import React from "react";
import { List } from "react-native-paper";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { ScreenContainer } from "~/components/ScreenContainer";
import { Routes } from "~/navigation/Routes";

interface Props {}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
