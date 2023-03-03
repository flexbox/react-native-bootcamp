import React from "react";
import type { ImageProps } from "expo-image";
import { Image as ExpoImage } from "expo-image";

export const Image = (props: ImageProps) => {
  // We should have a unique value for each image
  const blurhash = "L56t?txt00D*t7M{Rjxu00Rk~p-:";

  return (
    <ExpoImage
      placeholder={blurhash}
      contentFit="cover"
      transition={350}
      {...props}
    />
  );
};
