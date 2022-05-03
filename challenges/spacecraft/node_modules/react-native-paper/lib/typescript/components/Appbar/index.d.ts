/// <reference types="react" />
declare const Appbar: (import("react").ComponentType<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
    dark?: boolean | undefined;
    children: import("react").ReactNode;
    theme: ReactNativePaper.Theme;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
    dark?: boolean | undefined;
    children: import("react").ReactNode;
    theme: ReactNativePaper.Theme;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}> & (({ children, dark, style, theme, ...rest }: Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
    dark?: boolean | undefined;
    children: import("react").ReactNode;
    theme: ReactNativePaper.Theme;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}) => JSX.Element), {}>) & {
    Content: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<typeof import("react-native").View> & {
        color?: string | undefined;
        title: import("react").ReactNode;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleRef?: import("react").RefObject<Text> | undefined;
        subtitle?: import("react").ReactNode;
        subtitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        onPress?: (() => void) | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "title" | "pointerEvents" | "color" | "onLayout" | "onPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<typeof import("react-native").View> & {
        color?: string | undefined;
        title: import("react").ReactNode;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleRef?: import("react").RefObject<Text> | undefined;
        subtitle?: import("react").ReactNode;
        subtitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        onPress?: (() => void) | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ color: titleColor, subtitle, subtitleStyle, onPress, style, titleRef, titleStyle, theme, title, ...rest }: import("../../types").$RemoveChildren<typeof import("react-native").View> & {
            color?: string | undefined;
            title: import("react").ReactNode;
            titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            titleRef?: import("react").RefObject<Text> | undefined;
            subtitle?: import("react").ReactNode;
            subtitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            onPress?: (() => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    Action: {
        ({ size, color: iconColor, icon, disabled, onPress, accessibilityLabel, ...rest }: (Pick<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof import("react").RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }> & {
            ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
                borderless?: boolean | undefined;
                background?: Object | undefined;
                centered?: boolean | undefined;
                disabled?: boolean | undefined;
                onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                rippleColor?: string | undefined;
                underlayColor?: string | undefined;
                children: import("react").ReactNode;
                style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
                theme: ReactNativePaper.Theme;
            }): JSX.Element;
            supported: boolean;
        }, {}>> & {
            icon: import("../Icon").IconSource;
            color?: string | undefined;
            size?: number | undefined;
            disabled?: boolean | undefined;
            animated?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
            theme: ReactNativePaper.Theme;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "ref" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> | Pick<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof import("react").RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }> & {
            ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
                borderless?: boolean | undefined;
                background?: Object | undefined;
                centered?: boolean | undefined;
                disabled?: boolean | undefined;
                onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                rippleColor?: string | undefined;
                underlayColor?: string | undefined;
                children: import("react").ReactNode;
                style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
                theme: ReactNativePaper.Theme;
            }): JSX.Element;
            supported: boolean;
        }, {}>> & {
            icon: import("../Icon").IconSource;
            color?: string | undefined;
            size?: number | undefined;
            disabled?: boolean | undefined;
            animated?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
            theme: ReactNativePaper.Theme;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "ref" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        } & {
            children?: import("react").ReactNode;
        }, "style" | "children" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated">) & {
            color?: string | undefined;
            icon: import("../Icon").IconSource;
            size?: number | undefined;
            disabled?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: (() => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
        }): JSX.Element;
        displayName: string;
    };
    BackAction: {
        ({ accessibilityLabel, ...rest }: import("../../types").$Omit<Pick<Pick<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof import("react").RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }> & {
            ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
                borderless?: boolean | undefined;
                background?: Object | undefined;
                centered?: boolean | undefined;
                disabled?: boolean | undefined;
                onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                rippleColor?: string | undefined;
                underlayColor?: string | undefined;
                children: import("react").ReactNode;
                style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
                theme: ReactNativePaper.Theme;
            }): JSX.Element;
            supported: boolean;
        }, {}>> & {
            icon: import("../Icon").IconSource;
            color?: string | undefined;
            size?: number | undefined;
            disabled?: boolean | undefined;
            animated?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
            theme: ReactNativePaper.Theme;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "ref" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            color?: string | undefined;
            icon: import("../Icon").IconSource;
            size?: number | undefined;
            disabled?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: (() => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> | Pick<Pick<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof import("react").RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            theme: ReactNativePaper.Theme;
        }> & {
            ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
                borderless?: boolean | undefined;
                background?: Object | undefined;
                centered?: boolean | undefined;
                disabled?: boolean | undefined;
                onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
                rippleColor?: string | undefined;
                underlayColor?: string | undefined;
                children: import("react").ReactNode;
                style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
                theme: ReactNativePaper.Theme;
            }): JSX.Element;
            supported: boolean;
        }, {}>> & {
            icon: import("../Icon").IconSource;
            color?: string | undefined;
            size?: number | undefined;
            disabled?: boolean | undefined;
            animated?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
            theme: ReactNativePaper.Theme;
        }, "style" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "ref" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        } & {
            children?: import("react").ReactNode;
        }, "style" | "children" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
            color?: string | undefined;
            icon: import("../Icon").IconSource;
            size?: number | undefined;
            disabled?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: (() => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            ref?: import("react").RefObject<import("react-native").TouchableWithoutFeedback> | undefined;
        }, "style" | "children" | "color" | "size" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated">, "icon"> & {
            color?: string | undefined;
            size?: number | undefined;
            disabled?: boolean | undefined;
            accessibilityLabel?: string | undefined;
            onPress?: (() => void) | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Header: import("react").ComponentType<(Pick<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        dark?: boolean | undefined;
        statusBarHeight?: number | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View> | "statusBarHeight"> | Pick<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: import("react").ReactNode;
    } & {
        dark?: boolean | undefined;
        statusBarHeight?: number | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View> | "statusBarHeight">) & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<((Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | (Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    } & {
        children?: import("react").ReactNode;
    })) & {
        dark?: boolean | undefined;
        statusBarHeight?: number | undefined;
        children: import("react").ReactNode;
        theme: ReactNativePaper.Theme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }> & {
        (props: ((Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
            dark?: boolean | undefined;
            children: import("react").ReactNode;
            theme: ReactNativePaper.Theme;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | (Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
            dark?: boolean | undefined;
            children: import("react").ReactNode;
            theme: ReactNativePaper.Theme;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        }, keyof import("react-native").ViewProps | "dark" | keyof import("react").RefAttributes<import("react-native").View>> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        } & {
            children?: import("react").ReactNode;
        })) & {
            dark?: boolean | undefined;
            statusBarHeight?: number | undefined;
            children: import("react").ReactNode;
            theme: ReactNativePaper.Theme;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        }): JSX.Element;
        displayName: string;
    }, {}>;
};
export default Appbar;
