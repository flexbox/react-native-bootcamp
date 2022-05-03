"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _color = _interopRequireDefault(require("color"));

var _reactNative = require("react-native");

var _AnimatedText = _interopRequireDefault(require("./Typography/AnimatedText"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/helper-text.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const HelperText = _ref => {
  let {
    style,
    type = 'info',
    visible = true,
    theme,
    onLayout,
    padding = 'normal',
    ...rest
  } = _ref;
  const {
    current: shown
  } = React.useRef(new _reactNative.Animated.Value(visible ? 1 : 0));
  let {
    current: textHeight
  } = React.useRef(0);
  const {
    scale
  } = theme.animation;
  const {
    maxFontSizeMultiplier = 1.5
  } = rest;
  React.useEffect(() => {
    if (visible) {
      // show text
      _reactNative.Animated.timing(shown, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      // hide text
      _reactNative.Animated.timing(shown, {
        toValue: 0,
        duration: 180 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, shown]);

  const handleTextLayout = e => {
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(e);
    textHeight = e.nativeEvent.layout.height;
  };

  const {
    colors,
    dark
  } = theme;
  const textColor = type === 'error' ? colors.error : (0, _color.default)(colors.text).alpha(dark ? 0.7 : 0.54).rgb().string();
  return /*#__PURE__*/React.createElement(_AnimatedText.default, _extends({
    onLayout: handleTextLayout,
    style: [styles.text, padding !== 'none' ? styles.padding : {}, {
      color: textColor,
      opacity: shown,
      transform: visible && type === 'error' ? [{
        translateY: shown.interpolate({
          inputRange: [0, 1],
          outputRange: [-textHeight / 2, 0]
        })
      }] : []
    }, style],
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, rest), rest.children);
};

const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: 12,
    paddingVertical: 4
  },
  padding: {
    paddingHorizontal: 12
  }
});

var _default = (0, _theming.withTheme)(HelperText);

exports.default = _default;
//# sourceMappingURL=HelperText.js.map