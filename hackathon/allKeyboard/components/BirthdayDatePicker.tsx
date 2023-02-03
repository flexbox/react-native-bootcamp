import React, { useState } from "react";
import { CardInput } from "./CardInput";
import { Button, Text, TextInput } from "react-native-paper";
import { format } from "date-fns";
import { View } from "react-native";

interface Props {
  inputFormat?: "DMY" | "MDY" | "YMD";
  inputPlacehoderFormat?:
    | "DD / MM / YYYY"
    | "MM / DD / YYYY"
    | "YYYY / MM / DD";
}

// this function split the string in 3 parts day, month, year
// and return an object with the 3 parts
const splitDate = (date: string, inputFormat) => {
  if (inputFormat === "DMY") {
    const day = date.slice(0, 2);
    const month = date.slice(2, 4);
    const year = date.slice(4, 8);
    return { day, month, year };
  }

  if (inputFormat === "MDY") {
    const month = date.slice(0, 2);
    const day = date.slice(2, 4);
    const year = date.slice(4, 8);
    return { day, month, year };
  }

  if (inputFormat === "YMD") {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return { day, month, year };
  }
};

export const BirthdayDatePicker = ({
  inputFormat = "DMY",
  inputPlacehoderFormat = "DD / MM / YYYY",
}: Props) => {
  const [birthdatValue, setBirthdatValue] = useState("");

  const { day, month, year } = splitDate(birthdatValue, inputFormat);
  const preview = format(
    new Date(Number(year), Number(month) - 1, Number(day)),
    "d MMMM y"
  );

  return (
    <CardInput
      title="Date of birth Date Picker"
      description="We use it to verify your identity."
    >
      <Text style={{ marginBottom: 12 }}>Date of birth</Text>
      <TextInput
        autoComplete="birthdate-full"
        placeholder={inputPlacehoderFormat}
        keyboardType="number-pad"
        value={birthdatValue}
        onChangeText={setBirthdatValue}
        returnKeyType="done"
      />
      <View style={{ padding: 16, alignItems: "center" }}>
        <Text variant="bodyLarge">
          {birthdatValue.length < 8 ? " " : preview}
        </Text>
      </View>
      <Button mode="contained-tonal">Next step</Button>
    </CardInput>
  );
};
