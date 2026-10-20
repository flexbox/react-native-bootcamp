import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Chip, DataTable, Text } from "react-native-paper";
import { useLocalSearchParams, useRouter } from "expo-router";

type StarshipParams = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
};

export default function StarshipDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<StarshipParams>();
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    crew,
    hyperdrive_rating,
  } = params;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title={name} />
      </Appbar.Header>

      <ScrollView>
        <Image
          source={{ uri: `https://picsum.photos/seed/${name}/400/300` }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text
            variant="headlineMedium"
            style={styles.title}
          >
            {name}
          </Text>

          <View style={styles.chips}>
            <Chip
              icon="engine"
              style={styles.chip}
            >
              {model}
            </Chip>
            <Chip
              icon="factory"
              style={styles.chip}
            >
              {manufacturer}
            </Chip>
          </View>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Specification</DataTable.Title>
              <DataTable.Title numeric>Value</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Price</DataTable.Cell>
              <DataTable.Cell numeric>
                {cost_in_credits === "unknown"
                  ? "Not for sale"
                  : `${cost_in_credits} credits`}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Crew</DataTable.Cell>
              <DataTable.Cell numeric>{crew}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Hyperdrive Rating</DataTable.Cell>
              <DataTable.Cell numeric>{hyperdrive_rating}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          {cost_in_credits !== "unknown" && (
            <Button
              mode="contained"
              style={styles.buyButton}
              onPress={() => router.back()}
            >
              Buy for {cost_in_credits} credits
            </Button>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buyButton: {
    marginTop: 24,
  },
  chip: {
    marginBottom: 8,
    marginRight: 8,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  image: {
    height: 250,
    width: "100%",
  },
  title: {
    marginBottom: 16,
  },
});
