import { View } from "react-native";
import React, { useState } from "react";
import { CardInput } from "./CardInput";
import { TextInput, Text } from "react-native-paper";
import { BirthdayDatePicker } from "./BirthdayDatePicker";

export const Misc = () => {
  const [inputValue, setInputValue] = useState("");

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
      <BirthdayDatePicker />
      <BirthdayDatePicker inputFormat="MM-DD-YYYY" />
      <BirthdayDatePicker inputFormat="YYYY-MM-DD" />
    </View>
  );
};
