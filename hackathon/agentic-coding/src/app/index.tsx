import { useRef, useState } from 'react';
import { Pressable, StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import {
  KeyboardChatScrollView,
  KeyboardStickyView,
  type KeyboardChatScrollViewRef,
} from 'react-native-keyboard-controller';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { runAgent } from '@/agent/mock-agent';
import type { Turn } from '@/agent/types';
import { Composer } from '@/components/chat/composer';
import { EmptyState } from '@/components/chat/empty-state';
import { TurnView } from '@/components/chat/turn-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function ChatScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<KeyboardChatScrollViewRef>(null);
  const abortRef = useRef<AbortController | null>(null);
  const pendingScrollTurnId = useRef<string | null>(null);
  const turnCount = useRef(0);

  // Composer height extends the scroll range so the last message is never hidden behind it.
  const composerHeight = useSharedValue(0);
  // Space reserved below a new prompt so it can sit at the top while the answer streams in.
  const blankSpace = useSharedValue(0);

  const [turns, setTurns] = useState<Turn[]>([]);
  const [viewportHeight, setViewportHeight] = useState(0);
  const isRunning = turns.at(-1)?.status === 'streaming';

  const updateTurn = (id: string, changes: Partial<Turn>) => {
    setTurns((current) => current.map((turn) => (turn.id === id ? { ...turn, ...changes } : turn)));
  };

  const send = (prompt: string) => {
    const id = `turn-${turnCount.current++}`;
    const controller = new AbortController();
    abortRef.current = controller;
    pendingScrollTurnId.current = id;
    blankSpace.set(viewportHeight);
    setTurns((current) => [...current, { id, prompt, parts: [], status: 'streaming' }]);

    runAgent(prompt, {
      signal: controller.signal,
      onUpdate: (parts) => updateTurn(id, { parts }),
    })
      .then(() => updateTurn(id, { status: 'done' }))
      .catch(() => updateTurn(id, { status: 'stopped' }));
  };

  const stop = () => abortRef.current?.abort();

  const startNewSession = () => {
    stop();
    blankSpace.set(0);
    setTurns([]);
  };

  const onLastTurnLayout = (turnId: string, event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    // Shrink the reserved space as the answer grows into it.
    blankSpace.set(Math.max(0, viewportHeight - height - Spacing.three));

    if (pendingScrollTurnId.current === turnId) {
      pendingScrollTurnId.current = null;
      scrollRef.current?.scrollTo({ y: y - Spacing.three, animated: true });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.header,
          { paddingTop: insets.top + Spacing.two, borderBottomColor: theme.border },
        ]}>
        <View>
          <ThemedText type="smallBold">
            <ThemedText type="smallBold" style={{ color: theme.accent }}>
              ✻{' '}
            </ThemedText>
            Agent
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.repo}>
            flexbox/spacecraft · main
          </ThemedText>
        </View>
        {turns.length > 0 && (
          <Pressable
            accessibilityRole="button"
            onPress={startNewSession}
            hitSlop={Spacing.three}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <ThemedText type="small" style={{ color: theme.accent }}>
              New session
            </ThemedText>
          </Pressable>
        )}
      </View>

      <KeyboardChatScrollView
        ref={scrollRef}
        keyboardLiftBehavior="persistent"
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        offset={insets.bottom}
        extraContentPadding={composerHeight}
        blankSpace={blankSpace}
        onLayout={(event) => setViewportHeight(event.nativeEvent.layout.height)}
        contentContainerStyle={[styles.content, turns.length === 0 && styles.emptyContent]}>
        {turns.length === 0 ? (
          <EmptyState onPick={send} />
        ) : (
          turns.map((turn, index) => (
            <TurnView
              key={turn.id}
              turn={turn}
              onLayout={
                index === turns.length - 1
                  ? (event) => onLastTurnLayout(turn.id, event)
                  : undefined
              }
            />
          ))
        )}
      </KeyboardChatScrollView>

      <KeyboardStickyView offset={{ opened: insets.bottom }} style={styles.composer}>
        <Composer
          isRunning={isRunning}
          onSend={send}
          onStop={stop}
          onLayout={(event) => composerHeight.set(event.nativeEvent.layout.height)}
        />
      </KeyboardStickyView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.two,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  repo: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    lineHeight: 16,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    gap: Spacing.five,
    padding: Spacing.three,
  },
  emptyContent: {
    flexGrow: 1,
  },
  composer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
