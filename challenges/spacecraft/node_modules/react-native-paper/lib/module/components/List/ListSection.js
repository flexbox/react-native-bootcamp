function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ListSubheader from './ListSubheader';
import { withTheme } from '../../core/theming';

/**
 * A component used to group list items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/list-section.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Section>
 *     <List.Subheader>Some title</List.Subheader>
 *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
 *     <List.Item
 *       title="Second Item"
 *       left={() => <List.Icon color="#000" icon="folder" />}
 *     />
 *   </List.Section>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListSection = _ref => {
  let {
    children,
    title,
    titleStyle,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, style]
  }), title ? /*#__PURE__*/React.createElement(ListSubheader, {
    style: titleStyle
  }, title) : null, children);
};

ListSection.displayName = 'List.Section';
const styles = StyleSheet.create({
  container: {
    marginVertical: 8
  }
});
export default withTheme(ListSection);
//# sourceMappingURL=ListSection.js.map