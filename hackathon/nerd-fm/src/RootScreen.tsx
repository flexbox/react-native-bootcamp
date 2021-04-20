import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {}

const RootScreen = (props: Props) => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
};

export default RootScreen;
