import React from "react";
import { Card, Title } from "react-native-paper";

interface CardInputProps {
  title: string;
  children: React.ReactNode;
}

export const CardInput = ({ title, children }: CardInputProps) => {
  return (
    <Card style={{ marginBottom: 32 }}>
      <Card.Content>
        <Title style={{ marginBottom: 8 }}>{title}</Title>
        {children}
      </Card.Content>
    </Card>
  );
};
