import { Button, Input, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { ROUTES } from "../navigation/Routes";
import { theme } from "../theme/theme";

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [artist, setArtist] = useState("Orelsan");
  const [song, setSong] = useState("Jimmy Punchline");

  const handlePress = () => {
    navigation.navigate(ROUTES.LYRICS_SCREEN, { artist, song });
  };

  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text category="h1">DON’T FORGET THE LYRICS</Text>
      </View>
      <View
        style={{
          marginVertical: 64,
        }}
      >
        <Input
          label="Artist"
          value={artist}
          onChangeText={setArtist}
          size="large"
        />
        <Input
          label="Song"
          value={song}
          onChangeText={setSong}
          size="large"
          style={{
            marginTop: theme.spacing.m,
          }}
        />
        <Button
          onPress={handlePress}
          size="giant"
          style={{
            marginTop: theme.spacing.xl,
          }}
        >
          Go
        </Button>
      </View>
    </ScreenContainer>
  );
};
