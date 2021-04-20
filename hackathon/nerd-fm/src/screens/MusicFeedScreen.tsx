import React from 'react';
import { View, Text } from 'react-native';
import { Headline } from 'react-native-paper';
import SoundList from '../components/SoundList';

interface Props {}

const MusicFeedScreen = (props: Props) => {
  return (
    <View>
      <Text>Music Feed</Text>
      <Headline>Liste des musiques</Headline>
      <SoundList />
    </View>
  );
};

export default MusicFeedScreen;
