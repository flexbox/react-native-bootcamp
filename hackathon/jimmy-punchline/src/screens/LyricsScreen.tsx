import { Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Lyrics } from "../components/Lyrics";
import { ScreenContainer } from "../components/ScreenContainer";

type LyricsScreenProps = {
  navigation: any;
  route: {
    params: {
      artist: string;
      song: string;
    };
  };
};

export const LyricsScreen = ({ navigation, route }: LyricsScreenProps) => {
  const { artist, song } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: song });
  }, []);

  return (
    <ScreenContainer>
      <ScrollView>
        <View style={{ marginBottom: 32, marginTop: 96 }}>
          <Text category="h1" appearance="hint">
            {artist}
          </Text>
        </View>
        <Lyrics params={route.params} />
      </ScrollView>
    </ScreenContainer>
  );
};
