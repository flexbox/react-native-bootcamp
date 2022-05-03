/// <reference types="react" />
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: ReactNativePaper.Theme | undefined;
}>, withTheme: <Props extends {
    theme: ReactNativePaper.Theme;
}, C>(WrappedComponent: import("react").ComponentType<Props> & C) => import("react").ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Props> & C, {}>, useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined) => ReactNativePaper.Theme;
