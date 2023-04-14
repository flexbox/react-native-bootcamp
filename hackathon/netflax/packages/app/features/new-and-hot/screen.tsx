import { YStack, H3, H4, Paragraph, H2, Button } from '@my/ui'
import React from 'react'
import { Video, ResizeMode } from 'expo-av'

import { DiscoverTabs } from 'app/features/new-and-hot/discover-tabs'
import { UpcomingDate } from 'app/features/new-and-hot/upcoming-date'

export const NewAndHotScreen = () => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <YStack>
      <H3>New & Hot</H3>
      <DiscoverTabs />
      <UpcomingDate />
      <YStack>
        <Video
          ref={video}
          style={{ width: 300, height: 300 }}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <YStack>
          <Button
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          >
            {status.isPlaying ? 'Pause' : 'Play'}
          </Button>
        </YStack>
      </YStack>
    </YStack>
  )
}
