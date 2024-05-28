import { NavigationContainer } from "@react-navigation/native";
import type { StarshipProps } from "api/types";

import { StarshipCard } from "~/components/StarshipCard";

const shipFixture = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
};

const tieFixture: StarshipProps = {
  name: "tieadvanced x1",
  model: "tieadvanced x1",
  cost_in_credits: "unknown",
};

export default {
  title: "Card",
};

export const BuyButton = () => (
  <NavigationContainer>
    <StarshipCard ship={shipFixture} />
  </NavigationContainer>
);

export const NotForSale = () => (
  <NavigationContainer>
    <StarshipCard ship={tieFixture} />
  </NavigationContainer>
);

NotForSale.storyName = "Not for sale";
