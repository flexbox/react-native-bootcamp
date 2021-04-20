import React from 'react';
import { View, Text } from 'react-native';
import MusicCover from '../components/MusicCover';
import MusicPlayer from '../components/MusicPlayer';

interface Props {}

const MusicDetailsScreen = (props: Props) => {
  return (
    <View>
      <MusicCover />
      <MusicPlayer />
    </View>
  );
};

export default MusicDetailsScreen;
