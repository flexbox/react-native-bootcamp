import type { PeopleProps } from "api/types";

import { StyleSheet, View } from "react-native";
import { DataTable, Text, useTheme } from "react-native-paper";

import { DataTableKeyValueRow } from "@/components/DataTableKeyValueRow";
import { ScreenContainer } from "@/components/ScreenContainer";
import { StarshipLoadableList } from "@/components/StarshipLoadableList";
import { TITLE_MAX_FONT_SIZE } from "@/theme/typography";

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
  const theme = useTheme();

  return (
    <ScreenContainer
      title={name}
      withGoBack
      withScrollView
    >
      <DataTable>
        <DataTableKeyValueRow
          label="Mass"
          value={`${mass} kg`}
        />
        <DataTableKeyValueRow
          label="Height"
          value={`${height} cm`}
        />
        <DataTableKeyValueRow
          label="Hair color"
          value={hair_color}
        />
        <DataTableKeyValueRow
          label="Eye color"
          value={eye_color}
        />
        <DataTableKeyValueRow
          label="Skin color"
          value={skin_color}
        />
        <DataTableKeyValueRow
          label="Birth year"
          value={birth_year}
        />
      </DataTable>
      {starships.length > 0 && (
        <View style={styles.body}>
          <Text
            accessibilityRole="header"
            maxFontSizeMultiplier={
              TITLE_MAX_FONT_SIZE / theme.fonts.headlineMedium.fontSize
            }
            variant="headlineMedium"
          >
            Able to pilot
          </Text>
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
