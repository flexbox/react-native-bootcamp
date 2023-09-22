import { Paragraph } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  console.log('file: basic.tsx:5 ~ Screen ~ Screen:')

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Basic',
        }}
      />
      <Paragraph> Stacks </Paragraph>
      <Paragraph> Headings</Paragraph>
      <Paragraph> Text</Paragraph>
    </>
  )
}
