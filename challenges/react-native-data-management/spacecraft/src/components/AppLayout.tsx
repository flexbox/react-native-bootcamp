import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, Headline } from 'react-native-paper';

// 🥑 Add a `NetworkProvider
// import { NetworkProvider } from 'react-native-offline';

interface Props {
  title: string;
  children?: ReactNode;
}

const AppLayout = ({ title, children }: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Headline style={styles.headerText}>{title}</Headline>
      {children}
    </ScrollView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
    backgroundColor: Colors.grey200,
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
