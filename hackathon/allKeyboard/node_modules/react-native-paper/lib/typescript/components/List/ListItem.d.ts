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
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "left" | "right" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "titleEllipsizeMode" | "descriptionEllipsizeMode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "left" | "right" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "titleEllipsizeMode" | "descriptionEllipsizeMode"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
