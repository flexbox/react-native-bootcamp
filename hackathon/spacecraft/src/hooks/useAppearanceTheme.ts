import type { AppStateStatus } from "react-native";

import { useEffect, useState } from "react";
import { Appearance, AppState } from "react-native";

import { CombinedDarkTheme, CombinedDefaultTheme } from "~/theme/theme";

export const useAppearanceTheme = () => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === "dark"
      ? CombinedDarkTheme
      : CombinedDefaultTheme,
  );

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        const colorScheme = Appearance.getColorScheme();
        setTheme(
          colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme,
        );
      }
    };

    AppState.addEventListener("change", handleAppStateChange);
  }, []);

  return theme;
};
