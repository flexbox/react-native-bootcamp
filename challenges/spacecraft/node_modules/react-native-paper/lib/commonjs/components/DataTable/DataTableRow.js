"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DataTableRow = void 0;

var React = _interopRequireWildcard(require("react"));

var _color = _interopRequireDefault(require("color"));

var _reactNative = require("react-native");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _colors = require("../../styles/colors");

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
const DataTableRow = _ref => {
  let {
    onPress,
    style,
    theme,
    children,
    pointerEvents,
    ...rest
  } = _ref;
  const borderBottomColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    onPress: onPress,
    style: [styles.container, {
      borderBottomColor
    }, style]
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content,
    pointerEvents: pointerEvents
  }, children));
};

exports.DataTableRow = DataTableRow;
DataTableRow.displayName = 'DataTable.Row';

const styles = _reactNative.StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});

var _default = (0, _theming.withTheme)(DataTableRow); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=DataTableRow.js.map