import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import find from 'lodash/find';
import { allSounds } from '../api/data';
import SoundPlayer from '../components/SoundPlayer';
import SoundShare from '../components/SoundShare';

interface Props {}

const MusicDetailsScreen = ({ route, navigation }: Props) => {
  const { musicId } = route.params;

  const currentMusic = find(allSounds, { id: musicId });

  return (
    <View style={{ padding: 20 }}>
      <Text category="h3">{currentMusic?.music.title}</Text>
      <Text category="h4" appearance="hint">
        {currentMusic?.artist}
      </Text>
      <View style={{ padding: 20 }}>
        <SoundPlayer />
      </View>
      <View style={{ padding: 20 }}>
        <SoundShare />
      </View>
    </View>
  );
};

export default MusicDetailsScreen;
