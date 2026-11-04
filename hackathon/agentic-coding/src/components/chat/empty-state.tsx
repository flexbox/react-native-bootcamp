import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const suggestions = [
  'Fix the chat jumping when the keyboard opens',
  'Add a dark mode toggle to the settings screen',
  'Write tests for the cart reducer',
];

export function EmptyState({ onPick }: { onPick: (prompt: string) => void }) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedText style={[styles.glyph, { color: theme.accent }]}>✻</ThemedText>
      <ThemedText type="subtitle" style={styles.title}>
        What should we build?
      </ThemedText>
      <View style={styles.suggestions}>
        {suggestions.map((suggestion) => (
          <Pressable
            key={suggestion}
            onPress={() => onPick(suggestion)}
            style={({ pressed }) => [
              styles.suggestion,
              {
                borderColor: theme.border,
                backgroundColor: pressed ? theme.backgroundSelected : theme.backgroundElement,
              },
            ]}>
            <ThemedText type="small">{suggestion}</ThemedText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
  },
  glyph: {
    fontSize: 48,
    lineHeight: 56,
  },
  title: {
    textAlign: 'center',
  },
  suggestions: {
    alignSelf: 'stretch',
    gap: Spacing.two,
    marginTop: Spacing.three,
  },
  suggestion: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
