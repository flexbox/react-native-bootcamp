import { View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useLyrics } from "../hooks/useLyrics";

import split from "lodash/split";

import { Button, Text, useTheme } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme/theme";

interface Props {
  params: {
    artist: string;
    song: string;
  };
}

export const Lyrics = ({ params }: Props) => {
  const { artist, song } = params;

  const { isLoading, isError, data } = useLyrics(artist, song);
  const navigation = useNavigation();
  const [obfuscated, setObfuscated] = useState<boolean>(true);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  if (data.lyrics === undefined) {
    return (
      <View>
        <Text category="h3">😢</Text>
        <Text category="p1">No lyrics found...</Text>
        <Button onPress={() => navigation.goBack()}>Try another one</Button>
      </View>
    );
  }

  const lyrics = data.lyrics;

  const allLyricsTmp = split(lyrics, "\n\n");
  const allLyrics = split(allLyricsTmp, "\n");

  const handleDisplaySolution = () => {
    setObfuscated(!obfuscated);
  };

  const lyricsToDisover = [
    allLyrics[0],
    allLyrics[1],
    allLyrics[2],
    allLyrics[3],
  ];

  // debugger;

  const lyricsAnswer = [allLyrics[4], allLyrics[5]];

  const color = useTheme();

  return (
    <View>
      {lyricsToDisover.map((item, index) => {
        return (
          <Text
            key={`lyric-${index}`}
            category="p1"
            style={{ marginBottom: theme.spacing.m }}
          >
            {item}
          </Text>
        );
      })}

      {lyricsAnswer.map((item, index) => {
        return (
          <Text
            key={`lyric-${index}`}
            category="p1"
            style={{
              marginBottom: theme.spacing.m,
              backgroundColor: obfuscated
                ? color["background-alternative-color-1"]
                : "transparent",
            }}
          >
            {item}
          </Text>
        );
      })}

      <Button status="basic" onPress={handleDisplaySolution}>
        {obfuscated ? "Show " : "Hide "}
        the lyrics
      </Button>

      <Button status="control" onPress={navigation.goBack}>
        Another one
      </Button>
    </View>
  );
};
