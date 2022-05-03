"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButtonIOS = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _RadioButtonGroup = require("./RadioButtonGroup");

var _utils = require("./utils");

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const RadioButtonIOS = ({
  disabled,
  onPress,
  theme,
  status,
  value,
  testID,
  ...rest
}) => {
  const checkedColor = disabled ? theme.colors.disabled : rest.color || theme.colors.accent;
  let rippleColor;

  if (disabled) {
    rippleColor = (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
  } else {
    rippleColor = (0, _color.default)(checkedColor).fade(0.32).rgb().string();
  }

  return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
    const checked = (0, _utils.isChecked)({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: disabled ? undefined : () => {
        (0, _utils.handlePress)({
          onPress,
          value,
          onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange
        });
      } // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
      ,
      accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
      accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked',
      accessibilityRole: "radio",
      accessibilityState: {
        disabled,
        checked
      },
      accessibilityLiveRegion: "polite",
      style: styles.container,
      testID: testID
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: {
        opacity: checked ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
      allowFontScaling: false,
      name: "check",
      size: 24,
      color: checkedColor,
      direction: "ltr"
    })));
  });
};

RadioButtonIOS.displayName = 'RadioButton.IOS';

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});

var _default = (0, _theming.withTheme)(RadioButtonIOS); // @component-docs ignore-next-line


exports.default = _default;
const RadioButtonIOSWithTheme = (0, _theming.withTheme)(RadioButtonIOS); // @component-docs ignore-next-line

exports.RadioButtonIOS = RadioButtonIOSWithTheme;
//# sourceMappingURL=RadioButtonIOS.js.map