import React from 'react';
import { View } from 'react-native';
import MusicCover from '../components/MusicCover';
import MusicPlayer from '../components/MusicPlayer';
import MusicLiker from '../components/MusicLiker';

interface Props {}

const MusicDetailsScreen = (props: Props) => {
  return (
    <View>
      <MusicCover />
      <MusicPlayer />
      <MusicLiker />
    </View>
  );
};

export default MusicDetailsScreen;
