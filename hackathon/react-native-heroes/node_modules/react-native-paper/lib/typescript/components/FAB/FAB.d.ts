import * as React from 'react';
import { ViewStyle, StyleProp, AccessibilityState } from 'react-native';
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
declare const _default: (React.ComponentClass<Pick<Props, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
declare const FABWithTheme: (React.ComponentClass<Pick<Props, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "label" | "small" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props) => JSX.Element)), {}>);
export { FABWithTheme as FAB };
