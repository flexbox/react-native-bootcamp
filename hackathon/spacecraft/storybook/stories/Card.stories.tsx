import { storiesOf } from "@storybook/react-native";
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
storiesOf("Card", module)
  .add("Buy Button", () => (
    <NavigationContainer>
      <StarshipCard ship={shipFixture} />
    </NavigationContainer>
  ))
  .add("Not for sale", () => (
    <NavigationContainer>
      <StarshipCard ship={tieFixture} />
    </NavigationContainer>
  ));
