"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

const TouchableRipple = _ref => {
  let {
    style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    theme,
    ...rest
  } = _ref;
  const {
    dark,
    colors
  } = theme;
  const disabled = disabledProp || !rest.onPress;
  const calculatedRippleColor = rippleColor || (0, _color.default)(colors.text).alpha(dark ? 0.32 : 0.2).rgb().string(); // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480

  const useForeground = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_PIE && borderless;

  if (TouchableRipple.supported) {
    return /*#__PURE__*/React.createElement(_reactNative.TouchableNativeFeedback, _extends({}, rest, {
      disabled: disabled,
      useForeground: useForeground,
      background: background != null ? background : _reactNative.TouchableNativeFeedback.Ripple(calculatedRippleColor, borderless)
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [borderless && styles.overflowHidden, style]
    }, React.Children.only(children)));
  }

  return /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, _extends({}, rest, {
    disabled: disabled,
    style: [borderless && styles.overflowHidden, style],
    underlayColor: underlayColor != null ? underlayColor : (0, _color.default)(calculatedRippleColor).fade(0.5).rgb().string()
  }), React.Children.only(children));
};

TouchableRipple.supported = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP;

const styles = _reactNative.StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  }
});

var _default = (0, _theming.withTheme)(TouchableRipple);

exports.default = _default;
//# sourceMappingURL=TouchableRipple.native.js.map