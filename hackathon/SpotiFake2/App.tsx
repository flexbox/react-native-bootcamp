import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { MusicStack } from './src/navigation/Navigator';

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MusicStack />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
