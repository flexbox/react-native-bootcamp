function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
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
  const calculatedRippleColor = rippleColor || color(colors.text).alpha(dark ? 0.32 : 0.2).rgb().string(); // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480

  const useForeground = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;

  if (TouchableRipple.supported) {
    return /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({}, rest, {
      disabled: disabled,
      useForeground: useForeground,
      background: background != null ? background : TouchableNativeFeedback.Ripple(calculatedRippleColor, borderless)
    }), /*#__PURE__*/React.createElement(View, {
      style: [borderless && styles.overflowHidden, style]
    }, React.Children.only(children)));
  }

  return /*#__PURE__*/React.createElement(TouchableHighlight, _extends({}, rest, {
    disabled: disabled,
    style: [borderless && styles.overflowHidden, style],
    underlayColor: underlayColor != null ? underlayColor : color(calculatedRippleColor).fade(0.5).rgb().string()
  }), React.Children.only(children));
};

TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  }
});
export default withTheme(TouchableRipple);
//# sourceMappingURL=TouchableRipple.native.js.map