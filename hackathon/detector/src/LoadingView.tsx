import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

interface LoadingViewProps {
  children?: ReactNode;
  message: string;
}

export function LoadingView({ children, message = '' }: LoadingViewProps) {
  return (
    <View style={styles.container}>
      <View>
        {!!message && (
          <Text text70 grey10 marginB-20>
            {message}
          </Text>
        )}
        <ActivityIndicator />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
