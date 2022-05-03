"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _TouchableRipple = _interopRequireDefault(require("./TouchableRipple/TouchableRipple"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _CrossFadeIcon = _interopRequireDefault(require("./CrossFadeIcon"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * An icon button is a button which displays only an icon without a label.
 * By default button has 150% size of the icon.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/icon-button-1.png" />
 *     <figcaption>Icon button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/icon-button-2.png" />
 *     <figcaption>Pressed icon button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     color={Colors.red500}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/touchable-ripple.html
 */
const IconButton = _ref => {
  let {
    icon,
    color: customColor,
    size = 24,
    accessibilityLabel,
    disabled,
    onPress,
    animated = false,
    theme,
    style,
    ...rest
  } = _ref;
  const iconColor = typeof customColor !== 'undefined' ? customColor : theme.colors.text;
  const rippleColor = (0, _color.default)(iconColor).alpha(0.32).rgb().string();
  const IconComponent = animated ? _CrossFadeIcon.default : _Icon.default;
  const buttonSize = size * 1.5;
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({
    borderless: true,
    centered: true,
    onPress: onPress,
    rippleColor: rippleColor,
    style: [styles.container, {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2
    }, disabled && styles.disabled, style],
    accessibilityLabel: accessibilityLabel // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    hitSlop: _TouchableRipple.default.supported ? {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    } : {
      top: 6,
      left: 6,
      bottom: 6,
      right: 6
    }
  }, rest), /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(IconComponent, {
    color: iconColor,
    source: icon,
    size: size
  })));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 6
  },
  disabled: {
    opacity: 0.32
  }
});

var _default = (0, _theming.withTheme)(IconButton);

exports.default = _default;
//# sourceMappingURL=IconButton.js.map