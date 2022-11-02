import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { movies } from 'app/features/home/data'
import { Card } from '@tamagui/card'
import { H2, Paragraph, SizableText } from '@tamagui/text'
import { Image } from '@tamagui/image'

interface Props {}

const EpisodeList = (props: Props) => {
  const renderItem = ({ item }) => {
    return (
      <Card elevate size="$4" bordered mb="$4">
        <Card.Header padded>
          <H2>{item.name}</H2>
          <Paragraph>{item.genre}</Paragraph>
        </Card.Header>
        <Card.Background>
          {/* <Image
            pos="absolute"
            width={300}
            height={300}
            resizeMode="contain"
            als="center"
            src="https://source.unsplash.com/random/250"
          /> */}
        </Card.Background>
      </Card>
    )
  }

  return (
    <View>
      <Text>EpisodeList</Text>

      <FlatList
        // horizontal={true}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default EpisodeList
