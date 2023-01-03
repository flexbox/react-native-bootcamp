import React from "react";
import { View, TextField, Text, Button } from "react-native-ui-lib";

interface Props {}

export const LoginScreen = (props: Props) => {
  return (
    <View flex paddingH-25 paddingT-120>
      <View bg-blue30 padding-32 marginB-48 center>
        <Text white text50>
          Hello liohau
        </Text>
        <Text white marginT-12>
          Sign in to your account
        </Text>
      </View>
      <TextField placeholder="username" />
      <TextField placeholder="password" secureTextEntry />
      <View marginT-100 center>
        <Button label="Sign In" size="large" />
        <Button
          label="Don't have an account? Create"
          size="large"
          link
          marginT-24
        />
      </View>
    </View>
  );
};
