import { storiesOf } from "@storybook/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StarshipCard } from "~/components/StarshipCard";

const shipFixture = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
};
storiesOf("Card", module).add("Simple Card", () => (
  <NavigationContainer>
    <StarshipCard ship={shipFixture} />
  </NavigationContainer>
));
