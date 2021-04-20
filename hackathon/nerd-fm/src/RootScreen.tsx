import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Headline } from 'react-native-paper';
import { allSounds } from './api/data';
import SoundList from './components/SoundList';

interface Props {}

const RootScreen = (props: Props) => {
  return (
    <View style={{ padding: 20 }}>
      <Headline>Liste des musiques</Headline>
      <SoundList />
    </View>
  );
};

export default RootScreen;
