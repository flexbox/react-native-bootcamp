/// <reference types="react" />
declare const Checkbox: (import("react").ComponentClass<Pick<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, any> & ((props: {
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}) => JSX.Element)) | (import("react").FunctionComponent<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}> & ((props: {
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}) => JSX.Element)), {}> & {
    Item: (import("react").ComponentClass<Pick<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, "label" | "style" | "color" | "onPress" | "testID" | "position" | "labelStyle" | "disabled" | "mode" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, any> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, "label" | "style" | "color" | "onPress" | "testID" | "position" | "labelStyle" | "disabled" | "mode" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, any> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Android: (import("react").ComponentClass<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    IOS: (import("react").ComponentClass<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}) | (import("react").FunctionComponent<Pick<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}, any> & ((props: {
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}) => JSX.Element)) | (import("react").FunctionComponent<{
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}> & ((props: {
    status: "checked" | "unchecked" | "indeterminate";
    disabled?: boolean | undefined;
    onPress?: (() => void) | undefined;
    uncheckedColor?: string | undefined;
    color?: string | undefined;
    theme: ReactNativePaper.Theme;
    testID?: string | undefined;
}) => JSX.Element)), {}> & {
    Item: (import("react").ComponentClass<Pick<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, "label" | "style" | "color" | "onPress" | "testID" | "position" | "labelStyle" | "disabled" | "mode" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, any> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, "label" | "style" | "color" | "onPress" | "testID" | "position" | "labelStyle" | "disabled" | "mode" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }, any> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<{
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        label: string;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        position?: "leading" | "trailing" | undefined;
        mode?: "ios" | "android" | undefined;
    }> & {
        ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, ...props }: {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            label: string;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            position?: "leading" | "trailing" | undefined;
            mode?: "ios" | "android" | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Android: (import("react").ComponentClass<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, theme, disabled, onPress, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            uncheckedColor?: string | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    IOS: (import("react").ComponentClass<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (import("react").FunctionComponent<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "status"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (import("react").FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        status: "checked" | "unchecked" | "indeterminate";
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        color?: string | undefined;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ status, disabled, onPress, theme, testID, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | import("react").PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & import("react").RefAttributes<import("react-native").TouchableWithoutFeedback> & {
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
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            status: "checked" | "unchecked" | "indeterminate";
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            color?: string | undefined;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>);
});
export default Checkbox;
