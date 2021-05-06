import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
