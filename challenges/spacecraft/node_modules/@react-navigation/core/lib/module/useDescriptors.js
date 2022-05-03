import * as React from 'react';
import NavigationBuilderContext from './NavigationBuilderContext';
import NavigationContext from './NavigationContext';
import NavigationRouteContext from './NavigationRouteContext';
import SceneView from './SceneView';
import useNavigationCache from './useNavigationCache';
import useRouteCache from './useRouteCache';

/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
export default function useDescriptors(_ref) {
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
  } = React.useContext(NavigationBuilderContext);
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
  const navigations = useNavigationCache({
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  });
  const routes = useRouteCache(state.routes);
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
        return /*#__PURE__*/React.createElement(NavigationBuilderContext.Provider, {
          key: route.key,
          value: context
        }, /*#__PURE__*/React.createElement(NavigationContext.Provider, {
          value: navigation
        }, /*#__PURE__*/React.createElement(NavigationRouteContext.Provider, {
          value: route
        }, /*#__PURE__*/React.createElement(SceneView, {
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