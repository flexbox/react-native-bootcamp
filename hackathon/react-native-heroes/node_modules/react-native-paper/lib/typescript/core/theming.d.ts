/// <reference types="react" />
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: ReactNativePaper.Theme | undefined;
}>, withTheme: <Props extends {
    theme: ReactNativePaper.Theme;
}, C>(WrappedComponent: (import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C)) => (import("react").ComponentClass<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>) | (import("react").FunctionComponent<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>), useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined) => ReactNativePaper.Theme;
