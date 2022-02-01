import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicDetailsScreen from '../screens/MusicDetailsScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen';
import { Routes } from './Routes';

const Stack = createStackNavigator();

export function MusicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MUSIC_FEED_SCREEN}
        component={MusicFeedScreen}
      />
      <Stack.Screen
        name={Routes.MUSIC_DETAILS_SCREEN}
        component={MusicDetailsScreen}
      />
    </Stack.Navigator>
  );
}
