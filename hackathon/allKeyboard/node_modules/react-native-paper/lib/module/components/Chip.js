function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Animated, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import Icon from './Icon';
import MaterialCommunityIcon from './MaterialCommunityIcon';
import Surface from './Surface';
import Text from './Typography/Text';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { withTheme } from '../core/theming';
import { black, white } from '../styles/colors';

/**
 * Chips can be used to display entities in small blocks.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/chip-1.png" />
 *     <figcaption>Flat chip</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/chip-2.png" />
 *     <figcaption>Outlined chip</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Chip = ({
  mode = 'flat',
  children,
  icon,
  avatar,
  selected = false,
  disabled = false,
  accessibilityLabel,
  closeIconAccessibilityLabel = 'Close',
  onPress,
  onLongPress,
  onClose,
  closeIcon,
  textStyle,
  style,
  theme,
  testID,
  selectedColor,
  ellipsizeMode,
  ...rest
}) => {
  const {
    current: elevation
  } = React.useRef(new Animated.Value(0));

  const handlePressIn = () => {
    const {
      scale
    } = theme.animation;
    Animated.timing(elevation, {
      toValue: 4,
      duration: 200 * scale,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    const {
      scale
    } = theme.animation;
    Animated.timing(elevation, {
      toValue: 0,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  };

  const {
    dark,
    colors
  } = theme;
  const defaultBackgroundColor = mode === 'outlined' ? colors.surface : dark ? '#383838' : '#ebebeb';
  const {
    backgroundColor = defaultBackgroundColor,
    borderRadius = 16
  } = StyleSheet.flatten(style) || {};
  const borderColor = mode === 'outlined' ? color(selectedColor !== undefined ? selectedColor : color(dark ? white : black)).alpha(0.29).rgb().string() : backgroundColor;
  const textColor = disabled ? colors.disabled : color(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.87).rgb().string();
  const iconColor = disabled ? colors.disabled : color(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.54).rgb().string();
  const backgroundColorString = typeof backgroundColor === 'string' ? backgroundColor : defaultBackgroundColor;
  const selectedBackgroundColor = (dark ? color(backgroundColorString).lighten(mode === 'outlined' ? 0.2 : 0.4) : color(backgroundColorString).darken(mode === 'outlined' ? 0.08 : 0.2)).rgb().string();
  const underlayColor = selectedColor ? color(selectedColor).fade(0.5).rgb().string() : selectedBackgroundColor;
  const accessibilityTraits = ['button'];
  const accessibilityState = {
    selected,
    disabled
  };

  if (selected) {
    accessibilityTraits.push('selected');
  }

  if (disabled) {
    accessibilityTraits.push('disabled');
  }

  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [styles.container, {
      elevation: Platform.OS === 'android' ? elevation : 0,
      backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
      borderColor,
      borderRadius
    }, style]
  }, rest), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    delayPressIn: 0,
    style: [{
      borderRadius
    }, styles.touchable],
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    underlayColor: underlayColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: accessibilityTraits,
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: accessibilityState,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      paddingRight: onClose ? 32 : 4
    }]
  }, avatar && !icon ? /*#__PURE__*/React.createElement(View, {
    style: [styles.avatarWrapper, disabled && {
      opacity: 0.26
    }]
  }, /*#__PURE__*/React.isValidElement(avatar) ? /*#__PURE__*/React.cloneElement(avatar, {
    style: [styles.avatar, avatar.props.style]
  }) : avatar) : null, icon || selected ? /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, avatar ? [styles.avatar, styles.avatarSelected] : null]
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: avatar ? white : iconColor,
    size: 18
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "check",
    color: avatar ? white : iconColor,
    size: 18,
    direction: "ltr"
  })) : null, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    numberOfLines: 1,
    style: [styles.text, { ...theme.fonts.regular,
      color: textColor,
      marginRight: onClose ? 0 : 8,
      marginLeft: avatar || icon || selected ? 4 : 8
    }, textStyle],
    ellipsizeMode: ellipsizeMode
  }, children))), onClose ? /*#__PURE__*/React.createElement(View, {
    style: styles.closeButtonStyle
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onClose // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: "button",
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityLabel: closeIconAccessibilityLabel
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, styles.closeIcon]
  }, closeIcon ? /*#__PURE__*/React.createElement(Icon, {
    source: closeIcon,
    color: iconColor,
    size: 16
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "close-circle",
    size: 16,
    color: iconColor,
    direction: "ltr"
  })))) : null);
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    flexDirection: Platform.select({
      default: 'column',
      web: 'row'
    })
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    position: 'relative',
    flexGrow: 1
  },
  icon: {
    padding: 4,
    alignSelf: 'center'
  },
  closeIcon: {
    marginRight: 4
  },
  text: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  avatarWrapper: {
    marginRight: 4
  },
  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)'
  },
  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    flexGrow: 1
  }
});
export default withTheme(Chip);
//# sourceMappingURL=Chip.js.map