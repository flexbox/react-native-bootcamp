import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface SkeletonListProps {
  numberItems?: number;
}

export const SkeletonList = ({ numberItems = 10 }: SkeletonListProps) => {
  const items = [];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(0.3, { duration: 800 }),
          withTiming(0.7, { duration: 800 }),
        ),
        -1,
        true,
      ),
    };
  });

  for (let i = 0; i < numberItems; i++) {
    items.push(
      <View
        key={`skeleton-${i}`}
        style={styles.itemContainer}
      >
        <Animated.View style={[styles.media, animatedStyle]} />
        <View style={styles.content}>
          <Animated.View
            style={[styles.line, styles.longLine, animatedStyle]}
          />
          <Animated.View
            style={[styles.line, styles.shortLine, animatedStyle]}
          />
        </View>
      </View>,
    );
  }

  return <View>{items}</View>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  },
  line: {
    backgroundColor: "#e1e1e1",
    borderRadius: 4,
    height: 12,
    marginVertical: 4,
  },
  longLine: {
    width: "90%",
  },
  media: {
    backgroundColor: "#e1e1e1",
    borderRadius: 20,
    height: 40,
    marginRight: 12,
    width: 40,
  },
  shortLine: {
    width: "80%",
  },
});
