function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import color from 'color';
import * as React from 'react';
import { I18nManager, StyleSheet } from 'react-native';
import Text from './Text';
import { withTheme } from '../../core/theming';

const StyledText = ({
  theme,
  alpha,
  family,
  style,
  ...rest
}) => {
  const textColor = color(theme.colors.text).alpha(alpha).rgb().string();
  const font = theme.fonts[family];
  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';
  return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
    style: [styles.text, {
      color: textColor,
      ...font,
      writingDirection
    }, style]
  }));
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default withTheme(StyledText);
//# sourceMappingURL=StyledText.js.map