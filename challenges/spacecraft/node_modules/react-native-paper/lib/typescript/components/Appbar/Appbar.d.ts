import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = Partial<React.ComponentPropsWithRef<typeof View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
};
export declare const DEFAULT_APPBAR_HEIGHT = 56;
declare const _default: React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}> & (({ children, dark, style, theme, ...rest }: Props) => JSX.Element), {}>;
export default _default;
declare const AppbarWithTheme: React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}> & (({ children, dark, style, theme, ...rest }: Props) => JSX.Element), {}>;
export { AppbarWithTheme as Appbar };
