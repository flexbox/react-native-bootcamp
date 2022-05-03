import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { IconSource } from '../Icon';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * The label text of the item.
     */
    label: string;
    /**
     * Icon to display for the `DrawerItem`.
     */
    icon?: IconSource;
    /**
     * Whether to highlight the drawer item as active.
     */
    active?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Callback which returns a React element to display on the right side. For instance a Badge.
     */
    right?: (props: {
        color: string;
    }) => React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * The label text of the item.
     */
    label: string;
    /**
     * Icon to display for the `DrawerItem`.
     */
    icon?: IconSource | undefined;
    /**
     * Whether to highlight the drawer item as active.
     */
    active?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Callback which returns a React element to display on the right side. For instance a Badge.
     */
    right?: ((props: {
        color: string;
    }) => React.ReactNode) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "label" | "onPress" | "icon" | "right" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "active"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * The label text of the item.
     */
    label: string;
    /**
     * Icon to display for the `DrawerItem`.
     */
    icon?: IconSource | undefined;
    /**
     * Whether to highlight the drawer item as active.
     */
    active?: boolean | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Callback which returns a React element to display on the right side. For instance a Badge.
     */
    right?: ((props: {
        color: string;
    }) => React.ReactNode) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ icon, label, active, theme, style, onPress, accessibilityLabel, right, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
