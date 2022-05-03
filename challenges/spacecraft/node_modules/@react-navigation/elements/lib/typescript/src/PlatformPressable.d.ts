import * as React from 'react';
import { Animated, PressableProps, StyleProp, ViewStyle } from 'react-native';
export declare type Props = Omit<PressableProps, 'style'> & {
    pressColor?: string;
    pressOpacity?: number;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    children: React.ReactNode;
};
/**
 * PlatformPressable provides an abstraction on top of Pressable to handle platform differences.
 */
export default function PlatformPressable({ onPressIn, onPressOut, android_ripple, pressColor, pressOpacity, style, ...rest }: Props): JSX.Element;
