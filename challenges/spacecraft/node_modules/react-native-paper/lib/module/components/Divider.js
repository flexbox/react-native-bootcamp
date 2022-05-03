function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../core/theming';
import { black, white } from '../styles/colors';

/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * <div class="screenshots">
 *  <figure>
 *    <img class="medium" src="screenshots/divider.png" />
 *  </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Divider = _ref => {
  let {
    inset,
    style,
    theme,
    ...rest
  } = _ref;
  const {
    dark: isDarkTheme
  } = theme;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [isDarkTheme ? styles.dark : styles.light, inset && styles.inset, style]
  }));
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: color(black).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth
  },
  dark: {
    backgroundColor: color(white).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth
  },
  inset: {
    marginLeft: 72
  }
});
export default withTheme(Divider);
//# sourceMappingURL=Divider.js.map