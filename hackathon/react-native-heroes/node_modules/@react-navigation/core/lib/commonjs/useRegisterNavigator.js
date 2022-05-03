"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRegisterNavigator;

var _nonSecure = require("nanoid/non-secure");

var React = _interopRequireWildcard(require("react"));

var _EnsureSingleNavigator = require("./EnsureSingleNavigator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Register a navigator in the parent context (either a navigation container or a screen).
 * This is used to prevent multiple navigators under a single container or screen.
 */
function useRegisterNavigator() {
  const [key] = React.useState(() => (0, _nonSecure.nanoid)());
  const container = React.useContext(_EnsureSingleNavigator.SingleNavigatorContext);

  if (container === undefined) {
    throw new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
  }

  React.useEffect(() => {
    const {
      register,
      unregister
    } = container;
    register(key);
    return () => unregister(key);
  }, [container, key]);
  return key;
}
//# sourceMappingURL=useRegisterNavigator.js.map