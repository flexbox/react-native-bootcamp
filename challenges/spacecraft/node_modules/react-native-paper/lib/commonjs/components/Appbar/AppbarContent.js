"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarContent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

var _colors = require("../../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = _ref => {
  let {
    color: titleColor = _colors.white,
    subtitle,
    subtitleStyle,
    onPress,
    style,
    titleRef,
    titleStyle,
    theme,
    title,
    ...rest
  } = _ref;
  const {
    fonts
  } = theme;
  const subtitleColor = (0, _color.default)(titleColor).alpha(0.7).rgb().string();
  return /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onPress,
    disabled: !onPress
  }, /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(_Text.default, {
    ref: titleRef,
    style: [{
      color: titleColor,
      ...(_reactNative.Platform.OS === 'ios' ? fonts.regular : fonts.medium)
    }, styles.title, titleStyle],
    numberOfLines: 1,
    accessible: true,
    accessibilityTraits: "header" // @ts-expect-error React Native doesn't accept 'heading' as it's web-only
    ,
    accessibilityRole: _reactNative.Platform.OS === 'web' ? 'heading' : 'header'
  }, title), subtitle ? /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.subtitle, {
      color: subtitleColor
    }, subtitleStyle],
    numberOfLines: 1
  }, subtitle) : null));
};

AppbarContent.displayName = 'Appbar.Content';

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 11 : 14
  }
});

var _default = (0, _theming.withTheme)(AppbarContent); // @component-docs ignore-next-line


exports.default = _default;
const AppbarContentWithTheme = (0, _theming.withTheme)(AppbarContent); // @component-docs ignore-next-line

exports.AppbarContent = AppbarContentWithTheme;
//# sourceMappingURL=AppbarContent.js.map