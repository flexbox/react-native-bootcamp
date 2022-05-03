function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../Icon';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
import getContrastingColor from '../../utils/getContrastingColor';
const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
const Avatar = _ref => {
  var _rest$color;

  let {
    icon,
    size = defaultSize,
    style,
    theme,
    ...rest
  } = _ref;
  const {
    backgroundColor = theme.colors.primary,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  const textColor = (_rest$color = rest.color) !== null && _rest$color !== void 0 ? _rest$color : getContrastingColor(backgroundColor, white, 'rgba(0, 0, 0, .54)');
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor
    }, styles.container, restStyle]
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: textColor,
    size: size * 0.6
  }));
};

Avatar.displayName = 'Avatar.Icon';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default withTheme(Avatar);
//# sourceMappingURL=AvatarIcon.js.map