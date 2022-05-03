import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Whether to show the indicator or hide it.
     */
    animating?: boolean;
    /**
     * The color of the spinner.
     */
    color?: string;
    /**
     * Size of the indicator.
     */
    size?: 'small' | 'large' | number;
    /**
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Whether to show the indicator or hide it.
     */
    animating?: boolean | undefined;
    /**
     * The color of the spinner.
     */
    color?: string | undefined;
    /**
     * Size of the indicator.
     */
    size?: number | "small" | "large" | undefined;
    /**
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "color" | "size" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "animating" | "hidesWhenStopped"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Whether to show the indicator or hide it.
     */
    animating?: boolean | undefined;
    /**
     * The color of the spinner.
     */
    color?: string | undefined;
    /**
     * Size of the indicator.
     */
    size?: number | "small" | "large" | undefined;
    /**
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ animating, color: indicatorColor, hidesWhenStopped, size: indicatorSize, style, theme, ...rest }: Props) => JSX.Element), {}>;
export default _default;
