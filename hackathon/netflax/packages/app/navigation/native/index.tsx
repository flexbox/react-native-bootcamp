import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { SignInScreen } from '../../features/authentication/sign-in-screen'
import { EpisodeDetailScreen } from '../../features/home/episode-detail-screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { Movie } from 'app/features/home/data'

const Stack = createNativeStackNavigator<{
  'sign-in': undefined
  home: undefined
  episode: {
    episode: Movie
  }
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="sign-in"
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="episode"
        component={EpisodeDetailScreen}
        options={{
          title: 'Detail',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
