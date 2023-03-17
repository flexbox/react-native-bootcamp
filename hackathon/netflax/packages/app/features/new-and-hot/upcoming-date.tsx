import { YStack, H3, H4, Paragraph, H2 } from '@my/ui'
import React from 'react'
import { format } from 'date-fns'

export const UpcomingDate = () => {
  const currentMonth = format(new Date(), 'M')
  const currentYear = format(new Date(), 'yyyy')
  const nextMonth = format(new Date(Number(currentYear), Number(currentMonth), 1), 'MMM')
  return (
    <YStack p="$2">
      <Paragraph textTransform="uppercase" fontWeight="800">
        {nextMonth}
      </Paragraph>
      <H3 textTransform="uppercase" fontWeight="800">
        29
      </H3>
    </YStack>
  )
}
