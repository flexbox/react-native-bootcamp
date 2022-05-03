"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowInternal = shallowInternal;
exports.default = shallow;

var React = _interopRequireWildcard(require("react"));

var _shallow = _interopRequireDefault(require("react-test-renderer/shallow"));

var _errors = require("./helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-line import/no-extraneous-dependencies

/**
 * Renders test component shallowly using react-test-renderer/shallow
 */
function shallowInternal(instance) {
  const renderer = new _shallow.default();
  renderer.render( /*#__PURE__*/React.createElement(instance.type, instance.props));
  return {
    output: renderer.getRenderOutput()
  };
}

function shallow(_) {
  (0, _errors.throwRemovedFunctionError)('shallow', 'migration-v2#removed-global-shallow-function');
}