import { Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { Lyrics } from "../components/Lyrics";
import { ScreenContainer } from "../components/ScreenContainer";

type LyricsScreenProps = {
  route: {
    params: {
      artist: string;
      song: string;
    };
  };
};

export const LyricsScreen = ({ route }: LyricsScreenProps) => {
  const { artist, song } = route.params;

  return (
    <ScreenContainer>
      <ScrollView>
        <View style={{ marginBottom: 32 }}>
          <Text category="h3" appearance="hint">
            {artist}
          </Text>
          <Text category="h3">{song}</Text>
        </View>
        <Lyrics params={route.params} />
      </ScrollView>
    </ScreenContainer>
  );
};
