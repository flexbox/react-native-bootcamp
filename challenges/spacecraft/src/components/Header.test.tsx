import { render } from "@testing-library/react-native";
import React from "react";

import { Header } from "~/components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Header title="SpaceCraft" />);

    getByText("SpaceCraft");
  });
});
