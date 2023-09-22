import { H2, Paragraph, ScrollView, XStack, YStack, Box } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Stacks',
        }}
      />

      <ScrollView>
        <YStack space>
          <YStack backgroundColor="$red6">
            <Paragraph> YStack </Paragraph>
          </YStack>
          <YStack backgroundColor="$red7">
            <Paragraph> YStack </Paragraph>
          </YStack>
          <YStack backgroundColor="$red8">
            <Paragraph> YStack </Paragraph>
          </YStack>
          <YStack backgroundColor="$red9">
            <Paragraph> YStack </Paragraph>
          </YStack>
        </YStack>

        <YStack space backgroundColor="$white" padding="$4">
          <YStack>
            <YStack backgroundColor="$gray5" h="$4" />
          </YStack>
          <YStack backgroundColor="$gray5">
            <YStack h="$4" />
          </YStack>
          <YStack backgroundColor="$gray7">
            <Paragraph> YStack </Paragraph>
          </YStack>
          <YStack backgroundColor="$gray8">
            <Paragraph> YStack </Paragraph>
          </YStack>
          <YStack backgroundColor="$gray9">
            <Paragraph> YStack </Paragraph>
          </YStack>
        </YStack>
      </ScrollView>
    </>
  )
}
