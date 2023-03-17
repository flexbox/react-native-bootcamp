import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EpisodeDetailScreen } from 'app/features/home/episode-detail-screen'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { HomeScreen } from 'app/features/home/screen'

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="episode"
        component={EpisodeDetailScreen}
        options={{
          title: 'Detail',
        }}
      />
      <Tab.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Tab.Navigator>
  )
}
