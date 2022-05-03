"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCurrentRender;

var React = _interopRequireWildcard(require("react"));

var _CurrentRenderContext = _interopRequireDefault(require("./CurrentRenderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Write the current options, so that server renderer can get current values
 * Mutating values like this is not safe in async mode, but it doesn't apply to SSR
 */
function useCurrentRender(_ref) {
  let {
    state,
    navigation,
    descriptors
  } = _ref;
  const current = React.useContext(_CurrentRenderContext.default);

  if (current && navigation.isFocused()) {
    current.options = descriptors[state.routes[state.index].key].options;
  }
}
//# sourceMappingURL=useCurrentRender.js.map