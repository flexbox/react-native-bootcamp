import { H1, H2, Paragraph, YStack } from '@my/ui'

import React from 'react'
import { Link } from 'solito/link'

export function HomeScreen() {
  return (
    <YStack ai="center" p="$4" space>
      <YStack space maw={600}>
        <H1 ta="center">Tamagui Playground</H1>

        <Link href="/basic/">
          <H2>Basic</H2>
          <Paragraph> Stacks Headings Text</Paragraph>
        </Link>

        <Link href="/forms/">
          <H2>Forms</H2>
          <Paragraph>
            Button Checkbox Form Input & TextArea Label Progress RadioGroup Select Slider Switch
            ToggleGroup
          </Paragraph>
        </Link>

        <H2>Panels</H2>
        <Paragraph>AlertDialog Dialog Popover Sheet Tooltip Toast</Paragraph>

        <H2>Organize</H2>
        <Paragraph>Accordion Group Tabs</Paragraph>

        <H2>Content</H2>
        <Paragraph>Avatar Card Image Listltem</Paragraph>

        <H2>Visual</H2>
        <Paragraph>LinearGradient Separator Square & Circle</Paragraph>

        <H2>Etc</H2>
        <Paragraph> Anchor HTML Elements ScrollView Spinner Unspaced VisuallyHidden</Paragraph>
      </YStack>
    </YStack>
  )
}
