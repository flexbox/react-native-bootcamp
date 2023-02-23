import React from "react";
import { View } from "react-native";
import type { TextInputProps } from "react-native-paper";
import { TextInput } from "react-native-paper";

export const FormInput = ({
  label,
  value,
  onChangeText,
  ...rest
}: TextInputProps) => (
  <View style={{ paddingVertical: 8 }}>
    <TextInput
      {...rest}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);
