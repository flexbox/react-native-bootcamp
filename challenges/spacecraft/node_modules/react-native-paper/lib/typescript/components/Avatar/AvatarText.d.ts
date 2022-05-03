import * as React from 'react';
import { View, ViewStyle, StyleProp, TextStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Initials to show as the text in the `Avatar`.
     */
    label: string;
    /**
     * Size of the avatar.
     */
    size?: number;
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Style for text container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the title.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Initials to show as the text in the `Avatar`.
     */
    label: string;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Style for text container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the title.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "label" | "color" | "size" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "labelStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Initials to show as the text in the `Avatar`.
     */
    label: string;
    /**
     * Size of the avatar.
     */
    size?: number | undefined;
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Style for text container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the title.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ label, size, style, theme, labelStyle, color: customColor, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
