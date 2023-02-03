import React from "react";
import { View } from "react-native";
import { Card, Title, Text } from "react-native-paper";

interface CardInputProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const CardInput = ({ title, description, children }: CardInputProps) => {
  return (
    <Card style={{ marginBottom: 32 }}>
      <Card.Content>
        <Title>{title}</Title>
        {description && <Text variant="bodyMedium">{description}</Text>}
        <View style={{ height: 12 }} />
        {children}
      </Card.Content>
    </Card>
  );
};
