import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Text from './Text';
declare type Props = React.ComponentProps<typeof Text> & {
    alpha: number;
    family: 'regular' | 'medium' | 'light' | 'thin';
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<(Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
} & React.RefAttributes<{}>, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    alpha: number;
    family: "light" | "regular" | "medium" | "thin";
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<{}> | "alpha" | "family"> | Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
} & React.RefAttributes<{}>, keyof import("react-native").TextProps | keyof React.RefAttributes<{}>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    alpha: number;
    family: "light" | "regular" | "medium" | "thin";
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TextProps | keyof React.RefAttributes<{}> | "alpha" | "family">) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & (({ theme, alpha, family, style, ...rest }: Props) => JSX.Element), {}>;
export default _default;
