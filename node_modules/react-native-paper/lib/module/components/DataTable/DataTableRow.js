function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';

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
const DataTableRow = ({
  onPress,
  style,
  theme,
  children,
  pointerEvents,
  ...rest
}) => {
  const borderBottomColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    onPress: onPress,
    style: [styles.container, {
      borderBottomColor
    }, style]
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.content,
    pointerEvents: pointerEvents
  }, children));
};

DataTableRow.displayName = 'DataTable.Row';
const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});
export default withTheme(DataTableRow); // @component-docs ignore-next-line

export { DataTableRow };
//# sourceMappingURL=DataTableRow.js.map