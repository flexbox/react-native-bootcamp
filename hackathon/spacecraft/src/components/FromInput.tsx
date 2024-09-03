import type { TextInputProps } from "react-native-paper";

import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

export const FormInput = ({
  label,
  onChangeText,
  value,
  ...rest
}: TextInputProps) => (
  <View style={{ paddingVertical: 8 }}>
    <TextInput
      {...rest}
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);
