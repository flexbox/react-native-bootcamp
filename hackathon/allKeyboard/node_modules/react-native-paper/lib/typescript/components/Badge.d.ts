import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
declare type Props = React.ComponentProps<typeof Animated.Text> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<typeof Animated.Text>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
