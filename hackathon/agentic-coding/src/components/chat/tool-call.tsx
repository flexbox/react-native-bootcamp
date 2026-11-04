import { ActivityIndicator, StyleSheet, View } from 'react-native';

import type { ToolPart } from '@/agent/types';
import { ThemedText } from '@/components/themed-text';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const diffPrefix = { add: '+', remove: '-', context: ' ' } as const;

export function ToolCall({ part }: { part: ToolPart }) {
  const theme = useTheme();
  const isRunning = part.status === 'running';

  return (
    <View style={[styles.card, { borderColor: theme.border }]}>
      <View style={styles.header}>
        {isRunning ? (
          <ActivityIndicator size="small" color={theme.accent} style={styles.indicator} />
        ) : (
          <View style={[styles.dot, { backgroundColor: theme.success }]} />
        )}
        <ThemedText style={styles.mono} numberOfLines={1}>
          <ThemedText style={[styles.mono, styles.toolName]}>{part.tool}</ThemedText>(
          {part.target})
        </ThemedText>
      </View>

      {!isRunning && part.summary && (
        <ThemedText themeColor="textSecondary" style={styles.mono}>
          {`⎿  ${part.summary}`}
        </ThemedText>
      )}

      {!isRunning && part.diff && (
        <View style={[styles.block, { backgroundColor: theme.backgroundElement }]}>
          {part.diff.map((line, index) => (
            <ThemedText
              key={index}
              style={[
                styles.mono,
                styles.diffLine,
                line.kind === 'add' && {
                  color: theme.success,
                  backgroundColor: theme.successBackground,
                },
                line.kind === 'remove' && {
                  color: theme.danger,
                  backgroundColor: theme.dangerBackground,
                },
              ]}>
              {`${diffPrefix[line.kind]} ${line.text}`}
            </ThemedText>
          ))}
        </View>
      )}

      {!isRunning && part.output && (
        <View style={[styles.block, { backgroundColor: theme.backgroundElement }]}>
          {part.output.map((line, index) => (
            <ThemedText key={index} themeColor="textSecondary" style={styles.mono}>
              {line}
            </ThemedText>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  indicator: {
    width: 10,
    height: 10,
    transform: [{ scale: 0.6 }],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  mono: {
    flexShrink: 1,
    fontFamily: Fonts.mono,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 400,
  },
  toolName: {
    fontWeight: 700,
  },
  block: {
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
    overflow: 'hidden',
  },
  diffLine: {
    paddingHorizontal: Spacing.two,
  },
});
