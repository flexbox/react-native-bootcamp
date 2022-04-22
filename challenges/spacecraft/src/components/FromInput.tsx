import React from "react";
import { Platform, View } from "react-native";
import { TextInput } from "react-native-paper";

interface FormInputProp {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
}

export const FormInput = ({
  label,
  value,
  onChangeText,
  ...rest
}: FormInputProp) => (
  <View style={{ paddingVertical: 8 }}>
    <TextInput
      {...rest}
      label={label}
      value={value}
      onChangeText={onChangeText}
      autoComplete={Platform.OS === "web" ? "none" : "off"}
    />
  </View>
);
