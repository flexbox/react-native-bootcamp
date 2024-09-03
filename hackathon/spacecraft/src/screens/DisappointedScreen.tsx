/* eslint-disable max-len */
import React from "react";
import { Button, Text } from "react-native-paper";
import { Image, ScrollView, View } from "react-native";

import { ButtonSupport } from "~/components/ButtonSupport";
import { ScreenContainer } from "~/components/ScreenContainer";

interface Props {
  navigation: any;
}

export const DisappointedScreen = ({ navigation }: Props) => {
  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      title=""
      withGoBack
      accessoryFooter={
        <View style={{ marginBottom: 12, padding: 24 }}>
          <ButtonSupport />
          <Button
            onPress={handleCancel}
            mode="text"
          >
            Not now
          </Button>
        </View>
      }
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM2ZjZiZWIxODg0ODJiNmU0MjQwYWI2OTU3NGQ5OGEyNzZkYzdmYSZjdD1n/2mMOygvfZpM15SzLBD/giphy.gif",
          }}
          style={{ height: 160, width: "100%" }}
        />
        <View style={{ padding: 16 }}>
          <Text
            variant="headlineLarge"
            style={{ marginVertical: 24 }}
          >
            We are so sorry…
          </Text>
          <Text variant="bodyLarge">
            …that we disappointed you! Help us know how we can improve our
            service by answering this survey.
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
