import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View, type LayoutChangeEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ComposerProps = {
  isRunning: boolean;
  onSend: (prompt: string) => void;
  onStop: () => void;
  onLayout: (event: LayoutChangeEvent) => void;
};

export function Composer({ isRunning, onSend, onStop, onLayout }: ComposerProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState('');
  const canSend = value.trim().length > 0 && !isRunning;

  const send = () => {
    if (!canSend) return;
    onSend(value);
    setValue('');
  };

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.container,
        { backgroundColor: theme.background, paddingBottom: insets.bottom + Spacing.two },
      ]}>
      <View
        style={[
          styles.field,
          { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        ]}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Ask the agent to build something…"
          placeholderTextColor={theme.textSecondary}
          multiline
          style={[styles.input, { color: theme.text }]}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isRunning ? 'Stop the agent' : 'Send'}
          disabled={!isRunning && !canSend}
          onPress={isRunning ? onStop : send}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: isRunning || canSend ? theme.accent : theme.backgroundSelected,
              opacity: pressed ? 0.7 : 1,
            },
          ]}>
          {isRunning ? (
            <View style={[styles.stopIcon, { backgroundColor: theme.onAccent }]} />
          ) : (
            <ThemedText style={[styles.arrow, { color: theme.onAccent }]}>↑</ThemedText>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
    padding: Spacing.two,
    paddingLeft: Spacing.three,
    borderRadius: Spacing.four,
    borderWidth: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    maxHeight: 140,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.two,
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 700,
  },
  stopIcon: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
});
