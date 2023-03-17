import { View, Text } from 'react-native'
import React from 'react'
import { H4, SizableText, Tabs, Group, ScrollView } from '@my/ui'

interface Props {}

const categories = [
  {
    value: 'tab1',
    label: '🍿 Coming Soon',
  },
  {
    value: 'tab2',
    label: '🔥 Everyone’s Watching',
  },
  {
    value: 'tab3',
    label: '🎬 New Releases',
  },
]

export const DiscoverTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={400}
      height={150}
      br="$4"
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Tabs.List aria-label="Manage your account" backgroundColor="transparent">
          {categories.map((category) => (
            <Tabs.Trigger theme="Button" value={category.value} mr="$4" borderRadius={'$3'}>
              <SizableText fontFamily="$body">{category.label}</SizableText>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </ScrollView>

      <Tabs.Content value="tab1" key="tab1" p="$2">
        <H4>🍿 Coming Soon</H4>
      </Tabs.Content>

      <Tabs.Content value="tab2" key="tab2" p="$2">
        <H4>🔥 Everyone’s Watching</H4>
      </Tabs.Content>

      <Tabs.Content value="tab3" key="tab3" p="$2">
        <H4>🎬 New Releases</H4>
      </Tabs.Content>
    </Tabs>
  )
}
