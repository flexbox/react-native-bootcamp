"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlatformPressable;

var _native = require("@react-navigation/native");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedPressable = _reactNative.Animated.createAnimatedComponent(_reactNative.Pressable);

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_SUPPORTS_RIPPLE = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP;
/**
 * PlatformPressable provides an abstraction on top of Pressable to handle platform differences.
 */

function PlatformPressable(_ref) {
  let {
    onPressIn,
    onPressOut,
    android_ripple,
    pressColor,
    pressOpacity = 0.3,
    style,
    ...rest
  } = _ref;
  const {
    dark
  } = (0, _native.useTheme)();
  const [opacity] = React.useState(() => new _reactNative.Animated.Value(1));

  const animateTo = (toValue, duration) => {
    if (ANDROID_SUPPORTS_RIPPLE) {
      return;
    }

    _reactNative.Animated.timing(opacity, {
      toValue,
      duration,
      easing: _reactNative.Easing.inOut(_reactNative.Easing.quad),
      useNativeDriver: true
    }).start();
  };

  const handlePressIn = e => {
    animateTo(pressOpacity, 0);
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
  };

  const handlePressOut = e => {
    animateTo(1, 200);
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
  };

  return /*#__PURE__*/React.createElement(AnimatedPressable, _extends({
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    android_ripple: ANDROID_SUPPORTS_RIPPLE ? {
      color: pressColor !== undefined ? pressColor : dark ? 'rgba(255, 255, 255, .32)' : 'rgba(0, 0, 0, .32)',
      ...android_ripple
    } : undefined,
    style: [{
      opacity: !ANDROID_SUPPORTS_RIPPLE ? opacity : 1
    }, style]
  }, rest));
}
//# sourceMappingURL=PlatformPressable.js.map