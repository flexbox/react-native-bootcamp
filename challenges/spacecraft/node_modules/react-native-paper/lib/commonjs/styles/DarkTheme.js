"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var _DefaultTheme = _interopRequireDefault(require("./DefaultTheme"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DarkTheme = { ..._DefaultTheme.default,
  dark: true,
  mode: 'adaptive',
  colors: { ..._DefaultTheme.default.colors,
    primary: '#BB86FC',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onSurface: '#FFFFFF',
    text: _colors.white,
    disabled: (0, _color.default)(_colors.white).alpha(0.38).rgb().string(),
    placeholder: (0, _color.default)(_colors.white).alpha(0.54).rgb().string(),
    backdrop: (0, _color.default)(_colors.black).alpha(0.5).rgb().string(),
    notification: _colors.pinkA100
  }
};
var _default = DarkTheme;
exports.default = _default;
//# sourceMappingURL=DarkTheme.js.map