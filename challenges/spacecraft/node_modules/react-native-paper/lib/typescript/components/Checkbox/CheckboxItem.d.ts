import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
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
     * Label to be displayed on the item.
     */
    label: string;
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
     * Additional styles for container View.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Label element.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
    /**
     * Checkbox control position.
     */
    position?: 'leading' | 'trailing';
    /**
     * Whether `<Checkbox.Android />` or `<Checkbox.IOS />` should be used.
     * Left undefined `<Checkbox />` will be used.
     */
    mode?: 'android' | 'ios';
};
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "position" | "mode" | "labelStyle" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, disabled, ...props }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const CheckboxItemWithTheme: React.ComponentType<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "position" | "mode" | "labelStyle" | "disabled" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, disabled, ...props }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { CheckboxItemWithTheme as CheckboxItem };
