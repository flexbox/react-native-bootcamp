import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import type { $RemoveChildren, EllipsizeProp } from '../../types';
declare type Title = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
declare type Description = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
        style: {
            marginLeft: number;
            marginRight: number;
            marginVertical?: number;
        };
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        color: string;
        style?: {
            marginRight: number;
            marginVertical?: number;
        };
    }) => React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof React.RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }): JSX.Element;
    supported: boolean;
}, {}>> & {
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        color: string;
        style: {
            marginLeft: number;
            marginRight: number;
            marginVertical?: number | undefined;
        };
    }) => React.ReactNode) | undefined;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        color: string;
        style?: {
            marginRight: number;
            marginVertical?: number | undefined;
        } | undefined;
    }) => React.ReactNode) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number | undefined;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp | undefined;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}, "style" | "title" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "left" | "right" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "titleEllipsizeMode" | "descriptionEllipsizeMode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, keyof import("react-native").TouchableWithoutFeedbackProps | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | keyof React.RefAttributes<import("react-native").TouchableWithoutFeedback>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }): JSX.Element;
    supported: boolean;
}, {}>> & {
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        color: string;
        style: {
            marginLeft: number;
            marginRight: number;
            marginVertical?: number | undefined;
        };
    }) => React.ReactNode) | undefined;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        color: string;
        style?: {
            marginRight: number;
            marginVertical?: number | undefined;
        } | undefined;
    }) => React.ReactNode) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number | undefined;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp | undefined;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
