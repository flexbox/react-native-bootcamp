"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppbarHeader = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _overlay = _interopRequireDefault(require("../../styles/overlay"));

var _Appbar = require("./Appbar");

var _shadow = _interopRequireDefault(require("../../styles/shadow"));

var _theming = require("../../core/theming");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const _goBack = () => console.log('Went back');
 *
 *   const _handleSearch = () => console.log('Searching');
 *
 *   const _handleMore = () => console.log('Shown more');
 *
 *   return (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={_goBack} />
 *       <Appbar.Content title="Title" subtitle="Subtitle" />
 *       <Appbar.Action icon="magnify" onPress={_handleSearch} />
 *       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
 *     </Appbar.Header>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const AppbarHeader = props => {
  const {
    // Don't use default props since we check it to know whether we should use SafeAreaView
    statusBarHeight = _constants.APPROX_STATUSBAR_HEIGHT,
    style,
    dark,
    ...rest
  } = props;
  const {
    dark: isDarkTheme,
    colors,
    mode
  } = rest.theme;
  const {
    height = _Appbar.DEFAULT_APPBAR_HEIGHT,
    elevation = 4,
    backgroundColor: customBackground,
    zIndex = 0,
    ...restStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  const backgroundColor = customBackground ? customBackground : isDarkTheme && mode === 'adaptive' ? (0, _overlay.default)(elevation, colors.surface) : colors.primary; // Let the user override the behaviour

  const Wrapper = typeof props.statusBarHeight === 'number' ? _reactNative.View : _reactNative.SafeAreaView;
  return /*#__PURE__*/React.createElement(Wrapper, {
    style: [{
      backgroundColor,
      zIndex,
      elevation
    }, (0, _shadow.default)(elevation)]
  }, /*#__PURE__*/React.createElement(_Appbar.Appbar, _extends({
    style: [{
      height,
      backgroundColor,
      marginTop: statusBarHeight
    }, styles.appbar, restStyle],
    dark: dark
  }, rest)));
};

AppbarHeader.displayName = 'Appbar.Header';

const styles = _reactNative.StyleSheet.create({
  appbar: {
    elevation: 0
  }
});

var _default = (0, _theming.withTheme)(AppbarHeader); // @component-docs ignore-next-line


exports.default = _default;
const AppbarHeaderWithTheme = (0, _theming.withTheme)(AppbarHeader); // @component-docs ignore-next-line

exports.AppbarHeader = AppbarHeaderWithTheme;
//# sourceMappingURL=AppbarHeader.js.map