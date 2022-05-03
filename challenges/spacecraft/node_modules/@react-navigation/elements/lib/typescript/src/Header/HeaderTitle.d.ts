/// <reference types="react" />
import { Animated, StyleProp, TextProps, TextStyle } from 'react-native';
declare type Props = Omit<TextProps, 'style'> & {
    tintColor?: string;
    children?: string;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
};
export default function HeaderTitle({ tintColor, style, ...rest }: Props): JSX.Element;
export {};
