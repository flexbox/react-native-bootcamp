import * as React from 'react';
import { View, ViewStyle, StyleProp, Animated } from 'react-native';
import Surface from './Surface';
import Button from './Button';
import { IconSource } from './Icon';
import type { $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: string;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions: Array<{
        label: string;
    } & Omit<React.ComponentProps<typeof Button>, 'children'>>;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback;
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
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: string;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource | undefined;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions: ({
        label: string;
    } & Omit<((Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
    }>, "children">)[];
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback | undefined;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback | undefined;
}, "style" | "children" | "pointerEvents" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "visible" | "ref" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "contentStyle" | "actions" | "onShowAnimationFinished" | "onHideAnimationFinished"> & {
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
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: string;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource | undefined;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions: ({
        label: string;
    } & Omit<((Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
        icon?: IconSource | undefined;
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
    }>, "children">)[];
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback | undefined;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback | undefined;
}> & (({ visible, icon, children, actions, contentStyle, style, theme, onShowAnimationFinished, onHideAnimationFinished, ...rest }: Props) => JSX.Element), {}>;
export default _default;
