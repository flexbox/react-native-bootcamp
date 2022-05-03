"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxItem = _interopRequireDefault(require("./CheckboxItem"));

var _CheckboxAndroid = _interopRequireDefault(require("./CheckboxAndroid"));

var _CheckboxIOS = _interopRequireDefault(require("./CheckboxIOS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Checkbox = Object.assign( // @component ./Checkbox.tsx
_Checkbox.default, {
  // @component ./CheckboxItem.tsx
  Item: _CheckboxItem.default,
  // @component ./CheckboxAndroid.tsx
  Android: _CheckboxAndroid.default,
  // @component ./CheckboxIOS.tsx
  IOS: _CheckboxIOS.default
});
var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=index.js.map