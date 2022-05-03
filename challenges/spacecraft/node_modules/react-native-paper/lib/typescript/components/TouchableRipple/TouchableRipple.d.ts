import * as React from 'react';
import { TouchableWithoutFeedback, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof TouchableWithoutFeedback> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/touchablenativefeedback#background
     */
    background?: Object;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean | undefined;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/touchablenativefeedback#background
     */
    background?: Object | undefined;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean | undefined;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean | undefined;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string | undefined;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string | undefined;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof React.RefAttributes<TouchableWithoutFeedback>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean | undefined;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/touchablenativefeedback#background
     */
    background?: Object | undefined;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean | undefined;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean | undefined;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: string | undefined;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string | undefined;
    /**
     * Content of the `TouchableRipple`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: Props): JSX.Element;
    /**
     * Whether ripple effect is supported.
     */
    supported: boolean;
}, {}>;
export default _default;
