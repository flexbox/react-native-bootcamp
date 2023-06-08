import { render, screen } from "@testing-library/react-native";
import React from "react";

import { Header } from "~/components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header title="SpaceCraft" />);

    expect(screen.getByText("SpaceCraft")).toBeOnTheScreen();
  });
});
