"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeNativeBackPress = executeNativeBackPress;
exports.isSearchBarAvailableForCurrentPlatform = void 0;

var _reactNative = require("react-native");

const isSearchBarAvailableForCurrentPlatform = ['ios', 'android'].includes(_reactNative.Platform.OS);
exports.isSearchBarAvailableForCurrentPlatform = isSearchBarAvailableForCurrentPlatform;

function executeNativeBackPress() {
  // This function invokes the native back press event
  _reactNative.BackHandler.exitApp();

  return true;
}
//# sourceMappingURL=utils.js.map