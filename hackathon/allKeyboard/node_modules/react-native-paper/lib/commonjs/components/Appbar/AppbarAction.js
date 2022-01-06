"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppbarAction = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _color = _interopRequireDefault(require("color"));

var _colors = require("../../styles/colors");

var _IconButton = _interopRequireDefault(require("../IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component used to display an action item in the appbar.
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-android.png" />
 *       <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-ios.png" />
 *       <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarAction = ({
  size = 24,
  color: iconColor = (0, _color.default)(_colors.black).alpha(0.54).rgb().string(),
  icon,
  disabled,
  onPress,
  accessibilityLabel,
  ...rest
}) => /*#__PURE__*/React.createElement(_IconButton.default, _extends({
  size: size,
  onPress: onPress,
  color: iconColor,
  icon: icon,
  disabled: disabled,
  accessibilityLabel: accessibilityLabel,
  animated: true
}, rest));

exports.AppbarAction = AppbarAction;
AppbarAction.displayName = 'Appbar.Action';
var _default = AppbarAction; // @component-docs ignore-next-line

exports.default = _default;
//# sourceMappingURL=AppbarAction.js.map