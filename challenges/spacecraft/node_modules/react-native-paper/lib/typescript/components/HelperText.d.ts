import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import AnimatedText from './Typography/AnimatedText';
import type { $Omit } from '../types';
declare type Props = $Omit<$Omit<React.ComponentPropsWithRef<typeof AnimatedText>, 'padding'>, 'type'> & {
    /**
     * Type of the helper text.
     */
    type: 'error' | 'info';
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: 'none' | 'normal';
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
declare const _default: React.ComponentType<Pick<$Omit<$Omit<(Pick<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, keyof import("react-native").TextProps | "key" | "theme"> & React.RefAttributes<React.Component<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any, any>>) | (Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
}), "padding">, "type"> & {
    /**
     * Type of the helper text.
     */
    type: "error" | "info";
    /**
     * Whether to display the helper text.
     */
    visible?: boolean | undefined;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: "normal" | "none" | undefined;
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string | undefined;
}, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "padding" | "ref" | "key" | "type"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$Omit<$Omit<(Pick<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, keyof import("react-native").TextProps | "key" | "theme"> & React.RefAttributes<React.Component<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any, any>>) | (Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<import("react-native").Text>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
}), "padding">, "type"> & {
    /**
     * Type of the helper text.
     */
    type: "error" | "info";
    /**
     * Whether to display the helper text.
     */
    visible?: boolean | undefined;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: "normal" | "none" | undefined;
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string | undefined;
}> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element), {}>;
export default _default;
