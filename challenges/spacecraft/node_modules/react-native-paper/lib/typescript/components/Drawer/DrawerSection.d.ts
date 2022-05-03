import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string | undefined;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "title" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string | undefined;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ children, title, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
