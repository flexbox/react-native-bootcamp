import * as React from 'react';
import { Animated, View, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { IconSource } from './Icon';
import Surface from './Surface';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
     */
    mode?: 'text' | 'outlined' | 'contained';
    /**
     * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
     */
    dark?: boolean;
    /**
     * Use a compact look, useful for `text` buttons in a row.
     */
    compact?: boolean;
    /**
     * Custom text color for flat button, or background color for contained button.
     */
    color?: string;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Icon to display for the `Button`.
     */
    icon?: IconSource;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Label text of the button.
     */
    children: React.ReactNode;
    /**
     * Make the label text uppercased. Note that this won't work if you pass React elements as children.
     */
    uppercase?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility hint for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityHint?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Style of button's inner content.
     * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the button text.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare const _default: React.ComponentType<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
     */
    mode?: "text" | "outlined" | "contained" | undefined;
    /**
     * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
     */
    dark?: boolean | undefined;
    /**
     * Use a compact look, useful for `text` buttons in a row.
     */
    compact?: boolean | undefined;
    /**
     * Custom text color for flat button, or background color for contained button.
     */
    color?: string | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Icon to display for the `Button`.
     */
    icon?: IconSource | undefined;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Label text of the button.
     */
    children: React.ReactNode;
    /**
     * Make the label text uppercased. Note that this won't work if you pass React elements as children.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility hint for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityHint?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Style of button's inner content.
     * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the button text.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string | undefined;
}, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle"> | Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
     */
    mode?: "text" | "outlined" | "contained" | undefined;
    /**
     * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
     */
    dark?: boolean | undefined;
    /**
     * Use a compact look, useful for `text` buttons in a row.
     */
    compact?: boolean | undefined;
    /**
     * Custom text color for flat button, or background color for contained button.
     */
    color?: string | undefined;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Icon to display for the `Button`.
     */
    icon?: IconSource | undefined;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Label text of the button.
     */
    children: React.ReactNode;
    /**
     * Make the label text uppercased. Note that this won't work if you pass React elements as children.
     */
    uppercase?: boolean | undefined;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility hint for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityHint?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Style of button's inner content.
     * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the button text.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string | undefined;
}, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, accessibilityHint, onPress, onLongPress, style, theme, contentStyle, labelStyle, testID, accessible, ...rest }: Props) => JSX.Element), {}>;
export default _default;
