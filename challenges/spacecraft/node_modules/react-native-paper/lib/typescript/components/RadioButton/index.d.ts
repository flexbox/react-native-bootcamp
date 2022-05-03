/// <reference types="react" />
declare const RadioButton: (import("react").ComponentType<Pick<import("./RadioButton").Props, "color" | "onPress" | "testID" | "value" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("./RadioButton").Props> & ((props: import("./RadioButton").Props) => JSX.Element), {}>) & {
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: import("react").ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Android: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "value" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ disabled, onPress, theme, value, status, testID, ...rest }: import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
            value: string;
            status?: "checked" | "unchecked" | undefined;
            disabled?: boolean | undefined;
            onPress?: ((param?: any) => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    IOS: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "value" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ disabled, onPress, theme, status, value, testID, ...rest }: import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
            value: string;
            status?: "checked" | "unchecked" | undefined;
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    Item: import("react").ComponentType<Pick<import("./RadioButtonItem").Props, "label" | "style" | "color" | "onPress" | "testID" | "accessibilityLabel" | "position" | "value" | "mode" | "labelStyle" | "disabled" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("./RadioButtonItem").Props> & {
        ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, position, }: import("./RadioButtonItem").Props): JSX.Element;
        displayName: string;
    }, {}>;
};
export default RadioButton;
