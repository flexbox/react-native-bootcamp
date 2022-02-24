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

  const navigateToLyrics = () => {
    navigation.navigate(ROUTES.LYRICS_SCREEN, { artist, song });
  };

  const handlePressChoice = (choosenArtist: string, choosenSong: string) => {
    navigation.navigate(ROUTES.LYRICS_SCREEN, {
      artist: choosenArtist,
      song: choosenSong,
    });
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
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.l,
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
          onPress={navigateToLyrics}
          size="giant"
          style={{
            marginTop: theme.spacing.xl,
          }}
        >
          Go
        </Button>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          status="basic"
          onPress={() => handlePressChoice("Gringe", "Paradis noirs")}
        >
          Gringe
        </Button>
        <Button
          status="basic"
          onPress={() => handlePressChoice("Vald", "Anunnaki")}
        >
          Vald
        </Button>
        <Button
          status="basic"
          onPress={() => handlePressChoice("Stromae", "Papaoutai")}
        >
          Stromae
        </Button>
      </View>
    </ScreenContainer>
  );
};
