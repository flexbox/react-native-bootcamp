import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootScreen from './src/RootScreen';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <RootScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
