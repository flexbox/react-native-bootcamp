import * as React from 'react';
import { StyleProp, Switch as NativeSwitch, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof NativeSwitch> & {
    /**
     * Disable toggling the switch.
     */
    disabled?: boolean;
    /**
     * Value of the switch, true means 'on', false means 'off'.
     */
    value?: boolean;
    /**
     * Custom color for switch.
     */
    color?: string;
    /**
     * Callback called with the new value when it changes.
     */
    onValueChange?: Function;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").SwitchProps & React.RefAttributes<NativeSwitch> & {
    /**
     * Disable toggling the switch.
     */
    disabled?: boolean | undefined;
    /**
     * Value of the switch, true means 'on', false means 'off'.
     */
    value?: boolean | undefined;
    /**
     * Custom color for switch.
     */
    color?: string | undefined;
    /**
     * Callback called with the new value when it changes.
     */
    onValueChange?: Function | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "color" | keyof import("react-native").SwitchProps | keyof React.RefAttributes<NativeSwitch>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").SwitchProps & React.RefAttributes<NativeSwitch> & {
    /**
     * Disable toggling the switch.
     */
    disabled?: boolean | undefined;
    /**
     * Value of the switch, true means 'on', false means 'off'.
     */
    value?: boolean | undefined;
    /**
     * Custom color for switch.
     */
    color?: string | undefined;
    /**
     * Callback called with the new value when it changes.
     */
    onValueChange?: Function | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ value, disabled, onValueChange, color, theme, ...rest }: Props) => JSX.Element), {}>;
export default _default;
