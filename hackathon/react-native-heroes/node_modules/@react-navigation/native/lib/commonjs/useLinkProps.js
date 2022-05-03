"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinkProps;

var _core = require("@react-navigation/core");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _LinkingContext = _interopRequireDefault(require("./LinkingContext"));

var _useLinkTo = _interopRequireDefault(require("./useLinkTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getStateFromParams = params => {
  if (params !== null && params !== void 0 && params.state) {
    return params.state;
  }

  if (params !== null && params !== void 0 && params.screen) {
    return {
      routes: [{
        name: params.screen,
        params: params.params,
        // @ts-expect-error
        state: params.screen ? getStateFromParams(params.params) : undefined
      }]
    };
  }

  return undefined;
};
/**
 * Hook to get props for an anchor tag so it can work with in page navigation.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 */


function useLinkProps(_ref) {
  var _options$getPathFromS;

  let {
    to,
    action
  } = _ref;
  const root = React.useContext(_core.NavigationContainerRefContext);
  const navigation = React.useContext(_core.NavigationHelpersContext);
  const {
    options
  } = React.useContext(_LinkingContext.default);
  const linkTo = (0, _useLinkTo.default)();

  const onPress = e => {
    var _e$currentTarget;

    let shouldHandle = false;

    if (_reactNative.Platform.OS !== 'web' || !e) {
      shouldHandle = e ? !e.defaultPrevented : true;
    } else if (!e.defaultPrevented && // onPress prevented default
    // @ts-expect-error: these properties exist on web, but not in React Native
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && ( // ignore clicks with modifier keys
    // @ts-expect-error: these properties exist on web, but not in React Native
    e.button == null || e.button === 0) && // ignore everything but left clicks
    // @ts-expect-error: these properties exist on web, but not in React Native
    [undefined, null, '', 'self'].includes((_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.target) // let browser handle "target=_blank" etc.
    ) {
      e.preventDefault();
      shouldHandle = true;
    }

    if (shouldHandle) {
      if (action) {
        if (navigation) {
          navigation.dispatch(action);
        } else if (root) {
          root.dispatch(action);
        } else {
          throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
        }
      } else {
        linkTo(to);
      }
    }
  };

  const getPathFromStateHelper = (_options$getPathFromS = options === null || options === void 0 ? void 0 : options.getPathFromState) !== null && _options$getPathFromS !== void 0 ? _options$getPathFromS : _core.getPathFromState;
  const href = typeof to === 'string' ? to : getPathFromStateHelper({
    routes: [{
      name: to.screen,
      // @ts-expect-error
      params: to.params,
      // @ts-expect-error
      state: getStateFromParams(to.params)
    }]
  }, options === null || options === void 0 ? void 0 : options.config);
  return {
    href,
    accessibilityRole: 'link',
    onPress
  };
}
//# sourceMappingURL=useLinkProps.js.map