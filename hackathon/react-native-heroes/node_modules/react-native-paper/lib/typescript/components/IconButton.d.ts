import * as React from 'react';
import { ViewStyle, StyleProp, GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { IconSource } from './Icon';
import type { $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Icon to display.
     */
    icon: IconSource;
    /**
     * Color of the icon.
     */
    color?: string;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<TouchableWithoutFeedback>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
    /**
     * Size of the icon.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
    /**
     * Size of the icon.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
