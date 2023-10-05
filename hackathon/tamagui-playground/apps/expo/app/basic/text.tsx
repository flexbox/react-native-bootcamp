import { Paragraph, ScrollView, XStack, Text, SizableText } from '@my/ui'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Text',
        }}
      />

      <ScrollView space p="$4">
        <Text theme="yellow_alt2_TextArea">Text</Text>
        <SizableText size="$3" theme="yellow_alt2_TextArea">
          SizableText
        </SizableText>
        <SizableText size="$5">SizableText</SizableText>
        <XStack space>
          <SizableText theme="alt1" size="$3">
            alt1
          </SizableText>
          <SizableText theme="alt2" size="$3">
            alt2
          </SizableText>
        </XStack>
        <Paragraph size="$2" fontWeight="800">
          GitHub is a web-based platform that provides a collaborative environment for software
          development projects. It offers version control, issue tracking, and project management
          tools to help developers work together efficiently. GitHub has become a central hub for
          open-source software development, with millions of users and repositories covering a wide
          range of programming languages and technologies.
        </Paragraph>
      </ScrollView>
    </>
  )
}
