import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import * as Sharing from "expo-sharing";

import { MemeProps } from "../hooks/types";

interface Props {
  meme: MemeProps;
}

const MemeCard = ({ meme }: Props) => {
  const { url, name } = meme;

  const handlePress = async () => {
    const options: Sharing.SharingOptions = {
      dialogTitle: name,
    };

    Sharing.isAvailableAsync();
    await Sharing.shareAsync(url, options);
  };

  return (
    <Card
      style={{ marginBottom: 128, marginHorizontal: 16 }}
      onPress={handlePress}
    >
      <Image
        resizeMode="contain"
        style={{ width: 350, height: 350 }}
        source={{
          uri: url,
        }}
      />
      <View style={{ padding: 16 }}>
        <Text category="h6">{name}</Text>
      </View>
    </Card>
  );
};

export default MemeCard;
