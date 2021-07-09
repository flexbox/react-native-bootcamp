import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";

import { MemeProps } from "../hooks/types";

interface Props {
  meme: MemeProps;
}

const MemeCard = ({ meme }: Props) => {
  return (
    <Card style={{ marginBottom: 128, marginHorizontal: 16 }}>
      <Image
        resizeMode="contain"
        style={{ width: 350, height: 350 }}
        source={{
          uri: meme.url,
        }}
      />
      <View style={{ padding: 16 }}>
        <Text category="h6">{meme.name}</Text>
      </View>
    </Card>
  );
};

export default MemeCard;
