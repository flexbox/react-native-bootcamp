import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Surface from '../../Surface';
import type { $RemoveChildren } from '../../../types';
import type { IconSource } from '../../Icon';
import type { AccessibilityState } from 'react-native';
export declare type AnimatedFABIconMode = 'static' | 'dynamic';
export declare type AnimatedFABAnimateFrom = 'left' | 'right';
declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Label for extended `FAB`.
     */
    label: string;
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
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Whether icon should be translated to the end of extended `FAB` or be static and stay in the same place. The default value is `dynamic`.
     */
    iconMode?: AnimatedFABIconMode;
    /**
     * Indicates from which direction animation should be performed. The default value is `right`.
     */
    animateFrom?: AnimatedFABAnimateFrom;
    /**
     * Whether `FAB` should start animation to extend.
     */
    extended: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "label" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "animateFrom" | "extended" | "iconMode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, label, accessibilityLabel, accessibilityState, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, testID, animateFrom, extended, iconMode, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, label, accessibilityLabel, accessibilityState, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, testID, animateFrom, extended, iconMode, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "pointerEvents" | "color" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "visible" | "uppercase" | "animateFrom" | "extended" | "iconMode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, label, accessibilityLabel, accessibilityState, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, testID, animateFrom, extended, iconMode, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, label, accessibilityLabel, accessibilityState, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, testID, animateFrom, extended, iconMode, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
