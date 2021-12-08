import { FontAwesome5 } from "@expo/vector-icons";
import { PeopleProps } from "api/types";
import React from "react";
import { List, Colors } from "react-native-paper";

interface PeopleCardProps {
  people: PeopleProps;
}

const GengerIcon = ({ gender }: { gender: string }) => {
  switch (gender) {
    case "male":
      return <FontAwesome5 name="male" size={24} color={Colors.blue300} />;
    case "female":
      return <FontAwesome5 name="female" size={24} color={Colors.pink300} />;
    default:
      return <FontAwesome5 name="robot" size={24} color={Colors.grey500} />;
  }
};

export const PeopleCard = ({ people }: PeopleCardProps) => {
  const { gender } = people;

  return (
    <List.Item
      title={people.name}
      description={`${people.height} cm - ${people.mass} kg`}
      left={() => <GengerIcon gender={gender} />}
    />
  );
};
