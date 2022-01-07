"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Appbar = _interopRequireDefault(require("./Appbar"));

var _AppbarContent = _interopRequireDefault(require("./AppbarContent"));

var _AppbarAction = _interopRequireDefault(require("./AppbarAction"));

var _AppbarBackAction = _interopRequireDefault(require("./AppbarBackAction"));

var _AppbarHeader = _interopRequireDefault(require("./AppbarHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Appbar = Object.assign( // @component ./Appbar.tsx
_Appbar.default, {
  // @component ./AppbarContent.tsx
  Content: _AppbarContent.default,
  // @component ./AppbarAction.tsx
  Action: _AppbarAction.default,
  // @component ./AppbarBackAction.tsx
  BackAction: _AppbarBackAction.default,
  // @component ./AppbarHeader.tsx
  Header: _AppbarHeader.default
});
var _default = Appbar;
exports.default = _default;
//# sourceMappingURL=index.js.map