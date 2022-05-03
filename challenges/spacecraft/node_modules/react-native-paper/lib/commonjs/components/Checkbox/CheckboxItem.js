"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxItem = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxAndroid = _interopRequireDefault(require("./CheckboxAndroid"));

var _CheckboxIOS = _interopRequireDefault(require("./CheckboxIOS"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Checkbox.Item label="Item" status="checked" />
 *   </View>
 * );
 *
 * export default MyComponent;
 *```
 */
const CheckboxItem = _ref => {
  let {
    style,
    status,
    label,
    onPress,
    labelStyle,
    theme,
    testID,
    mode,
    position = 'trailing',
    disabled,
    ...props
  } = _ref;
  const checkboxProps = { ...props,
    status,
    theme,
    disabled
  };
  const isLeading = position === 'leading';
  let checkbox;

  if (mode === 'android') {
    checkbox = /*#__PURE__*/React.createElement(_CheckboxAndroid.default, checkboxProps);
  } else if (mode === 'ios') {
    checkbox = /*#__PURE__*/React.createElement(_CheckboxIOS.default, checkboxProps);
  } else {
    checkbox = /*#__PURE__*/React.createElement(_Checkbox.default, checkboxProps);
  }

  return /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    accessibilityLabel: label,
    accessibilityRole: "checkbox",
    accessibilityState: {
      checked: status === 'checked',
      disabled
    },
    onPress: onPress,
    testID: testID,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style],
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants"
  }, isLeading && checkbox, /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.label, {
      color: disabled ? theme.colors.disabled : theme.colors.text,
      textAlign: isLeading ? 'right' : 'left'
    }, labelStyle]
  }, label), !isLeading && checkbox));
};

CheckboxItem.displayName = 'Checkbox.Item';

var _default = (0, _theming.withTheme)(CheckboxItem); // @component-docs ignore-next-line


exports.default = _default;
const CheckboxItemWithTheme = (0, _theming.withTheme)(CheckboxItem); // @component-docs ignore-next-line

exports.CheckboxItem = CheckboxItemWithTheme;

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flexGrow: 1
  }
});
//# sourceMappingURL=CheckboxItem.js.map