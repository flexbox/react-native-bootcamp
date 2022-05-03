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
declare const _default: React.ComponentType<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "flat" | "outlined" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource | undefined;
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
    ellipsizeMode?: EllipsizeProp | undefined;
}, "ellipsizeMode" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "mode" | "disabled" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor"> | Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "flat" | "outlined" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource | undefined;
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
    ellipsizeMode?: EllipsizeProp | undefined;
}, "ellipsizeMode" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "mode" | "disabled" | "selected" | "avatar" | "closeIconAccessibilityLabel" | "onClose" | "closeIcon" | "textStyle" | "selectedColor">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, ellipsizeMode, ...rest }: Props) => JSX.Element), {}>;
export default _default;
