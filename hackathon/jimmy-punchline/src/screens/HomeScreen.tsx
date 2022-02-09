import { Button, Input, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";

export const HomeScreen = () => {
  const [artist, setArtist] = useState("Orelsan");
  const [song, setSong] = useState("Jimmy Punchline");

  const handlePress = () => {
    console.log(`${artist} - ${song}`);
  };

  return (
    <Layout
      style={{
        flex: 1,
        padding: 32,
      }}
    >
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
        <Input label="Artist" value={artist} />
        <Input
          label="Song"
          value={song}
          style={{
            marginTop: 8,
          }}
        />
        <Button
          onPress={handlePress}
          style={{
            marginTop: 32,
          }}
        >
          Go
        </Button>
      </View>
    </Layout>
  );
};
