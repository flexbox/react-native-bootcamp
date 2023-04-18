import { YStack } from '@my/ui'
import EpisodeList from 'app/features/home/episode-list'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack space>
      <EpisodeList />
    </YStack>
  )
}
