import * as React from 'react';
import { Animated, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { IconSource } from './Icon';
import Surface from './Surface';
import type { EllipsizeProp } from '../types';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: 'flat' | 'outlined';
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource;
    /**
     * Whether chip is selected.
     */
    selected?: boolean;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: () => void;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: EllipsizeProp;
};
declare const _default: (React.ComponentClass<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "ellipsizeMode" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "mode" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "ellipsizeMode" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "mode" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}), any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, ellipsizeMode, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, ellipsizeMode, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "ellipsizeMode" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "mode" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}) | (Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | readonly (false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined)[] | null | undefined> | null | undefined;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "outlined" | "flat" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | Readonly<{
        source: string | number | import("react-native").ImageURISource | import("react-native").ImageURISource[];
        direction: "rtl" | "ltr" | "auto";
    }> | ((props: {
        size: number;
        allowFontScaling?: boolean | undefined;
    } & {
        color: string;
    }) => React.ReactNode) | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}, "ref" | "style" | "children" | "pointerEvents" | "ellipsizeMode" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "mode" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
})> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, ellipsizeMode, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, ellipsizeMode, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
