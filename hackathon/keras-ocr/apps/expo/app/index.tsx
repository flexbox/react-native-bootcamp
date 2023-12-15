import { ImageLabelingScreen } from 'app/features/image-labeling/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Labeling',
        }}
      />
      <ImageLabelingScreen />
    </>
  )
}
