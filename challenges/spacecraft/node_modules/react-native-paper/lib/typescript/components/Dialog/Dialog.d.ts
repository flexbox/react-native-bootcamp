import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Determines whether clicking outside the dialog dismiss it.
     */
    dismissable?: boolean;
    /**
     * Callback that is called when the user dismisses the dialog.
     */
    onDismiss?: () => void;
    /**
     * Determines Whether the dialog is visible.
     */
    visible: boolean;
    /**
     * Content of the `Dialog`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "children" | "visible" | "onDismiss" | "dismissable"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Title: React.ComponentType<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, keyof import("react-native").TextProps> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    ScrollArea: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}, {}>;
export default _default;
