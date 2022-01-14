import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { FormInput } from "~/components/FromInput";

describe("StarshipCard", () => {
  const mock = jest.fn();
  it("renders correctly", () => {
    const { getAllByText } = render(
      <FormInput label="your-car" value="tesla" onChangeText={mock} />
    );
    getAllByText("your-car");
    fireEvent.changeText(getAllByText("your-car")[0], "tesla");
    expect(mock).toHaveBeenCalled();
  });
});
