import { View } from "react-native";
import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

interface SkeletonListProps {
  numberItems?: number;
}

export const SkeletonList = ({ numberItems = 10 }: SkeletonListProps) => {
  const items = [];

  for (let i = 0; i < numberItems; i++) {
    items.push(
      <Placeholder
        Animation={Fade}
        Left={PlaceholderMedia}
        style={{ marginBottom: 12 }}
        key={`skeleton-${i}`}
      >
        <PlaceholderLine width={90} />
        <PlaceholderLine width={80} />
      </Placeholder>
    );
  }

  return <View>{items}</View>;
};
