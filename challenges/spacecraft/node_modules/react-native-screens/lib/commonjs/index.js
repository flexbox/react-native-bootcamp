"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  enableScreens: true,
  screensEnabled: true,
  enableFreeze: true,
  NativeScreen: true,
  Screen: true,
  ScreenContext: true,
  ScreenContainer: true,
  NativeScreenContainer: true,
  NativeScreenNavigationContainer: true,
  ScreenStack: true,
  FullWindowOverlay: true,
  ScreenStackHeaderBackButtonImage: true,
  ScreenStackHeaderRightView: true,
  ScreenStackHeaderLeftView: true,
  ScreenStackHeaderCenterView: true,
  ScreenStackHeaderSearchBarView: true,
  ScreenStackHeaderConfig: true,
  SearchBar: true,
  ScreenStackHeaderSubview: true,
  shouldUseActivityState: true,
  useTransitionProgress: true,
  isSearchBarAvailableForCurrentPlatform: true,
  executeNativeBackPress: true
};
exports.enableScreens = enableScreens;
exports.screensEnabled = screensEnabled;
exports.enableFreeze = enableFreeze;
Object.defineProperty(exports, "useTransitionProgress", {
  enumerable: true,
  get: function () {
    return _useTransitionProgress.default;
  }
});
Object.defineProperty(exports, "isSearchBarAvailableForCurrentPlatform", {
  enumerable: true,
  get: function () {
    return _utils.isSearchBarAvailableForCurrentPlatform;
  }
});
Object.defineProperty(exports, "executeNativeBackPress", {
  enumerable: true,
  get: function () {
    return _utils.executeNativeBackPress;
  }
});
exports.shouldUseActivityState = exports.ScreenStackHeaderSubview = exports.SearchBar = exports.ScreenStackHeaderConfig = exports.ScreenStackHeaderSearchBarView = exports.ScreenStackHeaderCenterView = exports.ScreenStackHeaderLeftView = exports.ScreenStackHeaderRightView = exports.ScreenStackHeaderBackButtonImage = exports.FullWindowOverlay = exports.ScreenStack = exports.NativeScreenNavigationContainer = exports.NativeScreenContainer = exports.ScreenContainer = exports.ScreenContext = exports.Screen = exports.NativeScreen = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _useTransitionProgress = _interopRequireDefault(require("./useTransitionProgress"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ENABLE_SCREENS = true;

function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;
}

function screensEnabled() {
  return ENABLE_SCREENS;
} // @ts-ignore function stub, freezing logic is located in index.native.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars


function enableFreeze(shouldEnableReactFreeze = true) {// noop
}

class NativeScreen extends _react.default.Component {
  render() {
    let {
      active,
      activityState,
      style,
      enabled = ENABLE_SCREENS,
      ...rest
    } = this.props;

    if (enabled) {
      if (active !== undefined && activityState === undefined) {
        activityState = active !== 0 ? 2 : 0; // change taken from index.native.tsx
      }

      return /*#__PURE__*/_react.default.createElement(_reactNative.View // @ts-expect-error: hidden exists on web, but not in React Native
      , _extends({
        hidden: activityState === 0,
        style: [style, {
          display: activityState !== 0 ? 'flex' : 'none'
        }]
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, rest);
  }

}

exports.NativeScreen = NativeScreen;

const Screen = _reactNative.Animated.createAnimatedComponent(NativeScreen);

exports.Screen = Screen;

const ScreenContext = /*#__PURE__*/_react.default.createContext(Screen);

exports.ScreenContext = ScreenContext;
const ScreenContainer = _reactNative.View;
exports.ScreenContainer = ScreenContainer;
const NativeScreenContainer = _reactNative.View;
exports.NativeScreenContainer = NativeScreenContainer;
const NativeScreenNavigationContainer = _reactNative.View;
exports.NativeScreenNavigationContainer = NativeScreenNavigationContainer;
const ScreenStack = _reactNative.View;
exports.ScreenStack = ScreenStack;
const FullWindowOverlay = _reactNative.View;
exports.FullWindowOverlay = FullWindowOverlay;

const ScreenStackHeaderBackButtonImage = props => /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({
  resizeMode: "center",
  fadeDuration: 0
}, props)));

exports.ScreenStackHeaderBackButtonImage = ScreenStackHeaderBackButtonImage;

const ScreenStackHeaderRightView = props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props);

exports.ScreenStackHeaderRightView = ScreenStackHeaderRightView;

const ScreenStackHeaderLeftView = props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props);

exports.ScreenStackHeaderLeftView = ScreenStackHeaderLeftView;

const ScreenStackHeaderCenterView = props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props);

exports.ScreenStackHeaderCenterView = ScreenStackHeaderCenterView;

const ScreenStackHeaderSearchBarView = props => /*#__PURE__*/_react.default.createElement(_reactNative.View, props);

exports.ScreenStackHeaderSearchBarView = ScreenStackHeaderSearchBarView;
const ScreenStackHeaderConfig = _reactNative.View; // @ts-expect-error: search bar props have no common props with View

exports.ScreenStackHeaderConfig = ScreenStackHeaderConfig;
const SearchBar = _reactNative.View;
exports.SearchBar = SearchBar;
const ScreenStackHeaderSubview = _reactNative.View;
exports.ScreenStackHeaderSubview = ScreenStackHeaderSubview;
const shouldUseActivityState = true;
exports.shouldUseActivityState = shouldUseActivityState;
//# sourceMappingURL=index.js.map