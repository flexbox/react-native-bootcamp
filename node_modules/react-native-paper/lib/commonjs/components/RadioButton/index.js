"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _RadioButtonGroup = _interopRequireDefault(require("./RadioButtonGroup"));

var _RadioButtonAndroid = _interopRequireDefault(require("./RadioButtonAndroid"));

var _RadioButtonIOS = _interopRequireDefault(require("./RadioButtonIOS"));

var _RadioButtonItem = _interopRequireDefault(require("./RadioButtonItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioButton = Object.assign( // @component ./RadioButton.tsx
_RadioButton.default, {
  // @component ./RadioButtonGroup.tsx
  Group: _RadioButtonGroup.default,
  // @component ./RadioButtonAndroid.tsx
  Android: _RadioButtonAndroid.default,
  // @component ./RadioButtonIOS.tsx
  IOS: _RadioButtonIOS.default,
  // @component ./RadioButtonItem.tsx
  Item: _RadioButtonItem.default
});
var _default = RadioButton;
exports.default = _default;
//# sourceMappingURL=index.js.map