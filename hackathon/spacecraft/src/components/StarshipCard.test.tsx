import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen } from "@testing-library/react-native";

import { StarshipCard } from "~/components/StarshipCard";

const shipFixture = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
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
