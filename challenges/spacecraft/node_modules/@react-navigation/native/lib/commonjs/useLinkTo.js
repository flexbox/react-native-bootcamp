"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinkTo;

var _core = require("@react-navigation/core");

var React = _interopRequireWildcard(require("react"));

var _LinkingContext = _interopRequireDefault(require("./LinkingContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useLinkTo() {
  const navigation = React.useContext(_core.NavigationContainerRefContext);
  const linking = React.useContext(_LinkingContext.default);
  const linkTo = React.useCallback(to => {
    if (navigation === undefined) {
      throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    }

    if (typeof to !== 'string') {
      // @ts-expect-error: This is fine
      navigation.navigate(to.screen, to.params);
      return;
    }

    if (!to.startsWith('/')) {
      throw new Error(`The path must start with '/' (${to}).`);
    }

    const {
      options
    } = linking;
    const state = options !== null && options !== void 0 && options.getStateFromPath ? options.getStateFromPath(to, options.config) : (0, _core.getStateFromPath)(to, options === null || options === void 0 ? void 0 : options.config);

    if (state) {
      const action = (0, _core.getActionFromState)(state, options === null || options === void 0 ? void 0 : options.config);

      if (action !== undefined) {
        navigation.dispatch(action);
      } else {
        navigation.reset(state);
      }
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking, navigation]);
  return linkTo;
}
//# sourceMappingURL=useLinkTo.js.map