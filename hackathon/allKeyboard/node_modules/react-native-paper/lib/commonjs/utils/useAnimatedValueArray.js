"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAnimatedValueArray;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useAnimatedValueArray(initialValues) {
  const refs = React.useRef([]);
  refs.current.length = initialValues.length;
  initialValues.forEach((initialValue, i) => {
    var _refs$current$i;

    refs.current[i] = (_refs$current$i = refs.current[i]) !== null && _refs$current$i !== void 0 ? _refs$current$i : new _reactNative.Animated.Value(initialValue);
  });
  return refs.current;
}
//# sourceMappingURL=useAnimatedValueArray.js.map