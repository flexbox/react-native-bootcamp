import * as React from 'react';
import { BackgroundPropType, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
declare type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    borderless?: boolean;
    background?: BackgroundPropType;
    disabled?: boolean;
    onPress?: () => void | null;
    rippleColor?: string;
    underlayColor?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & {
    borderless?: boolean | undefined;
    background?: BackgroundPropType | undefined;
    disabled?: boolean | undefined;
    onPress?: (() => void | null) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & {
    borderless?: boolean | undefined;
    background?: BackgroundPropType | undefined;
    disabled?: boolean | undefined;
    onPress?: (() => void | null) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}, {}>;
export default _default;
