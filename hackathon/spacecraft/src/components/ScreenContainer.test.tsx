import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import { NetworkProvider } from "react-native-offline";

import { ScreenContainer } from "~/components/ScreenContainer";

describe("ScreenContainer", () => {
  it("should render", () => {
    const { getByText } = render(
      <NetworkProvider>
        <ScreenContainer title="Pilots" />
      </NetworkProvider>
    );
    getByText("Pilots");
  });

  it("should render with children", () => {
    const { getByText } = render(
      <NetworkProvider>
        <ScreenContainer title="Pilots">
          <Text>I am a children</Text>
        </ScreenContainer>
      </NetworkProvider>
    );
    getByText("Pilots");
    getByText("I am a children");
  });
});
