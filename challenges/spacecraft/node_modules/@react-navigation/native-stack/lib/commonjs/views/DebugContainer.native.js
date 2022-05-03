"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AppContainer = _interopRequireDefault(require("react-native/Libraries/ReactNative/AppContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// @ts-ignore Getting private component
let Container = _reactNative.View;

if (process.env.NODE_ENV !== 'production') {
  const DebugContainer = props => {
    const {
      stackPresentation,
      ...rest
    } = props;

    if (_reactNative.Platform.OS === 'ios' && stackPresentation !== 'push') {
      // This is necessary for LogBox
      return /*#__PURE__*/React.createElement(_AppContainer.default, null, /*#__PURE__*/React.createElement(_reactNative.View, rest));
    }

    return /*#__PURE__*/React.createElement(_reactNative.View, rest);
  };

  Container = DebugContainer;
}

var _default = Container;
exports.default = _default;
//# sourceMappingURL=DebugContainer.native.js.map