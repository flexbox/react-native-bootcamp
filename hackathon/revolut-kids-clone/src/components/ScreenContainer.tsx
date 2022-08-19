import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { Row } from "./Layout";

type Props = {
  children: React.ReactNode;
  styles?: string;
  withGoBack?: boolean;
};

export const ScreenContainer = ({ children, withGoBack, styles }: Props) => {
  const navigation = useNavigation();

  return (
    <View className={styles}>
      <StatusBar style="auto" />
      {withGoBack && (
        <Row containerStyle="mt-8 flex-start">
          <Button variant="ghost" onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" />
          </Button>
        </Row>
      )}
      {children}
    </View>
  );
};
