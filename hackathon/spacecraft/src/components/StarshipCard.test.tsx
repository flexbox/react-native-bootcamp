import { NavigationContainer } from "@react-navigation/native";
import { render, screen } from "@testing-library/react-native";

import { StarshipCard } from "~/components/StarshipCard";

const shipFixture = {
  model: "YT-1300 light freighter",
  name: "Millennium Falcon",
};

describe("StarshipCard", () => {
  it("renders correctly", () => {
    render(
      <NavigationContainer>
        <StarshipCard ship={shipFixture} />
      </NavigationContainer>,
    );

    // screen.debug();
    expect(screen.getByText("Millennium Falcon")).toBeOnTheScreen();
  });
});
