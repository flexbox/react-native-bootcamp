"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactTestRenderer = require("react-test-renderer");

const actMock = callback => {
  callback();
};

var _default = _reactTestRenderer.act || actMock;

exports.default = _default;