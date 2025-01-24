import type { PeopleProps } from "api/types";

import { ScreenContainer } from "@/components/ScreenContainer";
import { StarshipLoadableList } from "@/components/StarshipLoadableList";
import { StyleSheet, View } from "react-native";
import { DataTable, Text } from "react-native-paper";

interface PilotDetailsScreenProps {
  route: {
    params: {
      people: PeopleProps;
    };
  };
}

export const PilotDetailsScreen = ({ route }: PilotDetailsScreenProps) => {
  const {
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    name,
    skin_color,
    starships,
  } = route.params.people;

  return (
    <ScreenContainer
      title={name}
      withGoBack
    >
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>Mass</DataTable.Cell>
          <DataTable.Cell numeric>{mass} kg</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Height</DataTable.Cell>
          <DataTable.Cell numeric>{height} cm</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Hairs color</DataTable.Cell>
          <DataTable.Cell numeric>{hair_color}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Eyes color</DataTable.Cell>
          <DataTable.Cell numeric>{eye_color}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Skin color</DataTable.Cell>
          <DataTable.Cell numeric>{skin_color}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Birth year</DataTable.Cell>
          <DataTable.Cell numeric>{birth_year}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      {starships.length > 0 && (
        <View style={styles.body}>
          <Text variant="headlineMedium">Able to pilot</Text>
          <StarshipLoadableList starships={starships} />
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
