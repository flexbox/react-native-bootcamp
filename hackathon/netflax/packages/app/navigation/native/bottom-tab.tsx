import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { HomeScreen } from 'app/features/home/screen'
import { Home, Play, DownloadCloud } from '@tamagui/lucide-icons'
import { NewAndHotScreen } from 'app/features/new-and-hot/screen'

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => <Home />,
        }}
      />
      <Tab.Screen
        name="episode"
        component={NewAndHotScreen}
        options={{
          title: 'New & Hot',
          tabBarIcon: () => <Play />,
        }}
      />
      <Tab.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: () => <DownloadCloud />,
        }}
      />
    </Tab.Navigator>
  )
}
