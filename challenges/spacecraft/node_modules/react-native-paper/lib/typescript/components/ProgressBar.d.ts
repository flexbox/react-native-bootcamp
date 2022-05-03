import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Progress value (between 0 and 1).
     */
    progress?: number;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Progress value (between 0 and 1).
     */
    progress?: number | undefined;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string | undefined;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean | undefined;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "progress" | "color" | "visible" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "indeterminate"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Progress value (between 0 and 1).
     */
    progress?: number | undefined;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string | undefined;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean | undefined;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ color, indeterminate, style, progress, visible, theme, ...rest }: Props) => JSX.Element), {}>;
export default _default;
