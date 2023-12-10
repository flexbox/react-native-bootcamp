import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "@ui-kitten/components";

import { ArtistAvatar } from "../components/ArtistAvatar";
import { Lyrics } from "../components/Lyrics";
import { ScreenContainer } from "../components/ScreenContainer";
import { theme } from "../theme/theme";

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
        <View
          style={{
            marginBottom: theme.spacing.m,
            marginTop: theme.spacing["3xl"],
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <ArtistAvatar artist={artist} />
          <Text
            category="h1"
            appearance="hint"
            style={{ marginLeft: theme.spacing.m }}
          >
            {artist}
          </Text>
        </View>

        <Lyrics params={route.params} />
      </ScrollView>
    </ScreenContainer>
  );
};
