"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaskedView;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The native MaskedView that we explicitly re-export for supported platforms: Android, iOS.
 */
let RNCMaskedView;

try {
  // Add try/catch to support usage even if it's not installed, since it's optional.
  // Newer versions of Metro will handle it properly.
  RNCMaskedView = require('@react-native-masked-view/masked-view').default;
} catch (e) {// Ignore
}

const isMaskedViewAvailable = _reactNative.UIManager.getViewManagerConfig('RNCMaskedView') != null;

function MaskedView(_ref) {
  let {
    children,
    ...rest
  } = _ref;

  if (isMaskedViewAvailable && RNCMaskedView) {
    return /*#__PURE__*/React.createElement(RNCMaskedView, rest, children);
  }

  return children;
}
//# sourceMappingURL=MaskedViewNative.js.map