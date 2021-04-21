import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import SoundList from '../components/SoundList';
import { View, StyleSheet } from 'react-native';

interface Props {}

const MusicFeedScreen = (props: Props) => {
  return (
    <Layout>
      <SoundList />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 16,
  },
});

export default MusicFeedScreen;
