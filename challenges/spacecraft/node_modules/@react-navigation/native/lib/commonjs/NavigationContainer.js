"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@react-navigation/core");

var React = _interopRequireWildcard(require("react"));

var _LinkingContext = _interopRequireDefault(require("./LinkingContext"));

var _DefaultTheme = _interopRequireDefault(require("./theming/DefaultTheme"));

var _ThemeProvider = _interopRequireDefault(require("./theming/ThemeProvider"));

var _useBackButton = _interopRequireDefault(require("./useBackButton"));

var _useDocumentTitle = _interopRequireDefault(require("./useDocumentTitle"));

var _useLinking = _interopRequireDefault(require("./useLinking"));

var _useThenable = _interopRequireDefault(require("./useThenable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

global.REACT_NAVIGATION_DEVTOOLS = new WeakMap();

/**
 * Container component which holds the navigation state designed for React Native apps.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree. When deep link handling is enabled, this will override deep links when specified. Make sure that you don't specify an `initialState` when there's a deep link (`Linking.getInitialURL()`).
 * @param props.onReady Callback which is called after the navigation tree mounts.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.theme Theme object for the navigators.
 * @param props.linking Options for deep linking. Deep link handling is enabled when this prop is provided, unless `linking.enabled` is `false`.
 * @param props.fallback Fallback component to render until we have finished getting initial state when linking is enabled. Defaults to `null`.
 * @param props.documentTitle Options to configure the document title on Web. Updating document title is handled by default unless `documentTitle.enabled` is `false`.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
function NavigationContainerInner(_ref, ref) {
  let {
    theme = _DefaultTheme.default,
    linking,
    fallback = null,
    documentTitle,
    onReady,
    ...rest
  } = _ref;
  const isLinkingEnabled = linking ? linking.enabled !== false : false;

  if (linking !== null && linking !== void 0 && linking.config) {
    (0, _core.validatePathConfig)(linking.config);
  }

  const refContainer = React.useRef(null);
  (0, _useBackButton.default)(refContainer);
  (0, _useDocumentTitle.default)(refContainer, documentTitle);
  const {
    getInitialState
  } = (0, _useLinking.default)(refContainer, {
    independent: rest.independent,
    enabled: isLinkingEnabled,
    prefixes: [],
    ...linking
  }); // Add additional linking related info to the ref
  // This will be used by the devtools

  React.useEffect(() => {
    if (refContainer.current) {
      REACT_NAVIGATION_DEVTOOLS.set(refContainer.current, {
        get linking() {
          var _linking$prefixes, _linking$getStateFrom, _linking$getPathFromS, _linking$getActionFro;

          return { ...linking,
            enabled: isLinkingEnabled,
            prefixes: (_linking$prefixes = linking === null || linking === void 0 ? void 0 : linking.prefixes) !== null && _linking$prefixes !== void 0 ? _linking$prefixes : [],
            getStateFromPath: (_linking$getStateFrom = linking === null || linking === void 0 ? void 0 : linking.getStateFromPath) !== null && _linking$getStateFrom !== void 0 ? _linking$getStateFrom : _core.getStateFromPath,
            getPathFromState: (_linking$getPathFromS = linking === null || linking === void 0 ? void 0 : linking.getPathFromState) !== null && _linking$getPathFromS !== void 0 ? _linking$getPathFromS : _core.getPathFromState,
            getActionFromState: (_linking$getActionFro = linking === null || linking === void 0 ? void 0 : linking.getActionFromState) !== null && _linking$getActionFro !== void 0 ? _linking$getActionFro : _core.getActionFromState
          };
        }

      });
    }
  });
  const [isResolved, initialState] = (0, _useThenable.default)(getInitialState);
  React.useImperativeHandle(ref, () => refContainer.current);
  const linkingContext = React.useMemo(() => ({
    options: linking
  }), [linking]);
  const isReady = rest.initialState != null || !isLinkingEnabled || isResolved;
  const onReadyRef = React.useRef(onReady);
  React.useEffect(() => {
    onReadyRef.current = onReady;
  });
  React.useEffect(() => {
    if (isReady) {
      var _onReadyRef$current;

      (_onReadyRef$current = onReadyRef.current) === null || _onReadyRef$current === void 0 ? void 0 : _onReadyRef$current.call(onReadyRef);
    }
  }, [isReady]);

  if (!isReady) {
    // This is temporary until we have Suspense for data-fetching
    // Then the fallback will be handled by a parent `Suspense` component
    return fallback;
  }

  return /*#__PURE__*/React.createElement(_LinkingContext.default.Provider, {
    value: linkingContext
  }, /*#__PURE__*/React.createElement(_ThemeProvider.default, {
    value: theme
  }, /*#__PURE__*/React.createElement(_core.BaseNavigationContainer, _extends({}, rest, {
    initialState: rest.initialState == null ? initialState : rest.initialState,
    ref: refContainer
  }))));
}

const NavigationContainer = /*#__PURE__*/React.forwardRef(NavigationContainerInner);
var _default = NavigationContainer;
exports.default = _default;
//# sourceMappingURL=NavigationContainer.js.map