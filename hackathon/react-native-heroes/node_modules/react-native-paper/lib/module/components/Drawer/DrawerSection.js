function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import Divider from '../Divider';
import { withTheme } from '../../core/theming';

/**
 * A component to group content inside a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-section.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [active, setActive] = React.useState('');
 *
 *
 *   return (
 *     <Drawer.Section title="Some title">
 *       <Drawer.Item
 *         label="First Item"
 *         active={active === 'first'}
 *         onPress={() => setActive('first')}
 *       />
 *       <Drawer.Item
 *         label="Second Item"
 *         active={active === 'second'}
 *         onPress={() => setActive('second')}
 *       />
 *     </Drawer.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DrawerSection = ({
  children,
  title,
  theme,
  style,
  ...rest
}) => {
  const {
    colors,
    fonts
  } = theme;
  const titleColor = color(colors.text).alpha(0.54).rgb().string();
  const font = fonts.medium;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), title && /*#__PURE__*/React.createElement(View, {
    style: styles.titleContainer
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [{
      color: titleColor,
      ...font
    }, styles.title]
  }, title)), children, /*#__PURE__*/React.createElement(Divider, {
    style: styles.divider
  }));
};

DrawerSection.displayName = 'Drawer.Section';
const styles = StyleSheet.create({
  container: {
    marginBottom: 4
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center'
  },
  title: {
    marginLeft: 16
  },
  divider: {
    marginTop: 4
  }
});
export default withTheme(DrawerSection);
//# sourceMappingURL=DrawerSection.js.map