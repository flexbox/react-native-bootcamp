import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicDetailsScreen from '../screens/MusicDetailsScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Music Feed" component={MusicFeedScreen} />
      <Stack.Screen name="Music" component={MusicDetailsScreen} />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Navigator;
