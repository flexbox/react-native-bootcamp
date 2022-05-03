import * as React from 'react';
declare type Props = {
    /**
     * Status of checkbox.
     */
    status: 'checked' | 'unchecked' | 'indeterminate';
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Custom color for unchecked checkbox.
     */
    uncheckedColor?: string;
    /**
     * Custom color for checkbox.
     */
    color?: string;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & ((props: Props) => JSX.Element)) | (React.FunctionComponent<Props> & ((props: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & ((props: Props) => JSX.Element)) | (React.FunctionComponent<Props> & ((props: Props) => JSX.Element)), {}>);
export default _default;
declare const CheckboxWithTheme: (React.ComponentClass<Pick<Props, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & ((props: Props) => JSX.Element)) | (React.FunctionComponent<Props> & ((props: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "color" | "onPress" | "testID" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & ((props: Props) => JSX.Element)) | (React.FunctionComponent<Props> & ((props: Props) => JSX.Element)), {}>);
export { CheckboxWithTheme as Checkbox };
