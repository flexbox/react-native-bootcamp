import type { PeopleProps } from "api/types";

import { Routes } from "@/navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

interface PeopleItemProps {
  people: PeopleProps;
}

const GengerIcon = ({ gender, ...rest }: { gender: string }) => {
  switch (gender) {
    case "female":
      return (
        <List.Icon
          {...rest}
          color="#EC4899"
          icon="human-female"
        />
      );
    case "male":
      return (
        <List.Icon
          {...rest}
          color="#3B82F6"
          icon="human-male"
        />
      );
    default:
      return (
        <List.Icon
          {...rest}
          color="#9CA3AF"
          icon="robot"
        />
      );
  }
};

export const PeopleItem = ({ people }: PeopleItemProps) => {
  const { gender, starships } = people;

  const navigation = useNavigation<any>();
  const navigateToDetails = () => {
    navigation.navigate(Routes.PILOT_DETAILS_SCREEN, { people });
  };

  return (
    <List.Item
      description={`${starships.length} starships`}
      left={(props) => (
        <GengerIcon
          {...props}
          gender={gender}
        />
      )}
      onPress={navigateToDetails}
      right={(props) => (
        <List.Icon
          {...props}
          icon="dots-horizontal"
        />
      )}
      title={people.name}
    />
  );
};
