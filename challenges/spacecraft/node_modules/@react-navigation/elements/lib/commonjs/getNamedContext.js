"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNamedContext;

var React = _interopRequireWildcard(require("react"));

var _global$contexts;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const contexts = '__react_navigation__elements_contexts';
// We use a global variable to keep our contexts so that we can reuse same contexts across packages
global[contexts] = (_global$contexts = global[contexts]) !== null && _global$contexts !== void 0 ? _global$contexts : new Map();

function getNamedContext(name, initialValue) {
  let context = global[contexts].get(name);

  if (context) {
    return context;
  }

  context = /*#__PURE__*/React.createContext(initialValue);
  context.displayName = name;
  global[contexts].set(name, context);
  return context;
}
//# sourceMappingURL=getNamedContext.js.map