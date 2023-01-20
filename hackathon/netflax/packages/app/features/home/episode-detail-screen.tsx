import { View, Text } from 'react-native'
import React from 'react'
import { Button, H1, Paragraph } from '@my/ui'

export const EpisodeDetailScreen = ({ navigation, route }) => {
  const { name, duration } = route.params

  return (
    <View>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
      <H1>{name}</H1>
      <Paragraph size="$2" fow="800">
        {duration}
      </Paragraph>
    </View>
  )
}
