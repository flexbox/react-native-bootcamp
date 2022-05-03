"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigation;

var React = _interopRequireWildcard(require("react"));

var _NavigationContainerRefContext = _interopRequireDefault(require("./NavigationContainerRefContext"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
function useNavigation() {
  const root = React.useContext(_NavigationContainerRefContext.default);
  const navigation = React.useContext(_NavigationContext.default);

  if (navigation === undefined && root === undefined) {
    throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
  } // FIXME: Figure out a better way to do this


  return navigation !== null && navigation !== void 0 ? navigation : root;
}
//# sourceMappingURL=useNavigation.js.map