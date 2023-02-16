/* eslint-disable max-len */
import { View, Image, ScrollView } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

import { ScreenContainer } from "~/components/ScreenContainer";

interface Props {
  navigation: any;
}

export const DisappointedScreen = ({ navigation }: Props) => {
  const handleOpenGitHub = async () => {
    await WebBrowser.openBrowserAsync(
      "https://github.com/flexbox/react-native-bootcamp/issues"
    );
  };
  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      title=""
      withGoBack
      accessoryFooter={
        <View style={{ padding: 24, marginBottom: 12 }}>
          <Button
            onPress={handleOpenGitHub}
            mode="contained"
            style={{ marginBottom: 12 }}
          >
            Give my opinion
          </Button>
          <Button onPress={handleCancel} mode="text">
            Not now
          </Button>
        </View>
      }
    >
      <ScrollView contentContainerStyle={{ padding: 32, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM2ZjZiZWIxODg0ODJiNmU0MjQwYWI2OTU3NGQ5OGEyNzZkYzdmYSZjdD1n/2mMOygvfZpM15SzLBD/giphy.gif",
          }}
          style={{ width: "100%", height: 160 }}
        />
        <Text variant="headlineLarge" style={{ marginVertical: 24 }}>
          We are so sorry…
        </Text>
        <Text variant="bodyLarge">
          …that we disappointed you! Help us know how we can improve our service
          by answering this survey.
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};
