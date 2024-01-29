import React from "react";
import { Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

interface Props {
  mode?: "contained" | "text";
}

export const ButtonSupport = ({ mode = "contained" }: Props) => {
  const handleOpenGitHub = async () => {
    await WebBrowser.openBrowserAsync(
      "https://github.com/flexbox/react-native-bootcamp/issues"
    );
  };

  return (
    <Button onPress={handleOpenGitHub} mode={mode} style={{ marginBottom: 12 }}>
      Give my opinion
    </Button>
  );
};
