import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  Colors,
  Headline,
  Subheading,
  Chip,
  DataTable,
  List,
  FAB,
} from "react-native-paper";

import type { StarshipProps } from "../../api/types";
import { useImage } from "../hooks/useImage";

interface StarshipDetailsScreenProps {
  route: {
    params: StarshipProps;
  };
}

export const StarshipDetailsScreen = ({
  route,
}: StarshipDetailsScreenProps) => {
  const {
    name,
    manufacturer,
    starship_class,
    crew,
    passengers,
    consumables,
    cargo_capacity,
    hyperdrive_rating,
    max_atmosphering_speed,
  } = route.params;

  const source = useImage(name);
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };

  const handleBuy = () => {
    Alert.alert("Give me the money!");
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image style={{ width: "100%", height: 350 }} source={source} />
            <View style={[styles.closeContainer, styles.left]}>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}
              >
                <FontAwesome5 name="times" size={22} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <View style={[styles.closeContainer, styles.right]}>
              <Chip mode="outlined">{starship_class}</Chip>
            </View>
          </View>

          <View style={styles.body}>
            <Headline>{name}</Headline>
            <Subheading>{manufacturer}</Subheading>
          </View>

          <List.Item
            title={hyperdrive_rating}
            description="Hyperdrive rating"
            left={(props) => <List.Icon {...props} icon="hubspot" />}
          />
          <List.Item
            title={max_atmosphering_speed}
            description="Max atmospheric speed"
            left={(props) => <List.Icon {...props} icon="speedometer" />}
          />

          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Crew</DataTable.Cell>
              <DataTable.Cell numeric>{crew}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Passengers</DataTable.Cell>
              <DataTable.Cell numeric>{passengers}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Consumables</DataTable.Cell>
              <DataTable.Cell numeric>{consumables}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Cargo capacity</DataTable.Cell>
              <DataTable.Cell numeric>{cargo_capacity}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>

      <FAB
        style={styles.fab}
        label="Buy this ship"
        icon="cart"
        onPress={handleBuy}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 256,
  },
  imageContainer: {
    paddingTop: 32,
    backgroundColor: Colors.black,
  },
  closeContainer: {
    position: "absolute",
    top: 64,
  },
  left: {
    left: 24,
  },
  right: {
    right: 24,
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  body: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 24,
  },
});
