import React, { ReactElement } from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

interface Props {
  children: ReactElement;
}

const AppShell = ({ children }: Props) => {
  return <Layout style={styles.container}>{children}</Layout>;
};

export default AppShell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    marginBottom: 24,
  },
});
