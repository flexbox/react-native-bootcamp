import { StyleSheet, useWindowDimensions, View } from "react-native";
import { DataTable, Text } from "react-native-paper";

interface DataTableKeyValueRowProps {
  label: string;
  value?: string;
}

// iOS accessibility text sizes start around 1.8× the default size. From
// there, two columns are too narrow for words like "Consumables", so the
// value moves under its label instead of breaking mid-word.
const STACKED_FONT_SCALE = 1.75;

// DataTable.Cell keeps plain strings on one line, which truncates labels and
// clips values when Dynamic Type makes the text taller than the row.
// Passing <Text> elements lets each cell wrap, and the row grows with it.
export const DataTableKeyValueRow = ({
  label,
  value,
}: DataTableKeyValueRowProps) => {
  const { fontScale } = useWindowDimensions();

  if (fontScale >= STACKED_FONT_SCALE) {
    return (
      <DataTable.Row style={styles.row}>
        <DataTable.Cell>
          <View style={styles.stacked}>
            <Text variant="bodyMedium">{label}</Text>
            <Text
              style={styles.numbers}
              variant="bodyMedium"
            >
              {value}
            </Text>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
    );
  }

  return (
    <DataTable.Row style={styles.row}>
      <DataTable.Cell>
        <Text
          style={styles.label}
          variant="bodyMedium"
        >
          {label}
        </Text>
      </DataTable.Cell>
      <DataTable.Cell numeric>
        <Text
          style={[styles.numbers, styles.value]}
          variant="bodyMedium"
        >
          {value}
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  label: {
    flexShrink: 1,
  },
  numbers: {
    fontVariant: ["tabular-nums"],
  },
  row: {
    paddingVertical: 12,
  },
  stacked: {
    flex: 1,
  },
  value: {
    flexShrink: 1,
    textAlign: "right",
  },
});
