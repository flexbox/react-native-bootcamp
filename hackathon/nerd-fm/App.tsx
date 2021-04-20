import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootScreen from './src/RootScreen';

export default function App() {
  return (
    <PaperProvider>
      <RootScreen />
    </PaperProvider>
  );
}
