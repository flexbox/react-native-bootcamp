import { Layout, Text } from "@ui-kitten/components";
import React from "react";

const ErrorBox = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">😢 We got an error</Text>
    </Layout>
  );
};

export default ErrorBox;
