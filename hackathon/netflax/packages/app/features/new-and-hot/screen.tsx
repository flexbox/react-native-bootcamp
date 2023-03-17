import { YStack, Text, H3, H4, Paragraph, H2 } from '@my/ui'
import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

interface Props {}

export const NewAndHotScreen = (props: Props) => {
  const currentMonth = format(new Date(), 'M')
  const currentYear = format(new Date(), 'yyyy')
  const nextMonth = format(new Date(Number(currentYear), Number(currentMonth), 1), 'MMM')

  return (
    <YStack>
      <H3>New & Hot</H3>
      <Text>Tabs</Text>
      <H4>🍿 Coming Soon</H4>
      <Paragraph textTransform="uppercase" fontWeight="800">
        {nextMonth}
      </Paragraph>
      <H3 textTransform="uppercase" fontWeight="800">
        29
      </H3>
    </YStack>
  )
}
