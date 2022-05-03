import * as React from 'react';
import { StyleProp, TouchableWithoutFeedback, ViewStyle, TextStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: 'ascending' | 'descending';
    /**
     * The number of lines to show.
     */
    numberOfLines?: number;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
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
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DataTableTitle: {
    ({ numeric, children, onPress, sortDirection, theme, textStyle, style, numberOfLines, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean | undefined;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: "ascending" | "descending" | undefined;
    /**
     * The number of lines to show.
     */
    numberOfLines?: number | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "numberOfLines" | keyof import("react-native").TouchableWithoutFeedbackProps | keyof React.RefAttributes<TouchableWithoutFeedback> | "numeric" | "textStyle" | "sortDirection"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean | undefined;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: "ascending" | "descending" | undefined;
    /**
     * The number of lines to show.
     */
    numberOfLines?: number | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ numeric, children, onPress, sortDirection, theme, textStyle, style, numberOfLines, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { DataTableTitle };
