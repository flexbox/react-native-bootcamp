import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { usePlanets } from "~/hooks/usePlanets";
import { Routes } from "~/navigation/Routes";
import { getTerrainColor } from "~/utils/getTerrainColor";

interface PlanetsScreenProps {
  navigation: any;
}

export function PlanetsScreen({ navigation }: PlanetsScreenProps) {
  const { data, error, isError, isLoading } = usePlanets();

  if (isLoading) {
    return (
      <ScreenContainer title={"Explore"}>
        <Text>Loading...</Text>
      </ScreenContainer>
    );
  }

  if (isError) {
    return (
      <ScreenContainer title={"Explore"}>
        <Text>{error?.message}</Text>
      </ScreenContainer>
    );
  }

  const renderItem = ({ item }) => {
    if (!item || item.name === "Bespin") {
      return null;
    }

    const backgroundColor = getTerrainColor(item.terrain);
    const size = item.diameter / 100;

    const randomMarginTop = Math.floor(Math.random() * 100);

    return (
      <View style={{ padding: 64, paddingTop: randomMarginTop }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.PLANET_DETAILS_SCREEN, { planet: item })
          }
        >
          <Text
            style={{ textAlign: "center" }}
            variant="headlineMedium"
          >
            {item.name}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: backgroundColor,
            borderRadius: 1000,
            height: size,
            margin: 8,
            width: size,
          }}
        />
      </View>
    );
  };

  return (
    <ScreenContainer title={"Explore"}>
      <FlatList
        data={data.results}
        horizontal={true}
        keyExtractor={(planet) => planet.name}
        renderItem={renderItem}
      />
    </ScreenContainer>
  );
}
