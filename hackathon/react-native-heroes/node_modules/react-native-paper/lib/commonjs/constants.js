"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APPROX_STATUSBAR_HEIGHT = void 0;

var _reactNative = require("react-native");

var _NativeModules$Native, _NativeModules$Native2, _NativeModules$Native3, _NativeModules$Native4;

// Use the existence of expo-constants as a heuristic for determining if the
// status bar is translucent on Android. This should be replaced in the future
// with react-native-safe-area-context.
const estimatedStatusBarHeight = (_NativeModules$Native = (_NativeModules$Native2 = _reactNative.NativeModules.NativeUnimoduleProxy) === null || _NativeModules$Native2 === void 0 ? void 0 : (_NativeModules$Native3 = _NativeModules$Native2.modulesConstants) === null || _NativeModules$Native3 === void 0 ? void 0 : (_NativeModules$Native4 = _NativeModules$Native3.ExponentConstants) === null || _NativeModules$Native4 === void 0 ? void 0 : _NativeModules$Native4.statusBarHeight) !== null && _NativeModules$Native !== void 0 ? _NativeModules$Native : 0;

const APPROX_STATUSBAR_HEIGHT = _reactNative.Platform.select({
  android: estimatedStatusBarHeight,
  ios: _reactNative.Platform.Version < 11 ? estimatedStatusBarHeight : 0
});

exports.APPROX_STATUSBAR_HEIGHT = APPROX_STATUSBAR_HEIGHT;
//# sourceMappingURL=constants.js.map