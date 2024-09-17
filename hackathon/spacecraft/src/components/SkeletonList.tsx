import { View } from "react-native";
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
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
        key={`skeleton-${i}`}
        Left={PlaceholderMedia}
        style={{ marginBottom: 12 }}
      >
        <PlaceholderLine width={90} />
        <PlaceholderLine width={80} />
      </Placeholder>,
    );
  }

  return <View>{items}</View>;
};
