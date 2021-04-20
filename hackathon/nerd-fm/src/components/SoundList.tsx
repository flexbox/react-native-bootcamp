import React from 'react';
import { View, Text } from 'react-native';
import { allSounds } from '../api/data';
import { List } from 'react-native-paper';

interface Props {}

const SoundList = (props: Props) => {
  return (
    <>
      {allSounds.map((sound) => {
        return (
          <List.Item
            title={sound.artist}
            description={sound.music.title}
            left={(props) => <List.Icon {...props} icon="music-box-outline" />}
          />
        );
      })}
    </>
  );
};

export default SoundList;
