/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import "react-native-gesture-handler/jestSetup";
import "@testing-library/jest-native/extend-expect";

jest.mock("react-native-worklets", () =>
  require("react-native-worklets/src/mock"),
);

jest.mock("react-native-worklets", () =>
  require("react-native-worklets/src/mock"),
);

// Reanimated 4.7 calls `setCSSEventHandler` on init, which throws under Jest
// (JSReanimated doesn't implement it), so stub it out.
jest.mock("react-native-reanimated/src/css/native/proxy", () => ({
  ...jest.requireActual("react-native-reanimated/src/css/native/proxy"),
  setCSSEventHandler: () => {},
}));

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// fixing `ReferenceError: You are trying to `import` a file after the Jest environment has been torn down.`
jest.useFakeTimers();
