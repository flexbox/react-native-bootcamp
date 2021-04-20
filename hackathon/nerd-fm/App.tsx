import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { RootStack } from './src/navigation/Navigator';
import RootScreen from './src/RootScreen';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
