import { PeopleProps } from "api/types";
import React from "react";
import { View, StyleSheet } from "react-native";
import { DataTable, Headline, Subheading } from "react-native-paper";

import AppLayout from "~/components/AppLayout";

interface PilotDetailsScreenProps {
  route: {
    params: {
      people: PeopleProps;
    };
  };
}

export const PilotDetailsScreen = ({ route }: PilotDetailsScreenProps) => {
  const {
    name,
    mass,
    height,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    starships,
  } = route.params.people;

  return (
    <AppLayout title={name}>
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
          <Headline>Starships</Headline>
          <Subheading>{JSON.stringify(starships)}</Subheading>
        </View>
      )}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
