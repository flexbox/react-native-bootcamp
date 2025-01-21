import { FormInput } from "@/components/FromInput";
import { fireEvent, render, screen } from "@testing-library/react-native";

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
