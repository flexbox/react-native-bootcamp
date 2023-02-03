import React, { useState } from "react";
import { CardInput } from "./CardInput";
import { Button, Text, TextInput } from "react-native-paper";
import { format } from "date-fns";
import { View } from "react-native";

interface Props {
  inputFormat?: "DMY" | "MDY" | "YMD";
  inputPlacehoderFormat?: "DD MM YYYY" | "MM DD YYYY" | "YYYY MM DD";
}

// this function split the string in 3 parts day, month, year
// and return an object with the 3 parts
const splitDate = (date: string) => {
  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 8);
  return { day, month, year };
};

export const BirthdayDatePicker = (props: Props) => {
  const [birthdatValue, setBirthdatValue] = useState("11081976");

  const { day, month, year } = splitDate(birthdatValue);
  const preview = format(
    new Date(Number(year), Number(month) - 1, Number(day)),
    "d MMMM y"
  );

  return (
    <CardInput title="Birthday Date Picker">
      <Text>DMY - DD / MM / YYYY</Text>
      <TextInput
        placeholder="DD MM YYYY"
        keyboardType="number-pad"
        value={birthdatValue}
        onChangeText={setBirthdatValue}
      />
      <View style={{ padding: 16, alignItems: "center" }}>
        <Text variant="bodyLarge">{preview}</Text>
      </View>
      <Button mode="contained-tonal">Next step</Button>
    </CardInput>
  );
};
