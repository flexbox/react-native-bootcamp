import { Text, View } from "react-native";

import { ScreenContainer } from "~/components/ScreenContainer";

/**
 * @deprecated move this to typ please
 */
interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
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
    <ScreenContainer title={props.route.params.planet.name} withGoBack>
      <Text>PlanetDetailsScreen</Text>

      <Text>{JSON.stringify(props.route.params.planet.name)}</Text>
    </ScreenContainer>
  );
}
