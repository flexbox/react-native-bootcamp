"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));

var _DataTableHeader2 = _interopRequireDefault(require("./DataTableHeader"));

var _DataTableTitle2 = _interopRequireDefault(require("./DataTableTitle"));

var _DataTablePagination2 = _interopRequireDefault(require("./DataTablePagination"));

var _DataTableRow2 = _interopRequireDefault(require("./DataTableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Data tables allow displaying sets of data.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="large" src="screenshots/data-table.png" />
 *     <figcaption>Data table</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const optionsPerPage = [2, 3, 4];
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState<number>(0);
 *   const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
 *
 *   React.useEffect(() => {
 *     setPage(0);
 *   }, [itemsPerPage]);
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Header>
 *         <DataTable.Title>Dessert</DataTable.Title>
 *         <DataTable.Title numeric>Calories</DataTable.Title>
 *         <DataTable.Title numeric>Fat</DataTable.Title>
 *       </DataTable.Header>
 *
 *       <DataTable.Row>
 *         <DataTable.Cell>Frozen yogurt</DataTable.Cell>
 *         <DataTable.Cell numeric>159</DataTable.Cell>
 *         <DataTable.Cell numeric>6.0</DataTable.Cell>
 *       </DataTable.Row>
 *
 *       <DataTable.Row>
 *         <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
 *         <DataTable.Cell numeric>237</DataTable.Cell>
 *         <DataTable.Cell numeric>8.0</DataTable.Cell>
 *       </DataTable.Row>
 *
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={3}
 *         onPageChange={(page) => setPage(page)}
 *         label="1-2 of 6"
 *         optionsPerPage={optionsPerPage}
 *         itemsPerPage={itemsPerPage}
 *         setItemsPerPage={setItemsPerPage}
 *         showFastPagination
 *         optionsLabel={'Rows per page'}
 *       />
 *     </DataTable>
 *   );
 *}
 *
 * export default MyComponent;
 * ```
 */
const DataTable = ({
  children,
  style,
  ...rest
}) => /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, rest, {
  style: [styles.container, style]
}), children); // @component ./DataTableHeader.tsx


DataTable.Header = _DataTableHeader2.default; // @component ./DataTableTitle.tsx

DataTable.Title = _DataTableTitle2.default; // @component ./DataTableRow.tsx

DataTable.Row = _DataTableRow2.default; // @component ./DataTableCell.tsx

DataTable.Cell = _DataTableCell.default; // @component ./DataTablePagination.tsx

DataTable.Pagination = _DataTablePagination2.default;

const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%'
  }
});

var _default = DataTable;
exports.default = _default;
//# sourceMappingURL=DataTable.js.map