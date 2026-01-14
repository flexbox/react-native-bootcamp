import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Header } from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header title="SpaceCraft" />);

    screen.getByText("SpaceCraft");
  });

  it("displays the title passed as prop", () => {
    render(<Header title="Starships" />);

    screen.getByText("Starships");
  });
});
