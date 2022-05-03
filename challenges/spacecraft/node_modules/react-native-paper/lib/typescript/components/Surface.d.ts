import * as React from 'react';
import { Animated, View, StyleProp, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `Surface`.
     */
    children: React.ReactNode;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Content of the `Surface`.
     */
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Content of the `Surface`.
     */
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ style, theme, ...rest }: Props) => JSX.Element), {}>;
export default _default;
