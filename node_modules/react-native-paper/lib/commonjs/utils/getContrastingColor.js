"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContrastingColor;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContrastingColor(input, light, dark) {
  if (typeof input === 'string') {
    return (0, _color.default)(input).isLight() ? dark : light;
  }

  return light;
}
//# sourceMappingURL=getContrastingColor.js.map