"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debugShallow;

var React = _interopRequireWildcard(require("react"));

var _shallow = require("../shallow");

var _format = _interopRequireDefault(require("./format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Log pretty-printed shallow test component instance
 */
function debugShallow(instance, message) {
  const {
    output
  } = (0, _shallow.shallowInternal)(instance);

  if (message) {
    console.log(`${message}\n\n`, (0, _format.default)(output));
  } else {
    console.log((0, _format.default)(output));
  }
}