"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonItem = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

var _RadioButtonGroup = require("./RadioButtonGroup");

var _utils = require("./utils");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _RadioButtonAndroid = _interopRequireDefault(require("./RadioButtonAndroid"));

var _RadioButtonIOS = _interopRequireDefault(require("./RadioButtonIOS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-item.ios.png" />
 *     <figcaption>Pressed</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <RadioButton.Item label="First item" value="first" />
 *       <RadioButton.Item label="Second item" value="second" />
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const RadioButtonItem = _ref => {
  let {
    value,
    label,
    style,
    labelStyle,
    onPress,
    disabled,
    color,
    uncheckedColor,
    status,
    theme: {
      colors
    },
    accessibilityLabel,
    testID,
    mode,
    position = 'trailing'
  } = _ref;
  const radioButtonProps = {
    value,
    disabled,
    status,
    color,
    uncheckedColor
  };
  const isLeading = position === 'leading';
  let radioButton;

  if (mode === 'android') {
    radioButton = /*#__PURE__*/React.createElement(_RadioButtonAndroid.default, radioButtonProps);
  } else if (mode === 'ios') {
    radioButton = /*#__PURE__*/React.createElement(_RadioButtonIOS.default, radioButtonProps);
  } else {
    radioButton = /*#__PURE__*/React.createElement(_RadioButton.default, radioButtonProps);
  }

  return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
    return /*#__PURE__*/React.createElement(_TouchableRipple.default, {
      onPress: disabled ? undefined : () => (0, _utils.handlePress)({
        onPress: onPress,
        onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
        value
      }),
      accessibilityLabel: accessibilityLabel,
      testID: testID
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.container, style],
      pointerEvents: "none"
    }, isLeading && radioButton, /*#__PURE__*/React.createElement(_Text.default, {
      style: [styles.label, {
        color: colors.text,
        textAlign: isLeading ? 'right' : 'left'
      }, labelStyle]
    }, label), !isLeading && radioButton));
  });
};

RadioButtonItem.displayName = 'RadioButton.Item';

var _default = (0, _theming.withTheme)(RadioButtonItem); // @component-docs ignore-next-line


exports.default = _default;
const RadioButtonItemWithTheme = (0, _theming.withTheme)(RadioButtonItem); // @component-docs ignore-next-line

exports.RadioButtonItem = RadioButtonItemWithTheme;

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flexGrow: 1
  }
});
//# sourceMappingURL=RadioButtonItem.js.map