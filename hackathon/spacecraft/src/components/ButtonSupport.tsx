import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native-paper";

interface Props {
  mode?: "contained" | "text";
}

export const ButtonSupport = ({ mode = "contained" }: Props) => {
  const handleOpenGitHub = async () => {
    await WebBrowser.openBrowserAsync(
      "https://github.com/flexbox/react-native-bootcamp/issues",
    );
  };

  return (
    <Button
      mode={mode}
      onPress={handleOpenGitHub}
      style={{ marginBottom: 12 }}
    >
      Give my opinion
    </Button>
  );
};
