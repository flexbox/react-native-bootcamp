import { H2, Paragraph, ScrollView, XStack, YStack, Box } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Text',
        }}
      />

      <ScrollView>
        <H2>Text</H2>
      </ScrollView>
    </>
  )
}
