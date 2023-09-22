import { H1, H2, Paragraph, Separator, YStack } from '@my/ui'

import React from 'react'
import { Link } from 'solito/link'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Tamagui Playground</H1>

        <Link href="/basic/">
          <H2>BASIC</H2>
          <Paragraph> Stacks Headings Text</Paragraph>
        </Link>

        <H2>ORGANIZE</H2>
        <Paragraph>
          Button Checkbox Form Input & TextArea Label Progress RadioGroup Select Slider Switch
          ToggleGroup
        </Paragraph>

        <H2>CONTENT</H2>
        <Paragraph>AlertDialog Dialog Popover Sheet Tooltip Toast</Paragraph>

        <H2></H2>
        <Paragraph>Accordion Group Tabs</Paragraph>
        <H2></H2>
        <Paragraph>Avatar Card Image Listltem</Paragraph>
        <H2></H2>
        <Paragraph>LinearGradient Separator Square & Circle</Paragraph>

        <H2>ETC</H2>
        <Paragraph> Anchor HTML Elements ScrollView Spinner Unspaced VisuallyHidden</Paragraph>

        <Separator />
      </YStack>
    </YStack>
  )
}
