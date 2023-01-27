import React from 'react'
import { Button, Input, XStack, YStack, Text, H3 } from '@my/ui'
import { useRouter } from 'solito/router'
interface Props {}

export const SignInScreen = (props: Props) => {
  const { push } = useRouter()
  const goToHome = () => {
    push('/')
  }

  return (
    <YStack space flex={1} backgroundColor="$gray1" justifyContent="center" p="$6">
      <H3>NETFLAX</H3>

      <Input placeholder="Email" keyboardType="email-address" returnKeyType="next" />
      <Input placeholder="Password" secureTextEntry={true} />

      <Button chromeless onPress={goToHome}>
        Sign In
      </Button>
      <Button chromeless>Recover Password</Button>
    </YStack>
  )
}
