import { YStack, H3, H4, Paragraph, H2 } from '@my/ui'
import React from 'react'

import { DiscoverTabs } from 'app/features/new-and-hot/discover-tabs'
import { UpcomingDate } from 'app/features/new-and-hot/upcoming-date'

export const NewAndHotScreen = () => {
  return (
    <YStack>
      <H3>New & Hot</H3>
      <DiscoverTabs />
      <UpcomingDate />
    </YStack>
  )
}
