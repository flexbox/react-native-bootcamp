// import type { ImageProps } from "expo-image";
import type { ImageProps } from "react-native";
import type { AnimatedProps } from "react-native-reanimated";

// for some reason, the expo-image is not working
// import { Image as ExpoImage } from "expo-image";
import { Image as RNImage } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(RNImage);

export const Image = (props: AnimatedProps<ImageProps>) => {
  // We should have a unique value for each image
  // const blurhash = "L56t?txt00D*t7M{Rjxu00Rk~p-:";

  return (
    <AnimatedImage
      // placeholder={blurhash}
      // contentFit="cover"
      // transition={0}
      {...props}
    />
  );
};
