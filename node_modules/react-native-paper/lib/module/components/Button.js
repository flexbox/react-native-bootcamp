function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import ActivityIndicator from './ActivityIndicator';
import Icon from './Icon';
import Surface from './Surface';
import Text from './Typography/Text';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { black, white } from '../styles/colors';
import { withTheme } from '../core/theming';

/**
 * A button is component that the user can press to trigger an action.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/button-1.png" />
 *     <figcaption>Text button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-2.png" />
 *     <figcaption>Outlined button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-3.png" />
 *     <figcaption>Contained button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Button = ({
  disabled,
  compact,
  mode = 'text',
  dark,
  loading,
  icon,
  color: buttonColor,
  children,
  uppercase = true,
  accessibilityLabel,
  accessibilityHint,
  onPress,
  onLongPress,
  style,
  theme,
  contentStyle,
  labelStyle,
  testID,
  accessible,
  ...rest
}) => {
  var _StyleSheet$flatten;

  const {
    current: elevation
  } = React.useRef(new Animated.Value(mode === 'contained' ? 2 : 0));
  React.useEffect(() => {
    elevation.setValue(mode === 'contained' ? 2 : 0);
  }, [mode, elevation]);

  const handlePressIn = () => {
    if (mode === 'contained') {
      const {
        scale
      } = theme.animation;
      Animated.timing(elevation, {
        toValue: 8,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    }
  };

  const handlePressOut = () => {
    if (mode === 'contained') {
      const {
        scale
      } = theme.animation;
      Animated.timing(elevation, {
        toValue: 2,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  };

  const {
    colors,
    roundness
  } = theme;
  const font = theme.fonts.medium;
  let backgroundColor, borderColor, textColor, borderWidth;

  if (mode === 'contained') {
    if (disabled) {
      backgroundColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
    } else if (buttonColor) {
      backgroundColor = buttonColor;
    } else {
      backgroundColor = colors.primary;
    }
  } else {
    backgroundColor = 'transparent';
  }

  if (mode === 'outlined') {
    borderColor = color(theme.dark ? white : black).alpha(0.29).rgb().string();
    borderWidth = StyleSheet.hairlineWidth;
  } else {
    borderColor = 'transparent';
    borderWidth = 0;
  }

  if (disabled) {
    textColor = color(theme.dark ? white : black).alpha(0.32).rgb().string();
  } else if (mode === 'contained') {
    let isDark;

    if (typeof dark === 'boolean') {
      isDark = dark;
    } else {
      isDark = backgroundColor === 'transparent' ? false : !color(backgroundColor).isLight();
    }

    textColor = isDark ? white : black;
  } else if (buttonColor) {
    textColor = buttonColor;
  } else {
    textColor = colors.primary;
  }

  const rippleColor = color(textColor).alpha(0.32).rgb().string();
  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: roundness
  };
  const touchableStyle = {
    borderRadius: style ? (StyleSheet.flatten(style) || {}).borderRadius || roundness : roundness
  };
  const {
    color: customLabelColor,
    fontSize: customLabelSize
  } = StyleSheet.flatten(labelStyle) || {};
  const textStyle = {
    color: textColor,
    ...font
  };
  const elevationRes = disabled || mode !== 'contained' ? 0 : elevation;
  const iconStyle = ((_StyleSheet$flatten = StyleSheet.flatten(contentStyle)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.flexDirection) === 'row-reverse' ? styles.iconReverse : styles.icon;
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    style: [styles.button, compact && styles.compact, {
      elevation: elevationRes
    }, buttonStyle, style]
  }), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    delayPressIn: 0,
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    accessibilityLabel: accessibilityLabel,
    accessibilityHint: accessibilityHint // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    accessible: accessible,
    disabled: disabled,
    rippleColor: rippleColor,
    style: touchableStyle,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, contentStyle]
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(View, {
    style: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: customLabelSize !== null && customLabelSize !== void 0 ? customLabelSize : 16,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: customLabelSize !== null && customLabelSize !== void 0 ? customLabelSize : 16,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor,
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    numberOfLines: 1,
    style: [styles.label, compact && styles.compactLabel, uppercase && styles.uppercaseLabel, textStyle, font, labelStyle]
  }, children))));
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: 'solid'
  },
  compact: {
    minWidth: 'auto'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginLeft: 12,
    marginRight: -4
  },
  iconReverse: {
    marginRight: 12,
    marginLeft: -4
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16
  },
  compactLabel: {
    marginHorizontal: 8
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  }
});
export default withTheme(Button);
//# sourceMappingURL=Button.js.map