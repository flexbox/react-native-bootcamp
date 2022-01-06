"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

var _ToggleButtonGroup = _interopRequireDefault(require("./ToggleButtonGroup"));

var _ToggleButtonRow = _interopRequireDefault(require("./ToggleButtonRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToggleButton = Object.assign( // @component ./ToggleButton.tsx
_ToggleButton.default, {
  // @component ./ToggleButtonGroup.tsx
  Group: _ToggleButtonGroup.default,
  // @component ./ToggleButtonRow.tsx
  Row: _ToggleButtonRow.default
});
var _default = ToggleButton;
exports.default = _default;
//# sourceMappingURL=index.js.map