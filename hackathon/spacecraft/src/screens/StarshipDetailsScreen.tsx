import { Image } from "@/components/Image";
import { withAnimated } from "@/utils/withAnimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Chip, DataTable, FAB, List, Text, useTheme } from "react-native-paper";
import { useSharedValue, withSpring } from "react-native-reanimated";

import type { StarshipProps } from "../../api/types";

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
    cargo_capacity,
    consumables,
    crew,
    hyperdrive_rating,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    passengers,
    starship_class,
    //@ts-expect-error the api does not have `image` field
    image,
  } = route.params;

  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };

  const handleBuy = () => {
    Alert.alert("Give me the money!");
  };

  const scale = useSharedValue(1);

  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          {/* eslint-disable-next-line react-native/no-color-literals -- keep it always black */}
          <View style={[styles.imageContainer, { backgroundColor: "black" }]}>
            <Image
              sharedTransitionTag={`image-${model}`}
              source={image}
              style={{ height: 350, width: "100%" }}
            />
            <View style={[styles.closeContainer, styles.left]}>
              <TouchableOpacity
                onPress={handleClose}
                // eslint-disable-next-line react-native/no-color-literals -- keep it always white
                style={[styles.closeButton, { backgroundColor: "white" }]}
              >
                <FontAwesome5
                  color="black"
                  name="times"
                  size={22}
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
            description="Hyperdrive rating"
            left={(props) => (
              <List.Icon
                {...props}
                icon="hubspot"
              />
            )}
            title={hyperdrive_rating}
          />
          <List.Item
            description="Max atmospheric speed"
            left={(props) => (
              <List.Icon
                {...props}
                icon="speedometer"
              />
            )}
            title={max_atmosphering_speed}
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
        onPress={handleBuy}
        onPressIn={() => {
          scale.value = withSpring(0.9);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
      >
        <AnimatedFAB
          icon="cart"
          label="Buy this ship"
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
