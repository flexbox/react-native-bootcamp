import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { movies } from 'app/features/home/data'
import { Card } from '@tamagui/card'
import { H2, Paragraph, SizableText } from '@tamagui/text'
import { Image } from '@tamagui/image'
import kebabCase from 'lodash/kebabCase'
import { useRouter } from 'solito/router'

const EpisodeList = () => {
  const { push } = useRouter()
  const goToDetailScreen = (item) => {
    const slug = kebabCase(item.name)
    push({
      pathname: `/episode/${slug}`,
      query: {
        slug,
        ...item,
      },
    })
  }

  const renderItem = ({ item }) => {
    return (
      <Card
        elevate
        size="$4"
        bordered
        mb="$4"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        onPress={() => goToDetailScreen(item)}
      >
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
    <FlatList
      // horizontal={true}
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default EpisodeList
