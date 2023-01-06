import { Button, H1, Input, Paragraph, ScrollView, useTheme, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkUserProps = useLink({
    href: '/user/nate',
  })
  const linkPassordProps = useLink({
    href: '/password',
  })

  const theme = useTheme()

  return (
    <ScrollView>
      <YStack space="$6" padding="$4" backgroundColor={'#3B82F6'}>
        <SafeAreaView>
          <H1 ta="center" color={'#ffffff'}>
            Hello
          </H1>
          <Paragraph ta="center">Sign in to your account</Paragraph>
        </SafeAreaView>
      </YStack>
      <YStack f={1} p="$4" space>
        <YStack space="$4">
          <Input
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            size="$4"
            borderWidth={2}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            borderWidth={2}
            returnKeyType="done"
          />
        </YStack>

        <YStack>
          <Button {...linkUserProps} size="$4" theme="blue_Button" f={1}>
            Sign In
          </Button>
          <Button {...linkPassordProps} size="$4" chromeless mt="$4" f={1}>
            Don't have an account? Create
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
