import { Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView } from "react-native";
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
        <Text category="h3" appearance="hint">
          {artist}
        </Text>
        <Text category="h3">{song}</Text>
        <Lyrics params={route.params} />
      </ScrollView>
    </ScreenContainer>
  );
};
