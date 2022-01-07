"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButton = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

var _color = _interopRequireDefault(require("color"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _ToggleButtonGroup = require("./ToggleButtonGroup");

var _colors = require("../../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/toggle-button.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const ToggleButtonExample = () => {
 *   const [status, setStatus] = React.useState('checked');
 *
 *   const onButtonToggle = value => {
 *     setStatus(status === 'checked' ? 'unchecked' : 'checked');
 *   };
 *
 *   return (
 *     <ToggleButton
 *       icon="bluetooth"
 *       value="bluetooth"
 *       status={status}
 *       onPress={onButtonToggle}
 *     />
 *   );
 * };
 *
 * export default ToggleButtonExample;
 *
 * ```
 */
const ToggleButton = ({
  icon,
  size,
  theme,
  accessibilityLabel,
  disabled,
  style,
  value,
  status,
  onPress,
  ...rest
}) => {
  const borderRadius = theme.roundness;
  return /*#__PURE__*/React.createElement(_ToggleButtonGroup.ToggleButtonGroupContext.Consumer, null, context => {
    let backgroundColor;
    const checked = context && context.value === value || status === 'checked';

    if (checked) {
      backgroundColor = theme.dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .08)';
    } else {
      backgroundColor = 'transparent';
    }

    return /*#__PURE__*/React.createElement(_IconButton.default, _extends({
      borderless: false,
      icon: icon,
      onPress: e => {
        if (onPress) {
          onPress(e);
        }

        if (context) {
          context.onValueChange(!checked ? value : null);
        }
      },
      size: size,
      accessibilityLabel: accessibilityLabel,
      accessibilityState: {
        disabled,
        selected: checked
      },
      disabled: disabled,
      style: [styles.content, {
        backgroundColor,
        borderRadius,
        borderColor: (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.29).rgb().string()
      }, style]
    }, rest));
  });
};

const styles = _reactNative.StyleSheet.create({
  content: {
    width: 42,
    height: 42,
    margin: 0
  }
});

var _default = (0, _theming.withTheme)(ToggleButton); // @component-docs ignore-next-line


exports.default = _default;
const ToggleButtonWithTheme = (0, _theming.withTheme)(ToggleButton); // @component-docs ignore-next-line

exports.ToggleButton = ToggleButtonWithTheme;
//# sourceMappingURL=ToggleButton.js.map