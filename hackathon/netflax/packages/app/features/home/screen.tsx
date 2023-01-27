import { Button, XStack, YStack } from '@my/ui'
import EpisodeList from 'app/features/home/episode-list'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack space>
      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <EpisodeList />
    </YStack>
  )
}
