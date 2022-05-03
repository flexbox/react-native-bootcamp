import * as React from 'react';
import { Animated, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof Animated.Text> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
declare function AnimatedText({ style, theme, ...rest }: Props): JSX.Element;
declare const _default: React.ComponentType<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & typeof AnimatedText, {}>;
export default _default;
