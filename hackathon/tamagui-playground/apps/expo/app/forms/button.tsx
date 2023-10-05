import { ScrollView, Button, H2, Theme, YStack } from '@my/ui'
import { Stack } from 'expo-router'

function ButtonNinjaTurtle(props) {
  return (
    <Button backgroundColor={'#95E23D'} pressStyle={{ backgroundColor: '#86cc34' }} {...props}>
      ButtonNinjaTurtle
    </Button>
  )
}

function ButtonDemo() {
  return (
    <YStack space>
      <H2>Theme</H2>
      <Button>Theme</Button>
      <Button theme="red">red</Button>
      <Button theme="green">green</Button>
      <Button theme="blue">blue</Button>
      <Button theme="yellow">yellow</Button>
      <Button theme="pink">pink</Button>
      <Button theme="active">active</Button>

      <Button>Theme</Button>
      <Button themeInverse theme="red">
        red
      </Button>
      <Button themeInverse theme="green">
        green
      </Button>
      <Button themeInverse theme="blue">
        blue
      </Button>
      <Button themeInverse theme="yellow">
        yellow
      </Button>
      <Button themeInverse theme="pink">
        pink
      </Button>
      <Button themeInverse theme="active">
        active
      </Button>
    </YStack>
  )
}

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Button',
        }}
      />

      <ScrollView space p="$4">
        <Button>Button</Button>

        <H2>Sizes</H2>
        <Button size="$1">Button</Button>
        <Button size="$2">Button</Button>
        <Button size="$3">Button</Button>
        <Button size="$4">Button</Button>
        <Button size="$5">Button</Button>
        <Button size="$6">Button</Button>
        <Button size="$7">Button</Button>
        <Button size="$8">Button</Button>

        <H2>Variant</H2>
        <Button>normal</Button>
        <Button variant="outlined">outlined</Button>

        <ButtonDemo />
        <Theme name="blue">
          <ButtonDemo />
        </Theme>
        <Theme name="pink">
          <ButtonDemo />
        </Theme>

        <YStack space>
          <ButtonNinjaTurtle />
          <H2 mb="$2">Login Instagram</H2>
          <Button theme="blue" borderRadius="$8" mb="$4">
            Log in
          </Button>
          <Button variant="outlined" borderRadius="$8">
            Log into another account
          </Button>
        </YStack>
      </ScrollView>
    </>
  )
}
