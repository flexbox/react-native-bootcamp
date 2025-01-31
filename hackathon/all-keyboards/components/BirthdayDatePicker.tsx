import React, { useState } from "react";
import { CardInput } from "./CardInput";
import { Button, Text, TextInput } from "react-native-paper";
import { format } from "date-fns";
import { View } from "react-native";

type dateFormat = "DD-MM-YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD";

interface Props {
  inputFormat?: dateFormat;
}

interface formatedDate {
  day: string;
  month: string;
  year: string;
}

// this function split the string in 3 parts day, month, year
// and return an object with the 3 parts
const splitDate = (date: string, inputFormat: dateFormat): formatedDate => {
  if (inputFormat === "MM-DD-YYYY") {
    const month = date.slice(0, 2);
    const day = date.slice(2, 4);
    const year = date.slice(4, 8);
    return { day, month, year };
  }

  if (inputFormat === "YYYY-MM-DD") {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return { day, month, year };
  }

  const day = date.slice(0, 2);
  const month = date.slice(2, 4);
  const year = date.slice(4, 8);
  return { day, month, year };
};

export const BirthdayDatePicker = ({
  inputFormat = "DD-MM-YYYY",
}: Props) => {
  const [birthdatValue, setBirthdatValue] = useState("");

  const { day, month, year } = splitDate(birthdatValue, inputFormat);
  const preview = format(
    new Date(Number(year), Number(month) - 1, Number(day)),
    "d MMMM y"
  );

  const inputPlacehoderFormated = inputFormat.split("-").join(" / ");

  return (
    <CardInput
      title="Birthday Picker"
      description="We use it to verify your identity."
    >
      <TextInput
        autoComplete="birthdate-full"
        placeholder={inputPlacehoderFormated}
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
