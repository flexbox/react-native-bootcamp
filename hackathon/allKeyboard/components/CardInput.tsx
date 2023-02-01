import React from "react";
import { Card, Title } from "react-native-paper";

interface Props {}

export const CardInput = ({ title, children }) => {
  return (
    <Card style={{ marginBottom: 32 }}>
      <Card.Content>
        <Title style={{ marginBottom: 8 }}>{title}</Title>
        {children}
      </Card.Content>
    </Card>
  );
};
