import * as React from 'react';
import { Animated, View, ViewStyle, StyleProp, AccessibilityState } from 'react-native';
import Surface from '../Surface';
import { IconSource } from '../Icon';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}> & (({ style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}) => JSX.Element), {}>> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string | undefined;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState | undefined;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean | undefined;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean | undefined;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string | undefined;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "visible" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "uppercase" | "disabled" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}> & (({ style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}) => JSX.Element), {}>> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string | undefined;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState | undefined;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean | undefined;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean | undefined;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string | undefined;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element), {}>;
export default _default;
declare const FABWithTheme: React.ComponentType<Pick<$RemoveChildren<React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}> & (({ style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}) => JSX.Element), {}>> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string | undefined;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState | undefined;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean | undefined;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean | undefined;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string | undefined;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "visible" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "uppercase" | "disabled" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}> & (({ style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}) => JSX.Element), {}>> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string | undefined;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState | undefined;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean | undefined;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean | undefined;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string | undefined;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element), {}>;
export { FABWithTheme as FAB };
