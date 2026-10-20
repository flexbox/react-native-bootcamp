import React from "react";
import { Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default {
  title: "Card",
};

export const Default = () => (
  <View style={{ padding: 16, gap: 16 }}>
    <Card>
      <Image
        source={{ uri: "https://picsum.photos/seed/spacecraft/400/200" }}
        style={{ borderRadius: 12, height: 200, width: "100%" }}
      />
      <Card.Title
        title="Millennium Falcon"
        subtitle="Corellian Engineering"
      />
      <Card.Content>
        <Text variant="titleLarge">100,000 credits</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained-tonal"
          onPress={() => {}}
        >
          Buy this ship
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

Default.story = {
  name: "Default",
};
