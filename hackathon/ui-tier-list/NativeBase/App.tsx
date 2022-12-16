import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";

import { LoginScreen } from "./LoginScreen";

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <StatusBar style="auto" />
        <LoginScreen />
      </Box>
    </NativeBaseProvider>
  );
}
