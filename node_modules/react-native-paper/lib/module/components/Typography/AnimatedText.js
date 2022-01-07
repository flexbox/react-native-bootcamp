function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Animated, I18nManager, StyleSheet } from 'react-native';
import { withTheme } from '../../core/theming';

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
function AnimatedText({
  style,
  theme,
  ...rest
}) {
  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';
  return /*#__PURE__*/React.createElement(Animated.Text, _extends({}, rest, {
    style: [styles.text, { ...theme.fonts.regular,
      color: theme.colors.text,
      writingDirection
    }, style]
  }));
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default withTheme(AnimatedText);
//# sourceMappingURL=AnimatedText.js.map