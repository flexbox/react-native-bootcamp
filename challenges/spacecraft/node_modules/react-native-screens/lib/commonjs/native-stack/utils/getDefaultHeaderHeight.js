"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefaultHeaderHeight;

var _reactNative = require("react-native");

const formSheetModalHeight = 56;

function getDefaultHeaderHeight(layout, topInset, stackPresentation) {
  // default header heights
  let headerHeight = _reactNative.Platform.OS === 'android' ? 56 : 64;
  let statusBarHeight = topInset;

  if (_reactNative.Platform.OS === 'ios') {
    const isLandscape = layout.width > layout.height;
    const isFromSheetModal = stackPresentation === 'modal' || stackPresentation === 'formSheet';

    if (isFromSheetModal && !isLandscape) {
      // `modal` and `formSheet` presentations do not take whole screen, so should not take the inset.
      statusBarHeight = 0;
    }

    if (_reactNative.Platform.isPad || _reactNative.Platform.isTVOS) {
      headerHeight = isFromSheetModal ? formSheetModalHeight : 50;
    } else {
      if (isLandscape) {
        headerHeight = 32;
      } else {
        headerHeight = isFromSheetModal ? formSheetModalHeight : 44;
      }
    }
  }

  return headerHeight + statusBarHeight;
}
//# sourceMappingURL=getDefaultHeaderHeight.js.map