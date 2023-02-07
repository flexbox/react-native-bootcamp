import { View } from "react-native";
import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

export const SkeletonList = () => {
  return (
    <View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          style={{ marginBottom: 12 }}
          key={`animation-${i}`}
        >
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
        </Placeholder>
      ))}
    </View>
  );
};
