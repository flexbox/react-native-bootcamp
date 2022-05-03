function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Animated, Easing, Platform, Pressable } from 'react-native';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_SUPPORTS_RIPPLE = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
/**
 * PlatformPressable provides an abstraction on top of Pressable to handle platform differences.
 */

export default function PlatformPressable(_ref) {
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
  } = useTheme();
  const [opacity] = React.useState(() => new Animated.Value(1));

  const animateTo = (toValue, duration) => {
    if (ANDROID_SUPPORTS_RIPPLE) {
      return;
    }

    Animated.timing(opacity, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.quad),
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