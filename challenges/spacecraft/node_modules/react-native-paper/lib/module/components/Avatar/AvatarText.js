function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
import getContrastingColor from '../../utils/getContrastingColor';
const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-text.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
const AvatarText = _ref => {
  let {
    label,
    size = defaultSize,
    style,
    theme,
    labelStyle,
    color: customColor,
    ...rest
  } = _ref;
  const {
    backgroundColor = theme.colors.primary,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  const textColor = customColor !== null && customColor !== void 0 ? customColor : getContrastingColor(backgroundColor, white, 'rgba(0, 0, 0, .54)');
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor
    }, styles.container, restStyle]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    style: [styles.text, {
      color: textColor,
      fontSize: size / 2,
      lineHeight: size
    }, labelStyle],
    numberOfLines: 1
  }, label));
};

AvatarText.displayName = 'Avatar.Text';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
export default withTheme(AvatarText);
//# sourceMappingURL=AvatarText.js.map