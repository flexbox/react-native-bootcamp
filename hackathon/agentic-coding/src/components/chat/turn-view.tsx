import { useEffect } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import type { Turn } from '@/agent/types';
import { ToolCall } from '@/components/chat/tool-call';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type TurnViewProps = {
  turn: Turn;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export function TurnView({ turn, onLayout }: TurnViewProps) {
  const theme = useTheme();

  return (
    <View style={styles.turn} onLayout={onLayout}>
      <View style={[styles.prompt, { backgroundColor: theme.backgroundElement }]}>
        <ThemedText>{turn.prompt}</ThemedText>
      </View>

      {turn.parts.map((part) =>
        part.type === 'text' ? (
          <ThemedText key={part.id} style={styles.text}>
            {part.text}
          </ThemedText>
        ) : (
          <ToolCall key={part.id} part={part} />
        )
      )}

      {turn.status === 'streaming' && <WorkingIndicator />}
      {turn.status === 'stopped' && (
        <ThemedText type="small" themeColor="textSecondary">
          Stopped by you
        </ThemedText>
      )}
    </View>
  );
}

function WorkingIndicator() {
  const theme = useTheme();
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.set(withRepeat(withTiming(0.3, { duration: 700 }), -1, true));
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.get() }));

  return (
    <Animated.View style={[styles.working, animatedStyle]}>
      <ThemedText type="smallBold" style={{ color: theme.accent }}>
        ✻ Working…
      </ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  turn: {
    gap: Spacing.three,
  },
  prompt: {
    alignSelf: 'flex-end',
    maxWidth: '85%',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + Spacing.half,
    borderRadius: Spacing.four,
    borderBottomRightRadius: Spacing.one,
  },
  text: {
    fontWeight: 400,
  },
  working: {
    alignSelf: 'flex-start',
  },
});
