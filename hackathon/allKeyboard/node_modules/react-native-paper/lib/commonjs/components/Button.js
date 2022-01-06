"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _ActivityIndicator = _interopRequireDefault(require("./ActivityIndicator"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _Text = _interopRequireDefault(require("./Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("./TouchableRipple/TouchableRipple"));

var _colors = require("../styles/colors");

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  } = React.useRef(new _reactNative.Animated.Value(mode === 'contained' ? 2 : 0));
  React.useEffect(() => {
    elevation.setValue(mode === 'contained' ? 2 : 0);
  }, [mode, elevation]);

  const handlePressIn = () => {
    if (mode === 'contained') {
      const {
        scale
      } = theme.animation;

      _reactNative.Animated.timing(elevation, {
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

      _reactNative.Animated.timing(elevation, {
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
      backgroundColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
    } else if (buttonColor) {
      backgroundColor = buttonColor;
    } else {
      backgroundColor = colors.primary;
    }
  } else {
    backgroundColor = 'transparent';
  }

  if (mode === 'outlined') {
    borderColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.29).rgb().string();
    borderWidth = _reactNative.StyleSheet.hairlineWidth;
  } else {
    borderColor = 'transparent';
    borderWidth = 0;
  }

  if (disabled) {
    textColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.32).rgb().string();
  } else if (mode === 'contained') {
    let isDark;

    if (typeof dark === 'boolean') {
      isDark = dark;
    } else {
      isDark = backgroundColor === 'transparent' ? false : !(0, _color.default)(backgroundColor).isLight();
    }

    textColor = isDark ? _colors.white : _colors.black;
  } else if (buttonColor) {
    textColor = buttonColor;
  } else {
    textColor = colors.primary;
  }

  const rippleColor = (0, _color.default)(textColor).alpha(0.32).rgb().string();
  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: roundness
  };
  const touchableStyle = {
    borderRadius: style ? (_reactNative.StyleSheet.flatten(style) || {}).borderRadius || roundness : roundness
  };
  const {
    color: customLabelColor,
    fontSize: customLabelSize
  } = _reactNative.StyleSheet.flatten(labelStyle) || {};
  const textStyle = {
    color: textColor,
    ...font
  };
  const elevationRes = disabled || mode !== 'contained' ? 0 : elevation;
  const iconStyle = ((_StyleSheet$flatten = _reactNative.StyleSheet.flatten(contentStyle)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.flexDirection) === 'row-reverse' ? styles.iconReverse : styles.icon;
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({}, rest, {
    style: [styles.button, compact && styles.compact, {
      elevation: elevationRes
    }, buttonStyle, style]
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, contentStyle]
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: iconStyle
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: customLabelSize !== null && customLabelSize !== void 0 ? customLabelSize : 16,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
    size: customLabelSize !== null && customLabelSize !== void 0 ? customLabelSize : 16,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor,
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    numberOfLines: 1,
    style: [styles.label, compact && styles.compactLabel, uppercase && styles.uppercaseLabel, textStyle, font, labelStyle]
  }, children))));
};

const styles = _reactNative.StyleSheet.create({
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

var _default = (0, _theming.withTheme)(Button);

exports.default = _default;
//# sourceMappingURL=Button.js.map