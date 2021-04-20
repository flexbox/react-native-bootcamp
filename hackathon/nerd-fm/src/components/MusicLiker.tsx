import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {}

const MusicLiker = (props: Props) => {
  const [like, setlike] = useState<boolean>(false);

  const handlePress = () => {
    setlike(!like);
  };

  return <Button onPress={handlePress}>{like ? '❤️' : '🖤'}</Button>;
};

export default MusicLiker;
