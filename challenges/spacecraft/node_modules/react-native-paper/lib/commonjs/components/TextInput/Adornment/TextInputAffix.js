"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInputAffix = exports.AffixAdornment = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = _interopRequireDefault(require("color"));

var _reactNative = require("react-native");

var _theming = require("../../../core/theming");

var _enums = require("./enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AFFIX_OFFSET = 12;

const AffixContext = /*#__PURE__*/_react.default.createContext({
  textStyle: {
    fontFamily: '',
    color: ''
  },
  topPosition: null,
  side: _enums.AdornmentSide.Left
});

const AffixAdornment = _ref => {
  let {
    affix,
    side,
    textStyle,
    topPosition,
    onLayout,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(AffixContext.Provider, {
    value: {
      side,
      textStyle,
      topPosition,
      onLayout,
      visible,
      paddingHorizontal,
      maxFontSizeMultiplier
    }
  }, affix);
};
/**
 * A component to render a leading / trailing text in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outline.affix.png" />
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
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */


exports.AffixAdornment = AffixAdornment;

const TextInputAffix = _ref2 => {
  let {
    text,
    textStyle: labelStyle,
    theme
  } = _ref2;

  const {
    textStyle,
    onLayout,
    topPosition,
    side,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier
  } = _react.default.useContext(AffixContext);

  const textColor = (0, _color.default)(theme.colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
  const offset = typeof paddingHorizontal === 'number' ? paddingHorizontal : AFFIX_OFFSET;
  const style = {
    top: topPosition,
    [side]: offset
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, style, {
      opacity: (visible === null || visible === void 0 ? void 0 : visible.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })) || 1
    }],
    onLayout: onLayout
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    style: [{
      color: textColor
    }, textStyle, labelStyle]
  }, text));
};

exports.TextInputAffix = TextInputAffix;
TextInputAffix.displayName = 'TextInput.Affix';

const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var _default = (0, _theming.withTheme)(TextInputAffix); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=TextInputAffix.js.map