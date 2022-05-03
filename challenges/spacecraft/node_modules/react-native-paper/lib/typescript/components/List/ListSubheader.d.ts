import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Text from '../Typography/Text';
declare type Props = React.ComponentProps<typeof Text> & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
};
declare const _default: React.ComponentType<(Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>; /**
     * @optional
     */
    theme: ReactNativePaper.Theme; /**
     * Style that is passed to Text element.
     */
} & React.RefAttributes<{}>, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>> | Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>; /**
     * @optional
     */
    theme: ReactNativePaper.Theme; /**
     * Style that is passed to Text element.
     */
} & React.RefAttributes<{}>, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>>) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, theme, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
