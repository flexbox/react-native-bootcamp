import { H2, ScrollView, XStack, YStack, Box, H1, H3, H4, H5, H6, Heading } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Headings',
        }}
      />

      <ScrollView space p="$4">
        <H1 tag="h1">Heading 1</H1>
        <H2 tag="h2" fontFamily="$body">
          Heading 2
        </H2>
        <H2 tag="h2" fontFamily="$heading">
          Heading 2
        </H2>
        <H3 tag="h2">Heading 3</H3>
        <H4 tag="h2">Heading 4</H4>
        <H5 tag="h2">Heading 5</H5>
        <H6 tag="h2" componentName="yolo">
          Heading 6
        </H6>
        <Heading>
          In fields of green and skies of blue, The world is vast and full of hue, With every breath
          and every beat, Our hearts sing out a rhythmic feat.
        </Heading>
      </ScrollView>
    </>
  )
}
