import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicDetailsScreen from '../screens/MusicDetailsScreen';
import MusicFeedScreen from '../screens/MusicFeedScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

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
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <NavigationContainer>
      {isAuthorized ? (
        <RootStack />
      ) : (
        <LoginScreen setIsAuthorized={setIsAuthorized} />
      )}
    </NavigationContainer>
  );
}

export default Navigator;
