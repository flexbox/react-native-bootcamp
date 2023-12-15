import { Text, TouchableOpacity, View } from "react-native";

import { ScreenContainer } from "~/components/ScreenContainer";
import { usePlanets } from "~/hooks/usePlanets";
import { Routes } from "~/navigation/Routes";

interface ExploreScreenProps {}

export function ExploreScreen({ navigation }: ExploreScreenProps) {
  const { data, isLoading, isError, error } = usePlanets();

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

  return (
    <ScreenContainer title={"Explore"}>
      <View>
        {data?.results.map((planet) => (
          <TouchableOpacity
            key={planet.name}
            onPress={() =>
              navigation.navigate(Routes.PLANET_DETAILS_SCREEN, { planet })
            }
          >
            <Text>{planet.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScreenContainer>
  );
}
