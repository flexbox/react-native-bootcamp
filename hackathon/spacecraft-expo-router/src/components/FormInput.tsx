import { View } from "react-native";
import type { TextInputProps } from "react-native-paper";
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
      label={label}
      mode="outlined"
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);
