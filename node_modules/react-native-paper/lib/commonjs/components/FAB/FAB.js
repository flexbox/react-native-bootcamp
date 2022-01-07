"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAB = exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ActivityIndicator = _interopRequireDefault(require("../ActivityIndicator"));

var _Surface = _interopRequireDefault(require("../Surface"));

var _CrossFadeIcon = _interopRequireDefault(require("../CrossFadeIcon"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _colors = require("../../styles/colors");

var _theming = require("../../core/theming");

var _getContrastingColor = _interopRequireDefault(require("../../utils/getContrastingColor"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_getContrastingColor.default;

/**
 * A floating action button represents the primary action in an application.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-1.png" />
 *   <img src="screenshots/fab-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     style={styles.fab}
 *     small
 *     icon="plus"
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
const FAB = ({
  small,
  icon,
  label,
  accessibilityLabel = label,
  accessibilityState,
  animated = true,
  color: customColor,
  disabled,
  onPress,
  onLongPress,
  theme,
  style,
  visible = true,
  uppercase = true,
  loading,
  testID,
  ...rest
}) => {
  const {
    current: visibility
  } = React.useRef(new _reactNative.Animated.Value(visible ? 1 : 0));
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    if (visible) {
      _reactNative.Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    } else {
      _reactNative.Animated.timing(visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, visibility]);
  const IconComponent = animated ? _CrossFadeIcon.default : _Icon.default;
  const disabledColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
  const {
    backgroundColor = disabled ? disabledColor : theme.colors.accent
  } = _reactNative.StyleSheet.flatten(style) || {};
  let foregroundColor;

  if (typeof customColor !== 'undefined') {
    foregroundColor = customColor;
  } else if (disabled) {
    foregroundColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.32).rgb().string();
  } else {
    foregroundColor = (0, _getContrastingColor.default)(backgroundColor, _colors.white, 'rgba(0, 0, 0, .54)');
  }

  const rippleColor = (0, _color.default)(foregroundColor).alpha(0.32).rgb().string();
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({}, rest, {
    style: [{
      backgroundColor,
      opacity: visibility,
      transform: [{
        scale: visibility
      }]
    }, styles.container, disabled && styles.disabled, style],
    pointerEvents: visible ? 'auto' : 'none'
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    borderless: true,
    onPress: onPress,
    onLongPress: onLongPress,
    rippleColor: rippleColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: { ...accessibilityState,
      disabled
    },
    style: styles.touchable,
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, label ? styles.extended : small ? styles.small : styles.standard],
    pointerEvents: "none"
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(IconComponent, {
    source: icon,
    size: 24,
    color: foregroundColor
  }) : null, loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
    size: 18,
    color: foregroundColor
  }) : null, label ? /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    style: [styles.label, uppercase && styles.uppercaseLabel, {
      color: foregroundColor,
      ...theme.fonts.medium
    }]
  }, label) : null)));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 28,
    elevation: 6
  },
  touchable: {
    borderRadius: 28
  },
  standard: {
    height: 56,
    width: 56
  },
  small: {
    height: 40,
    width: 40
  },
  extended: {
    height: 48,
    paddingHorizontal: 16
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginHorizontal: 8
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  },
  disabled: {
    elevation: 0
  }
});

var _default = (0, _theming.withTheme)(FAB); // @component-docs ignore-next-line


exports.default = _default;
const FABWithTheme = (0, _theming.withTheme)(FAB); // @component-docs ignore-next-line

exports.FAB = FABWithTheme;
//# sourceMappingURL=FAB.js.map