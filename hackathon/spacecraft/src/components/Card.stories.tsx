import type { StarshipProps } from "api/types";

import { StarshipCard } from "@/components/StarshipCard";
import { NavigationContainer } from "@react-navigation/native";

const shipFixture = {
  model: "YT-1300 light freighter",
  name: "Millennium Falcon",
};

const tieFixture: StarshipProps = {
  cost_in_credits: "unknown",
  model: "tieadvanced x1",
  name: "tieadvanced x1",
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
