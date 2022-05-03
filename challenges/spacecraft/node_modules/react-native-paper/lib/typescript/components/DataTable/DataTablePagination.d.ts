import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & PaginationControlsProps & PaginationDropdownProps & {
    /**
     * Label text to display which indicates current pagination.
     */
    label?: React.ReactNode;
    /**
     * AccessibilityLabel for `label`.
     */
    accessibilityLabel?: string;
    /**
     * Label text for select page dropdown to display.
     */
    selectPageDropdownLabel?: React.ReactNode;
    /**
     * AccessibilityLabel for `selectPageDropdownLabel`.
     */
    selectPageDropdownAccessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type PaginationDropdownProps = {
    /**
     * The current number of rows per page.
     */
    numberOfItemsPerPage?: number;
    /**
     * Options for a number of rows per page to choose from.
     */
    numberOfItemsPerPageList?: Array<number>;
    /**
     * The function to set the number of rows per page.
     */
    onItemsPerPageChange?: (numberOfItemsPerPage: number) => void;
};
declare type PaginationControlsProps = {
    /**
     * The currently visible page (starting with 0).
     */
    page: number;
    /**
     * The total number of pages.
     */
    numberOfPages: number;
    /**
     * Function to execute on page change.
     */
    onPageChange: (page: number) => void;
    /**
     * Whether to show fast forward and fast rewind buttons in pagination. False by default.
     */
    showFastPaginationControls?: boolean;
};
/**
 * A component to show pagination for data table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-pagination.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const numberOfItemsPerPageList = [2, 3, 4];
 *
 * const items = [
 *   {
 *     key: 1,
 *     name: 'Page 1',
 *   },
 *   {
 *     key: 2,
 *     name: 'Page 2',
 *   },
 *   {
 *     key: 3,
 *     name: 'Page 3',
 *   },
 * ];
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState(0);
 *   const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
 *   const from = page * numberOfItemsPerPage;
 *   const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
 *
 *   React.useEffect(() => {
 *      setPage(0);
 *   }, [numberOfItemsPerPage]);
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
 *         onPageChange={page => setPage(page)}
 *         label={`${from + 1}-${to} of ${items.length}`}
 *         showFastPaginationControls
 *         numberOfItemsPerPageList={numberOfItemsPerPageList}
 *         numberOfItemsPerPage={numberOfItemsPerPage}
 *         onItemsPerPageChange={onItemsPerPageChange}
 *         selectPageDropdownLabel={'Rows per page'}
 *       />
 *     </DataTable>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DataTablePagination: {
    ({ label, accessibilityLabel, page, numberOfPages, onPageChange, style, theme, showFastPaginationControls, numberOfItemsPerPageList, numberOfItemsPerPage, onItemsPerPageChange, selectPageDropdownLabel, selectPageDropdownAccessibilityLabel, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & PaginationControlsProps & PaginationDropdownProps & {
    /**
     * Label text to display which indicates current pagination.
     */
    label?: React.ReactNode;
    /**
     * AccessibilityLabel for `label`.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Label text for select page dropdown to display.
     */
    selectPageDropdownLabel?: React.ReactNode;
    /**
     * AccessibilityLabel for `selectPageDropdownLabel`.
     */
    selectPageDropdownAccessibilityLabel?: string | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "label" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "selectPageDropdownLabel" | "selectPageDropdownAccessibilityLabel" | keyof PaginationControlsProps | keyof PaginationDropdownProps> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & PaginationControlsProps & PaginationDropdownProps & {
    /**
     * Label text to display which indicates current pagination.
     */
    label?: React.ReactNode;
    /**
     * AccessibilityLabel for `label`.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Label text for select page dropdown to display.
     */
    selectPageDropdownLabel?: React.ReactNode;
    /**
     * AccessibilityLabel for `selectPageDropdownLabel`.
     */
    selectPageDropdownAccessibilityLabel?: string | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & {
    ({ label, accessibilityLabel, page, numberOfPages, onPageChange, style, theme, showFastPaginationControls, numberOfItemsPerPageList, numberOfItemsPerPage, onItemsPerPageChange, selectPageDropdownLabel, selectPageDropdownAccessibilityLabel, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { DataTablePagination };
