import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconSource } from '../Icon';
declare type Props = {
    /**
     * Title text for the `MenuItem`.
     */
    title: React.ReactNode;
    /**
     * Icon to display for the `MenuItem`.
     */
    icon?: IconSource;
    /**
     * Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * @optional
     */
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * Accessibility label for the Touchable. This is read by the screen reader when the user taps the component.
     */
    accessibilityLabel?: string;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "title" | "onPress" | "testID" | "accessibilityLabel" | "icon" | "disabled" | "titleStyle" | "contentStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ icon, title, disabled, onPress, style, contentStyle, testID, titleStyle, accessibilityLabel, theme, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
