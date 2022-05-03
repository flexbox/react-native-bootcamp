function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import Icon from './Icon';
import CrossFadeIcon from './CrossFadeIcon';
import { withTheme } from '../core/theming';

/**
 * An icon button is a button which displays only an icon without a label.
 * By default button has 150% size of the icon.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/icon-button-1.png" />
 *     <figcaption>Icon button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/icon-button-2.png" />
 *     <figcaption>Pressed icon button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     color={Colors.red500}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/touchable-ripple.html
 */
const IconButton = _ref => {
  let {
    icon,
    color: customColor,
    size = 24,
    accessibilityLabel,
    disabled,
    onPress,
    animated = false,
    theme,
    style,
    ...rest
  } = _ref;
  const iconColor = typeof customColor !== 'undefined' ? customColor : theme.colors.text;
  const rippleColor = color(iconColor).alpha(0.32).rgb().string();
  const IconComponent = animated ? CrossFadeIcon : Icon;
  const buttonSize = size * 1.5;
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({
    borderless: true,
    centered: true,
    onPress: onPress,
    rippleColor: rippleColor,
    style: [styles.container, {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2
    }, disabled && styles.disabled, style],
    accessibilityLabel: accessibilityLabel // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    hitSlop: TouchableRipple.supported ? {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    } : {
      top: 6,
      left: 6,
      bottom: 6,
      right: 6
    }
  }, rest), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(IconComponent, {
    color: iconColor,
    source: icon,
    size: size
  })));
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 6
  },
  disabled: {
    opacity: 0.32
  }
});
export default withTheme(IconButton);
//# sourceMappingURL=IconButton.js.map