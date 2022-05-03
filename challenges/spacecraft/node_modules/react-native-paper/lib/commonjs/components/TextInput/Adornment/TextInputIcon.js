"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconAdornment = exports.ICON_SIZE = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _IconButton = _interopRequireDefault(require("../../IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ICON_SIZE = 24;
exports.ICON_SIZE = ICON_SIZE;
const ICON_OFFSET = 12;

const StyleContext = /*#__PURE__*/_react.default.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {}
});

const IconAdornment = _ref => {
  let {
    icon,
    topPosition,
    side,
    isTextInputFocused,
    forceFocus
  } = _ref;
  const style = {
    top: topPosition,
    [side]: ICON_OFFSET
  };
  const contextState = {
    style,
    isTextInputFocused,
    forceFocus
  };
  return /*#__PURE__*/_react.default.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};
/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon name="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */


exports.IconAdornment = IconAdornment;

const TextInputIcon = _ref2 => {
  let {
    name,
    onPress,
    forceTextInputFocus,
    color,
    ...rest
  } = _ref2;

  const {
    style,
    isTextInputFocused,
    forceFocus
  } = _react.default.useContext(StyleContext);

  const onPressWithFocusControl = _react.default.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }

    onPress === null || onPress === void 0 ? void 0 : onPress();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, _extends({
    icon: name,
    style: styles.iconButton,
    size: ICON_SIZE,
    onPress: onPressWithFocusControl,
    color: typeof color === 'function' ? color(isTextInputFocused) : color
  }, rest)));
};

TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
  forceTextInputFocus: true
};

const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    margin: 0
  }
});

var _default = TextInputIcon; // @component-docs ignore-next-line

exports.default = _default;
//# sourceMappingURL=TextInputIcon.js.map