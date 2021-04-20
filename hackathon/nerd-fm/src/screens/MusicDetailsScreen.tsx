import React from 'react';
import { View, Text } from 'react-native';
import MusicCover from '../components/MusicCover';

interface Props {}

const MusicDetailsScreen = (props: Props) => {
  return (
    <View>
      <MusicCover />
    </View>
  );
};

export default MusicDetailsScreen;
