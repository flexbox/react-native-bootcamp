"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefaultHeaderHeight;

var _reactNative = require("react-native");

function getDefaultHeaderHeight(layout, modalPresentation, statusBarHeight) {
  let headerHeight;
  const isLandscape = layout.width > layout.height;

  if (_reactNative.Platform.OS === 'ios') {
    if (_reactNative.Platform.isPad || _reactNative.Platform.isTVOS) {
      if (modalPresentation) {
        headerHeight = 56;
      } else {
        headerHeight = 50;
      }
    } else {
      if (isLandscape) {
        headerHeight = 32;
      } else {
        if (modalPresentation) {
          headerHeight = 56;
        } else {
          headerHeight = 44;
        }
      }
    }
  } else if (_reactNative.Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }

  return headerHeight + statusBarHeight;
}
//# sourceMappingURL=getDefaultHeaderHeight.js.map