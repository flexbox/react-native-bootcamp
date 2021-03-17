import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AppLayout from '../components/AppLayout';

interface Props {}

const PilotScreen = (props: Props) => {
  const [display, setDisplay] = useState(false);

  const handlePress = () => {
    setDisplay(!display);
  };

  console.log('file: PilotScreen.tsx ~ line 8 ~ PilotScreen ~ props', props);
  return (
    <AppLayout title="Pilot">
      {display ? <Text>MODAL</Text> : <Text>RIEN</Text>}

      <Button onPress={handlePress}>Press</Button>
    </AppLayout>
  );
};

export default PilotScreen;
