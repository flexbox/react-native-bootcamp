/// <reference types="react" />
declare const ToggleButton: (import("react").ComponentType<Pick<{
    icon: import("../Icon").IconSource;
    size?: number | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    onPress?: ((value?: string | import("react-native").GestureResponderEvent | undefined) => void) | undefined;
    value?: string | undefined;
    status?: "checked" | "unchecked" | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "color" | "size" | "onPress" | "accessibilityLabel" | "icon" | "value" | "disabled" | "status"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<{
    icon: import("../Icon").IconSource;
    size?: number | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    onPress?: ((value?: string | import("react-native").GestureResponderEvent | undefined) => void) | undefined;
    value?: string | undefined;
    status?: "checked" | "unchecked" | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    theme: ReactNativePaper.Theme;
}> & (({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: {
    icon: import("../Icon").IconSource;
    size?: number | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    onPress?: ((value?: string | import("react-native").GestureResponderEvent | undefined) => void) | undefined;
    value?: string | undefined;
    status?: "checked" | "unchecked" | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    theme: ReactNativePaper.Theme;
}) => JSX.Element), {}>) & {
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void | null;
            value: string | null;
            children: import("react").ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: import("react").ReactNode;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
};
export default ToggleButton;
