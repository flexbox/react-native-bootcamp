import * as React from 'react';
import { Animated, StyleProp, ViewStyle, View } from 'react-native';
import Button from './Button';
import Surface from './Surface';
export declare type SnackbarProps = React.ComponentProps<typeof Surface> & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: Omit<React.ComponentProps<typeof Button>, 'children'> & {
        label: string;
    };
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: (Omit<((Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
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
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle">) & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
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
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle">) & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "children"> & {
        label: string;
    }) | undefined;
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number | undefined;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "visible" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "onDismiss" | "action" | "duration" | "wrapperStyle"> | Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: (Omit<((Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
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
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle">) & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<(Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: false | import("react-native").RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle> | Animated.WithAnimatedArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>> | readonly (ViewStyle | import("react-native").Falsy | import("react-native").RegisteredStyle<ViewStyle>)[]> | null | undefined;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
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
        mode?: "text" | "outlined" | "contained" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("./Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: (() => void) | undefined;
        onLongPress?: (() => void) | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "color" | "onPress" | "onLongPress" | "icon" | keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "mode" | "uppercase" | "labelStyle" | "disabled" | "compact" | "loading" | "contentStyle">) & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "children"> & {
        label: string;
    }) | undefined;
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number | undefined;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "visible" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "onDismiss" | "action" | "duration" | "wrapperStyle">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<SnackbarProps> & {
    ({ visible, action, duration, onDismiss, children, wrapperStyle, style, theme, ...rest }: SnackbarProps): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}, {}>;
export default _default;
