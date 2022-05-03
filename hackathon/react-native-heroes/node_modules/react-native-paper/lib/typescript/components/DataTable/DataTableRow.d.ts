import * as React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Content of the `DataTableRow`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * `pointerEvents` passed to the `View` container, which is wrapping children within `TouchableRipple`.
     */
    pointerEvents?: ViewProps['pointerEvents'];
};
/**
 * A component to show a single row inside of a table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-row-cell.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *      <DataTable.Row>
 *        <DataTable.Cell numeric>1</DataTable.Cell>
 *        <DataTable.Cell numeric>2</DataTable.Cell>
 *        <DataTable.Cell numeric>3</DataTable.Cell>
 *        <DataTable.Cell numeric>4</DataTable.Cell>
 *      </DataTable.Row>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DataTableRow: {
    ({ onPress, style, theme, children, pointerEvents, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ onPress, style, theme, children, pointerEvents, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ onPress, style, theme, children, pointerEvents, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "pointerEvents" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "hitSlop" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "pressRetentionOffset" | "touchSoundDisabled" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ onPress, style, theme, children, pointerEvents, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ onPress, style, theme, children, pointerEvents, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
export { DataTableRow };
