import React from "react";
import { Layout, Text } from "@ui-kitten/components";

interface Props {}

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">MASS</Text>
    <Text category="h3" appearance="hint">
      Meme As A Service
    </Text>
  </Layout>
);

export default HomeScreen;
