import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import StarshipCard from "../components/StarshipCard";

const shipFixture = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
};

describe("StarshipCard", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <NavigationContainer>
        <StarshipCard ship={shipFixture} />
      </NavigationContainer>
    );
    getByText("Millennium Falcon");
  });
});
