import { Text } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";

/**
 * @deprecated move this to typ please
 */
interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

interface Params {
  planet: Planet;
}

interface Route {
  key: string;
  name: string;
  params: Params;
}

export interface PlanetDetailsScreenProps {
  route: Route;
}

export function PlanetDetailsScreen(props: PlanetDetailsScreenProps) {
  return (
    <ScreenContainer
      title={props.route.params.planet.name}
      withGoBack
    >
      <Text>PlanetDetailsScreen</Text>

      <Text>{JSON.stringify(props.route.params.planet.name)}</Text>
    </ScreenContainer>
  );
}
