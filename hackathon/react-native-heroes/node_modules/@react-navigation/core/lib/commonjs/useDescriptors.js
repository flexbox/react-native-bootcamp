"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDescriptors;

var React = _interopRequireWildcard(require("react"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

var _SceneView = _interopRequireDefault(require("./SceneView"));

var _useNavigationCache = _interopRequireDefault(require("./useNavigationCache"));

var _useRouteCache = _interopRequireDefault(require("./useRouteCache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
function useDescriptors(_ref) {
  let {
    state,
    screens,
    navigation,
    screenOptions,
    defaultScreenOptions,
    onAction,
    getState,
    setState,
    addListener,
    addKeyedListener,
    onRouteFocus,
    router,
    emitter
  } = _ref;
  const [options, setOptions] = React.useState({});
  const {
    onDispatchAction,
    onOptionsChange,
    stackRef
  } = React.useContext(_NavigationBuilderContext.default);
  const context = React.useMemo(() => ({
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onOptionsChange,
    stackRef
  }), [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, stackRef]);
  const navigations = (0, _useNavigationCache.default)({
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  });
  const routes = (0, _useRouteCache.default)(state.routes);
  return routes.reduce((acc, route, i) => {
    const config = screens[route.name];
    const screen = config.props;
    const navigation = navigations[route.key];
    const optionsList = [// The default `screenOptions` passed to the navigator
    screenOptions, // The `screenOptions` props passed to `Group` elements
    ...(config.options ? config.options.filter(Boolean) : []), // The `options` prop passed to `Screen` elements,
    screen.options, // The options set via `navigation.setOptions`
    options[route.key]];
    const customOptions = optionsList.reduce((acc, curr) => Object.assign(acc, typeof curr !== 'function' ? curr : curr({
      route,
      navigation
    })), {});
    const mergedOptions = { ...(typeof defaultScreenOptions === 'function' ? // @ts-expect-error: ts gives incorrect error here
      defaultScreenOptions({
        route,
        navigation,
        options: customOptions
      }) : defaultScreenOptions),
      ...customOptions
    };

    const clearOptions = () => setOptions(o => {
      if (route.key in o) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {
          [route.key]: _,
          ...rest
        } = o;
        return rest;
      }

      return o;
    });

    acc[route.key] = {
      route,
      // @ts-expect-error: it's missing action helpers, fix later
      navigation,

      render() {
        return /*#__PURE__*/React.createElement(_NavigationBuilderContext.default.Provider, {
          key: route.key,
          value: context
        }, /*#__PURE__*/React.createElement(_NavigationContext.default.Provider, {
          value: navigation
        }, /*#__PURE__*/React.createElement(_NavigationRouteContext.default.Provider, {
          value: route
        }, /*#__PURE__*/React.createElement(_SceneView.default, {
          navigation: navigation,
          route: route,
          screen: screen,
          routeState: state.routes[i].state,
          getState: getState,
          setState: setState,
          options: mergedOptions,
          clearOptions: clearOptions
        }))));
      },

      options: mergedOptions
    };
    return acc;
  }, {});
}
//# sourceMappingURL=useDescriptors.js.map