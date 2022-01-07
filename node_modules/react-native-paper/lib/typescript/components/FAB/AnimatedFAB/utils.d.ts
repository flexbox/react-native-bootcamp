import { Animated, ViewStyle } from 'react-native';
declare type GetCombinedStylesProps = {
    isAnimatedFromRight: boolean;
    isIconStatic: boolean;
    distance: number;
    animFAB: Animated.Value;
};
declare type CombinedStyles = {
    innerWrapper: Animated.WithAnimatedValue<ViewStyle>;
    iconWrapper: Animated.WithAnimatedValue<ViewStyle>;
    absoluteFill: Animated.WithAnimatedValue<ViewStyle>;
};
export declare const getCombinedStyles: ({ isAnimatedFromRight, isIconStatic, distance, animFAB, }: GetCombinedStylesProps) => CombinedStyles;
export {};
