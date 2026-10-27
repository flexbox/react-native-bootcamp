import { render, screen } from "@testing-library/react-native";

import { Header } from "./Header";

describe("Header", () => {
  it("renders correctly with the given title", async () => {
    await render(<Header title="SpaceCraft" />);

    expect(screen.getByText("SpaceCraft")).toBeVisible();
  });
});
