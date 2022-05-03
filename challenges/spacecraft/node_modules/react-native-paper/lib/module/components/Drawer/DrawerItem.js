import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-item.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.Item
 *      style={{ backgroundColor: '#64ffda' }}
 *      icon="star"
 *      label="First Item"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
const DrawerItem = _ref => {
  let {
    icon,
    label,
    active,
    theme,
    style,
    onPress,
    accessibilityLabel,
    right,
    ...rest
  } = _ref;
  const {
    colors,
    roundness
  } = theme;
  const backgroundColor = active ? color(colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? colors.primary : color(colors.text).alpha(0.68).rgb().string();
  const font = theme.fonts.medium;
  const labelMargin = icon ? 32 : 0;
  return /*#__PURE__*/React.createElement(View, rest, /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    delayPressIn: 0,
    onPress: onPress,
    style: [styles.container, {
      backgroundColor,
      borderRadius: roundness
    }, style] // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: active ? ['button', 'selected'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      selected: active
    },
    accessibilityLabel: accessibilityLabel
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    numberOfLines: 1,
    style: [styles.label, {
      color: contentColor,
      ...font,
      marginLeft: labelMargin
    }]
  }, label)), right === null || right === void 0 ? void 0 : right({
    color: contentColor
  }))));
};

DrawerItem.displayName = 'Drawer.Item';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 32
  }
});
export default withTheme(DrawerItem);
//# sourceMappingURL=DrawerItem.js.map