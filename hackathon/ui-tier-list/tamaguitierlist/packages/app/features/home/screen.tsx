import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>
        <Input size="$4" borderWidth={2} />
        <Input placeholder="Password" secureTextEntry={true} borderWidth={2} returnKeyType="done" />
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
    </YStack>
  )
}
