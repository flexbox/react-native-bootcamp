function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';

/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
const ListSubheader = _ref => {
  let {
    style,
    theme,
    ...rest
  } = _ref;
  const {
    colors,
    fonts
  } = theme;
  const font = fonts.medium;
  const textColor = color(colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(Text, _extends({
    numberOfLines: 1
  }, rest, {
    style: [styles.container, {
      color: textColor,
      ...font
    }, style]
  }));
};

ListSubheader.displayName = 'List.Subheader';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13
  }
});
export default withTheme(ListSubheader);
//# sourceMappingURL=ListSubheader.js.map