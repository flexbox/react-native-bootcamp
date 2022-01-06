"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAnimatedValue;

var _reactNative = require("react-native");

var _useLazyRef = _interopRequireDefault(require("./useLazyRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useAnimatedValue(initialValue) {
  const {
    current
  } = (0, _useLazyRef.default)(() => new _reactNative.Animated.Value(initialValue));
  return current;
}
//# sourceMappingURL=useAnimatedValue.js.map