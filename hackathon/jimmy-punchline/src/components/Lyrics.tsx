import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useLyrics } from "../hooks/useLyrics";

type Props = {
  params: {
    artist: string;
    song: string;
  };
};

export const Lyrics = ({ params }: Props) => {
  const { artist, song } = params;

  const { isLoading, isError, data } = useLyrics(artist, song);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(data.lyrics)}</Text>
    </View>
  );
};
