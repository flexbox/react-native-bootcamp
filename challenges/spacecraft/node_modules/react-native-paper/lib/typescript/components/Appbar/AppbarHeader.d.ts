import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Appbar } from './Appbar';
declare type Props = React.ComponentProps<typeof Appbar> & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentType<(Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "statusBarHeight"> | Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "statusBarHeight">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    (props: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const AppbarHeaderWithTheme: React.ComponentType<(Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "statusBarHeight"> | Pick<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    dark?: boolean | undefined;
    children: React.ReactNode;
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Whether the background color is a dark color. A dark header will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to disable the default behaviour, and customize the height.
     */
    statusBarHeight?: number | undefined;
    /**
     * Content of the header.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
}, keyof import("react-native").ViewProps | "dark" | keyof React.RefAttributes<View> | "statusBarHeight">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    (props: Props): JSX.Element;
    displayName: string;
}, {}>;
export { AppbarHeaderWithTheme as AppbarHeader };
