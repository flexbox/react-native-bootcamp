import { fireEvent, render, screen } from "@testing-library/react-native";

import { FormInput } from "~/components/FromInput";

describe("FormInput", () => {
  const mock = jest.fn();
  it("renders correctly", () => {
    render(
      <FormInput
        label="your-car"
        onChangeText={mock}
        value="tesla"
      />,
    );
    screen.getAllByText("your-car");
    fireEvent.changeText(screen.getAllByText("your-car")[0], "tesla");
    expect(mock).toHaveBeenCalled();
  });
});
