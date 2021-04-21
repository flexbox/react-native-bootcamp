import React from 'react';
import { View, Text } from 'react-native';

interface Props {}

const MusicDetailsScreen = ({ route, navigation }: Props) => {
  const { musicId } = route.params;

  return (
    <View>
      <Text>Details {musicId}</Text>
    </View>
  );
};

export default MusicDetailsScreen;
