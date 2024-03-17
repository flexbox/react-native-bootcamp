import React from "react";
// import type { ImageProps } from "expo-image";
import { Image as RNImage, ImageProps } from "react-native";
import { Image as ExpoImage } from "expo-image";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(RNImage);

export const Image = (props: AnimateProps<ImageProps>) => {
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
