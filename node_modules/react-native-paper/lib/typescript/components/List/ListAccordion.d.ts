import * as React from 'react';
import { ViewStyle, StyleProp, TextStyle, GestureResponderEvent } from 'react-native';
declare type Props = {
    /**
     * Title text for the list accordion.
     */
    title: React.ReactNode;
    /**
     * Description text for the list accordion.
     */
    description?: React.ReactNode;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        isExpanded: boolean;
    }) => React.ReactNode;
    /**
     * Whether the accordion is expanded
     * If this prop is provided, the accordion will behave as a "controlled component".
     * You'll need to update this prop when you want to toggle the component or on `onPress`.
     */
    expanded?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
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
     * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
     */
    id?: string | number;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "children" | "onPress" | "onLongPress" | "testID" | "accessibilityLabel" | "left" | "right" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "id" | "expanded"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ left, right, title, description, children, theme, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, style, id, testID, onPress, onLongPress, expanded: expandedProp, accessibilityLabel, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ left, right, title, description, children, theme, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, style, id, testID, onPress, onLongPress, expanded: expandedProp, accessibilityLabel, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "children" | "onPress" | "onLongPress" | "testID" | "accessibilityLabel" | "left" | "right" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "id" | "expanded"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ left, right, title, description, children, theme, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, style, id, testID, onPress, onLongPress, expanded: expandedProp, accessibilityLabel, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ left, right, title, description, children, theme, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, style, id, testID, onPress, onLongPress, expanded: expandedProp, accessibilityLabel, }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
