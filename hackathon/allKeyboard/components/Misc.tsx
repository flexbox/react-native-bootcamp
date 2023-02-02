import { View } from "react-native";
import React from "react";
import { CardInput } from "./CardInput";
import { TextInput, Text } from "react-native-paper";

export const Misc = () => {
  const [inputValue, setInputValue] = React.useState(null);

  return (
    <View>
      <CardInput title="keyboardType `email-address`">
        <Text variant="bodyMedium" style={{ marginBottom: 12 }}>
          With `autoCapitalize` none, `autoComplete` email and `autoCorrect`
          false
        </Text>
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="email-address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
        />
      </CardInput>
    </View>
  );
};
