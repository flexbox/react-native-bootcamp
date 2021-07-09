import { Layout } from "@ui-kitten/components";
import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingBox = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </Layout>
  );
};

export default LoadingBox;
