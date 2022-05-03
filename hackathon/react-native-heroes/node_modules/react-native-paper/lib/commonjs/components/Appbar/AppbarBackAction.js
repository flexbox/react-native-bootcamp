"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppbarBackAction = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _AppbarAction = _interopRequireDefault(require("./AppbarAction"));

var _AppbarBackIcon = _interopRequireDefault(require("./AppbarBackIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component used to display a back button in the appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarBackAction = ({
  accessibilityLabel = 'Back',
  ...rest
}) => /*#__PURE__*/React.createElement(_AppbarAction.default, _extends({
  accessibilityLabel: accessibilityLabel
}, rest, {
  icon: _AppbarBackIcon.default
}));

exports.AppbarBackAction = AppbarBackAction;
AppbarBackAction.displayName = 'Appbar.BackAction';
var _default = AppbarBackAction; // @component-docs ignore-next-line

exports.default = _default;
//# sourceMappingURL=AppbarBackAction.js.map