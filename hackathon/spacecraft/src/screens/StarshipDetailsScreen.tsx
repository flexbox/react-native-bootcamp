import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Chip, DataTable, FAB, List, Text } from "react-native-paper";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import type { StarshipProps } from "../../api/types";

import { Image } from "~/components/Image";
import { withAnimated } from "~/utils/withAnimated";

const AnimatedFAB = withAnimated(FAB);

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
    model,
    // @ts-ignore
    image,
  } = route.params;

  // const source = useImage(name);
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };

  const handleBuy = () => {
    // Alert.alert("Give me the money!");
  };

  const scale = useSharedValue(1);

  return (
    <View>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: "100%", height: 350 }}
              source={image}
              sharedTransitionTag={`image-${model}`}
            />
            <View style={[styles.closeContainer, styles.left]}>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}
              >
                <FontAwesome5
                  name="times"
                  size={22}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.closeContainer, styles.right]}>
              <Chip mode="outlined">{starship_class}</Chip>
            </View>
          </View>

          <View style={styles.body}>
            <Text variant="headlineMedium">{name}</Text>
            <Text variant="titleMedium">{manufacturer}</Text>
          </View>

          <List.Item
            title={hyperdrive_rating}
            description="Hyperdrive rating"
            left={(props) => (
              <List.Icon
                {...props}
                icon="hubspot"
              />
            )}
          />
          <List.Item
            title={max_atmosphering_speed}
            description="Max atmospheric speed"
            left={(props) => (
              <List.Icon
                {...props}
                icon="speedometer"
              />
            )}
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

      <Pressable
        onPressIn={() => {
          scale.value = withSpring(0.9);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
        onPress={handleBuy}
      >
        <AnimatedFAB
          style={[
            styles.fab,
            {
              transform: [
                {
                  scale,
                },
              ],
            },
          ]}
          label="Buy this ship"
          icon="cart"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  closeContainer: {
    position: "absolute",
    top: 32,
  },
  fab: {
    bottom: 42,
    position: "absolute",
    right: 42,
  },
  imageContainer: {
    backgroundColor: "black",
    paddingTop: 32,
  },
  left: {
    left: 24,
  },
  right: {
    right: 24,
  },
  scrollContainer: {
    paddingBottom: 256,
  },
});
