import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicDetailsScreen from '../screens/MusicDetailsScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Music Feed" component={MusicFeedScreen} />
      <Stack.Screen name="Music" component={MusicDetailsScreen} />
    </Stack.Navigator>
  );
}
