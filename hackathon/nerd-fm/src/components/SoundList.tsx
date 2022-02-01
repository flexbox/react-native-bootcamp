import React from 'react';
import { allSounds } from '../api/data';
import { List } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { Routes } from '../navigation/Routes';

interface Props {}

const SoundItem = ({ sound }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.MUSIC_DETAIL)}>
      <List.Item
        title={sound.artist}
        description={sound.music.title}
        left={(props) => <List.Icon {...props} icon="music-box-outline" />}
      />
    </TouchableOpacity>
  );
};

const SoundList = (props: Props) => {
  return (
    <>
      {allSounds.map((sound, index) => {
        return <SoundItem sound={sound} key={index} />;
      })}
    </>
  );
};

export default SoundList;
