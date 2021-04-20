import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { RootStack } from './src/navigation/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
