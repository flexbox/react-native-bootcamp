import React from "react";
import { Alert } from "react-native";

import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

interface Props {}

export const LoginScreen = (props: Props) => {
  return (
    <Box flex={1}>
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="cardPrimaryBackground"
        minHeight={250}
      >
        <Text variant="h2" color="textOnDark">
          LoginScreen
        </Text>
        <Text variant="p1" color="textOnDark">
          LoginScreen
        </Text>
      </Box>
      <Box p="m">
        <Button label="Sign In" onPress={() => Alert.alert("Pressed")} />
        <Button
          mt="xl"
          borderRadius="m"
          backgroundColor="cardPrimaryBackground"
          padding="m"
          label="Don't have an account? Create"
          onPress={() => Alert.alert("Pressed")}
        />
      </Box>
    </Box>
  );
};
