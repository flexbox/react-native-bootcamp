import * as React from 'react';
import { StyleProp, Animated, View, ViewStyle } from 'react-native';
declare type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};
declare type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};
declare const _default: (React.ComponentClass<(Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}), any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<(OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}), any> & {
    ({ elevation: cardElevation, onLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    })): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}) | (React.FunctionComponent<(OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
})> & {
    ({ elevation: cardElevation, onLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    })): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}), {}>) | (React.FunctionComponent<(Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation" | "mode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
})> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<(OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}), any> & {
    ({ elevation: cardElevation, onLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    })): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}) | (React.FunctionComponent<(OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `outlined` - Card with an outline.
     */
    mode?: "outlined" | "elevated" | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
})> & {
    ({ elevation: cardElevation, onLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (OutlinedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }) | (ElevatedCardProps & Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: React.ReactNode;
    } & {
        /**
         * Resting elevation of the card which controls the drop shadow.
         */
        elevation?: number | undefined;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: (() => void) | undefined;
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `outlined` - Card with an outline.
         */
        mode?: "outlined" | "elevated" | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: ReactNativePaper.Theme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    })): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>; /**
         * @optional
         */
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>; /**
             * @optional
             */
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}), {}>);
export default _default;
