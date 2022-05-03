"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const DrawerItem = ({
  icon,
  label,
  active,
  theme,
  style,
  onPress,
  accessibilityLabel,
  right,
  ...rest
}) => {
  const {
    colors,
    roundness
  } = theme;
  const backgroundColor = active ? (0, _color.default)(colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? colors.primary : (0, _color.default)(colors.text).alpha(0.68).rgb().string();
  const font = theme.fonts.medium;
  const labelMargin = icon ? 32 : 0;
  return /*#__PURE__*/React.createElement(_reactNative.View, rest, /*#__PURE__*/React.createElement(_TouchableRipple.default, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(_Text.default, {
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

const styles = _reactNative.StyleSheet.create({
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

var _default = (0, _theming.withTheme)(DrawerItem);

exports.default = _default;
//# sourceMappingURL=DrawerItem.js.map