import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from '../../features/authentication/sign-in-screen'
import { Movie } from 'app/features/home/data'
import { BottomTabNavigator } from 'app/navigation/native/bottom-tab'

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
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
