import * as React from "react";
import type { TextInput, TextInputProps } from "react-native";
import { View, TextInput as NTextInput, Text } from "react-native";
import colors from "tailwindcss/colors";

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  // eslint-disable-next-line no-nested-ternary
  const borderColor = error
    ? "border-danger-600"
    : isFocussed
    ? "border-neutral-400"
    : "border-neutral-200";

  const bgColor = error ? "bg-danger-50" : "bg-neutral-200";

  return (
    <View className="mb-4">
      {label && (
        <Text className={error ? "text-danger-600" : "text-black"}>
          {label}
        </Text>
      )}
      <NTextInput
        testID="STextInput"
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={`mt-0 border-[3px] py-4 px-2  ${borderColor} rounded-md ${bgColor} text-[16px] text-left`}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
});
