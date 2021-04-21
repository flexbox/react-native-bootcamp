import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import MusicFeedScreen from './src/screens/MusicFeedScreen';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <MusicFeedScreen />
  </ApplicationProvider>
);
