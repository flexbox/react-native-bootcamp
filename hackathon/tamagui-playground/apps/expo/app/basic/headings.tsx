import { H2, Paragraph, ScrollView, XStack, YStack, Box } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Headings',
        }}
      />

      <ScrollView>
        <H2>Headings</H2>
      </ScrollView>
    </>
  )
}
