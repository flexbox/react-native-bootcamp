import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Navigator } from "./src/navigation/Navigator";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Navigator />
  </ApplicationProvider>
);
