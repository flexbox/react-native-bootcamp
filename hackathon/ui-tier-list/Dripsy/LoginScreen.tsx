import { View, Text, H2, P } from "dripsy";
import React from "react";

interface Props {}

export const LoginScreen = (props: Props) => {
  return (
    <View sx={{ flex: 1 }}>
      <View
        sx={{
          backgroundColor: "$primary",
          padding: ["$5", "$8"],
        }}
      >
        <H2>LoginScreen</H2>
        <P>LoginScreen</P>
      </View>
      <View
        sx={{
          padding: ["$1", "$3"],
        }}
      >
        {/* <Button label="Sign In" onPress={() => Alert.alert("Pressed")} />
        <Button
          mt="xl"
          borderRadius="m"
          backgroundColor="cardPrimaryBackground"
          padding="m"
          label="Don't have an account? Create"
          onPress={() => Alert.alert("Pressed")}
        /> */}
      </View>
    </View>
  );
};
