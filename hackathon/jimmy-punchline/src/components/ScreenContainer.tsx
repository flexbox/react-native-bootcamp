import React, { ReactNode } from "react";
import { Layout } from "@ui-kitten/components";

type ScreenContainerProps = {
  children: ReactNode;
};

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <Layout
      style={{
        flex: 1,
        padding: 32,
      }}
    >
      {children}
    </Layout>
  );
};
