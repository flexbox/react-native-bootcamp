import * as React from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
declare type Props = Omit<ViewProps, 'style'> & {
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    children?: React.ReactNode;
};
export default function HeaderBackground({ style, ...rest }: Props): JSX.Element;
export {};
