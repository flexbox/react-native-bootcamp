"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigationBuilder;

var _routers = require("@react-navigation/routers");

var React = _interopRequireWildcard(require("react"));

var _reactIs = require("react-is");

var _Group = _interopRequireDefault(require("./Group"));

var _isArrayEqual = _interopRequireDefault(require("./isArrayEqual"));

var _isRecordEqual = _interopRequireDefault(require("./isRecordEqual"));

var _NavigationHelpersContext = _interopRequireDefault(require("./NavigationHelpersContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _Screen = _interopRequireDefault(require("./Screen"));

var _types = require("./types");

var _useChildListeners = _interopRequireDefault(require("./useChildListeners"));

var _useComponent = _interopRequireDefault(require("./useComponent"));

var _useCurrentRender = _interopRequireDefault(require("./useCurrentRender"));

var _useDescriptors = _interopRequireDefault(require("./useDescriptors"));

var _useEventEmitter = _interopRequireDefault(require("./useEventEmitter"));

var _useFocusedListenersChildrenAdapter = _interopRequireDefault(require("./useFocusedListenersChildrenAdapter"));

var _useFocusEvents = _interopRequireDefault(require("./useFocusEvents"));

var _useKeyedChildListeners = _interopRequireDefault(require("./useKeyedChildListeners"));

var _useNavigationHelpers = _interopRequireDefault(require("./useNavigationHelpers"));

var _useOnAction = _interopRequireDefault(require("./useOnAction"));

var _useOnGetState = _interopRequireDefault(require("./useOnGetState"));

var _useOnRouteFocus = _interopRequireDefault(require("./useOnRouteFocus"));

var _useRegisterNavigator = _interopRequireDefault(require("./useRegisterNavigator"));

var _useScheduleUpdate = _interopRequireDefault(require("./useScheduleUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions
_types.PrivateValueStore;

const isValidKey = key => key === undefined || typeof key === 'string' && key !== '';
/**
 * Extract route config object from React children elements.
 *
 * @param children React Elements to extract the config from.
 */


const getRouteConfigsFromChildren = (children, groupKey, groupOptions) => {
  const configs = React.Children.toArray(children).reduce((acc, child) => {
    var _child$type, _child$props;

    if ( /*#__PURE__*/React.isValidElement(child)) {
      if (child.type === _Screen.default) {
        // We can only extract the config from `Screen` elements
        // If something else was rendered, it's probably a bug
        if (!isValidKey(child.props.navigationKey)) {
          throw new Error(`Got an invalid 'navigationKey' prop (${JSON.stringify(child.props.navigationKey)}) for the screen '${child.props.name}'. It must be a non-empty string or 'undefined'.`);
        }

        acc.push({
          keys: [groupKey, child.props.navigationKey],
          options: groupOptions,
          props: child.props
        });
        return acc;
      }

      if (child.type === React.Fragment || child.type === _Group.default) {
        if (!isValidKey(child.props.navigationKey)) {
          throw new Error(`Got an invalid 'navigationKey' prop (${JSON.stringify(child.props.navigationKey)}) for the group. It must be a non-empty string or 'undefined'.`);
        } // When we encounter a fragment or group, we need to dive into its children to extract the configs
        // This is handy to conditionally define a group of screens


        acc.push(...getRouteConfigsFromChildren(child.props.children, child.props.navigationKey, child.type !== _Group.default ? groupOptions : groupOptions != null ? [...groupOptions, child.props.screenOptions] : [child.props.screenOptions]));
        return acc;
      }
    }

    throw new Error(`A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found ${/*#__PURE__*/React.isValidElement(child) ? `'${typeof child.type === 'string' ? child.type : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name}'${(_child$props = child.props) !== null && _child$props !== void 0 && _child$props.name ? ` for the screen '${child.props.name}'` : ''}` : typeof child === 'object' ? JSON.stringify(child) : `'${String(child)}'`}). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.`);
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    configs.forEach(config => {
      const {
        name,
        children,
        component,
        getComponent
      } = config.props;

      if (typeof name !== 'string' || !name) {
        throw new Error(`Got an invalid name (${JSON.stringify(name)}) for the screen. It must be a non-empty string.`);
      }

      if (children != null || component !== undefined || getComponent !== undefined) {
        if (children != null && component !== undefined) {
          throw new Error(`Got both 'component' and 'children' props for the screen '${name}'. You must pass only one of them.`);
        }

        if (children != null && getComponent !== undefined) {
          throw new Error(`Got both 'getComponent' and 'children' props for the screen '${name}'. You must pass only one of them.`);
        }

        if (component !== undefined && getComponent !== undefined) {
          throw new Error(`Got both 'component' and 'getComponent' props for the screen '${name}'. You must pass only one of them.`);
        }

        if (children != null && typeof children !== 'function') {
          throw new Error(`Got an invalid value for 'children' prop for the screen '${name}'. It must be a function returning a React Element.`);
        }

        if (component !== undefined && !(0, _reactIs.isValidElementType)(component)) {
          throw new Error(`Got an invalid value for 'component' prop for the screen '${name}'. It must be a valid React Component.`);
        }

        if (getComponent !== undefined && typeof getComponent !== 'function') {
          throw new Error(`Got an invalid value for 'getComponent' prop for the screen '${name}'. It must be a function returning a React Component.`);
        }

        if (typeof component === 'function') {
          if (component.name === 'component') {
            // Inline anonymous functions passed in the `component` prop will have the name of the prop
            // It's relatively safe to assume that it's not a component since it should also have PascalCase name
            // We won't catch all scenarios here, but this should catch a good chunk of incorrect use.
            console.warn(`Looks like you're passing an inline function for 'component' prop for the screen '${name}' (e.g. component={() => <SomeComponent />}). Passing an inline function will cause the component state to be lost on re-render and cause perf issues since it's re-created every render. You can pass the function as children to 'Screen' instead to achieve the desired behaviour.`);
          } else if (/^[a-z]/.test(component.name)) {
            console.warn(`Got a component with the name '${component.name}' for the screen '${name}'. React Components must start with an uppercase letter. If you're passing a regular function and not a component, pass it as children to 'Screen' instead. Otherwise capitalize your component's name.`);
          }
        }
      } else {
        throw new Error(`Couldn't find a 'component', 'getComponent' or 'children' prop for the screen '${name}'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing.`);
      }
    });
  }

  return configs;
};
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */


function useNavigationBuilder(createRouter, options) {
  const navigatorKey = (0, _useRegisterNavigator.default)();
  const route = React.useContext(_NavigationRouteContext.default);
  const {
    children,
    screenListeners,
    ...rest
  } = options;
  const {
    current: router
  } = React.useRef(createRouter({ ...rest,
    ...(route !== null && route !== void 0 && route.params && route.params.state == null && route.params.initial !== false && typeof route.params.screen === 'string' ? {
      initialRouteName: route.params.screen
    } : null)
  }));
  const routeConfigs = getRouteConfigsFromChildren(children);
  const screens = routeConfigs.reduce((acc, config) => {
    if (config.props.name in acc) {
      throw new Error(`A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '${config.props.name}')`);
    }

    acc[config.props.name] = config;
    return acc;
  }, {});
  const routeNames = routeConfigs.map(config => config.props.name);
  const routeKeyList = routeNames.reduce((acc, curr) => {
    acc[curr] = screens[curr].keys.map(key => key !== null && key !== void 0 ? key : '').join(':');
    return acc;
  }, {});
  const routeParamList = routeNames.reduce((acc, curr) => {
    const {
      initialParams
    } = screens[curr].props;
    acc[curr] = initialParams;
    return acc;
  }, {});
  const routeGetIdList = routeNames.reduce((acc, curr) => Object.assign(acc, {
    [curr]: screens[curr].props.getId
  }), {});

  if (!routeNames.length) {
    throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  }

  const isStateValid = React.useCallback(state => state.type === undefined || state.type === router.type, [router.type]);
  const isStateInitialized = React.useCallback(state => state !== undefined && state.stale === false && isStateValid(state), [isStateValid]);
  const {
    state: currentState,
    getState: getCurrentState,
    setState: setCurrentState,
    setKey,
    getKey,
    getIsInitial
  } = React.useContext(_NavigationStateContext.default);
  const stateCleanedUp = React.useRef(false);
  const cleanUpState = React.useCallback(() => {
    setCurrentState(undefined);
    stateCleanedUp.current = true;
  }, [setCurrentState]);
  const setState = React.useCallback(state => {
    if (stateCleanedUp.current) {
      // State might have been already cleaned up due to unmount
      // We do not want to expose API allowing to override this
      // This would lead to old data preservation on main navigator unmount
      return;
    }

    setCurrentState(state);
  }, [setCurrentState]);
  const [initializedState, isFirstStateInitialization] = React.useMemo(() => {
    var _route$params4;

    const initialRouteParamList = routeNames.reduce((acc, curr) => {
      var _route$params, _route$params2, _route$params3;

      const {
        initialParams
      } = screens[curr].props;
      const initialParamsFromParams = (route === null || route === void 0 ? void 0 : (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.state) == null && (route === null || route === void 0 ? void 0 : (_route$params2 = route.params) === null || _route$params2 === void 0 ? void 0 : _route$params2.initial) !== false && (route === null || route === void 0 ? void 0 : (_route$params3 = route.params) === null || _route$params3 === void 0 ? void 0 : _route$params3.screen) === curr ? route.params.params : undefined;
      acc[curr] = initialParams !== undefined || initialParamsFromParams !== undefined ? { ...initialParams,
        ...initialParamsFromParams
      } : undefined;
      return acc;
    }, {}); // If the current state isn't initialized on first render, we initialize it
    // We also need to re-initialize it if the state passed from parent was changed (maybe due to reset)
    // Otherwise assume that the state was provided as initial state
    // So we need to rehydrate it to make it usable

    if ((currentState === undefined || !isStateValid(currentState)) && (route === null || route === void 0 ? void 0 : (_route$params4 = route.params) === null || _route$params4 === void 0 ? void 0 : _route$params4.state) == null) {
      return [router.getInitialState({
        routeNames,
        routeParamList: initialRouteParamList,
        routeGetIdList
      }), true];
    } else {
      var _route$params$state, _route$params5;

      return [router.getRehydratedState((_route$params$state = route === null || route === void 0 ? void 0 : (_route$params5 = route.params) === null || _route$params5 === void 0 ? void 0 : _route$params5.state) !== null && _route$params$state !== void 0 ? _route$params$state : currentState, {
        routeNames,
        routeParamList: initialRouteParamList,
        routeGetIdList
      }), false];
    } // We explicitly don't include routeNames, route.params etc. in the dep list
    // below. We want to avoid forcing a new state to be calculated in those cases
    // Instead, we handle changes to these in the nextState code below. Note
    // that some changes to routeConfigs are explicitly ignored, such as changes
    // to initialParams
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [currentState, router, isStateValid]);
  const previousRouteKeyListRef = React.useRef(routeKeyList);
  React.useEffect(() => {
    previousRouteKeyListRef.current = routeKeyList;
  });
  const previousRouteKeyList = previousRouteKeyListRef.current;
  let state = // If the state isn't initialized, or stale, use the state we initialized instead
  // The state won't update until there's a change needed in the state we have initalized locally
  // So it'll be `undefined` or stale until the first navigation event happens
  isStateInitialized(currentState) ? currentState : initializedState;
  let nextState = state;

  if (!(0, _isArrayEqual.default)(state.routeNames, routeNames) || !(0, _isRecordEqual.default)(routeKeyList, previousRouteKeyList)) {
    // When the list of route names change, the router should handle it to remove invalid routes
    nextState = router.getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList,
      routeGetIdList,
      routeKeyChanges: Object.keys(routeKeyList).filter(name => previousRouteKeyList.hasOwnProperty(name) && routeKeyList[name] !== previousRouteKeyList[name])
    });
  }

  const previousNestedParamsRef = React.useRef(route === null || route === void 0 ? void 0 : route.params);
  React.useEffect(() => {
    previousNestedParamsRef.current = route === null || route === void 0 ? void 0 : route.params;
  }, [route === null || route === void 0 ? void 0 : route.params]);

  if (route !== null && route !== void 0 && route.params) {
    const previousParams = previousNestedParamsRef.current;
    let action;

    if (typeof route.params.state === 'object' && route.params.state != null && route.params !== previousParams) {
      // If the route was updated with new state, we should reset to it
      action = _routers.CommonActions.reset(route.params.state);
    } else if (typeof route.params.screen === 'string' && (route.params.initial === false && isFirstStateInitialization || route.params !== previousParams)) {
      // If the route was updated with new screen name and/or params, we should navigate there
      action = _routers.CommonActions.navigate({
        name: route.params.screen,
        params: route.params.params,
        path: route.params.path
      });
    } // The update should be limited to current navigator only, so we call the router manually


    const updatedState = action ? router.getStateForAction(nextState, action, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : null;
    nextState = updatedState !== null ? router.getRehydratedState(updatedState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : nextState;
  }

  const shouldUpdate = state !== nextState;
  (0, _useScheduleUpdate.default)(() => {
    if (shouldUpdate) {
      // If the state needs to be updated, we'll schedule an update
      setState(nextState);
    }
  }); // The up-to-date state will come in next render, but we don't need to wait for it
  // We can't use the outdated state since the screens have changed, which will cause error due to mismatched config
  // So we override the state object we return to use the latest state as soon as possible

  state = nextState;
  React.useEffect(() => {
    setKey(navigatorKey);

    if (!getIsInitial()) {
      // If it's not initial render, we need to update the state
      // This will make sure that our container gets notifier of state changes due to new mounts
      // This is necessary for proper screen tracking, URL updates etc.
      setState(nextState);
    }

    return () => {
      // We need to clean up state for this navigator on unmount
      // We do it in a timeout because we need to detect if another navigator mounted in the meantime
      // For example, if another navigator has started rendering, we should skip cleanup
      // Otherwise, our cleanup step will cleanup state for the other navigator and re-initialize it
      setTimeout(() => {
        if (getCurrentState() !== undefined && getKey() === navigatorKey) {
          cleanUpState();
        }
      }, 0);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We initialize this ref here to avoid a new getState getting initialized
  // whenever initializedState changes. We want getState to have access to the
  // latest initializedState, but don't need it to change when that happens

  const initializedStateRef = React.useRef();
  initializedStateRef.current = initializedState;
  const getState = React.useCallback(() => {
    const currentState = getCurrentState();
    return isStateInitialized(currentState) ? currentState : initializedStateRef.current;
  }, [getCurrentState, isStateInitialized]);
  const emitter = (0, _useEventEmitter.default)(e => {
    let routeNames = [];
    let route;

    if (e.target) {
      var _route;

      route = state.routes.find(route => route.key === e.target);

      if ((_route = route) !== null && _route !== void 0 && _route.name) {
        routeNames.push(route.name);
      }
    } else {
      route = state.routes[state.index];
      routeNames.push(...Object.keys(screens).filter(name => {
        var _route2;

        return ((_route2 = route) === null || _route2 === void 0 ? void 0 : _route2.name) === name;
      }));
    }

    if (route == null) {
      return;
    }

    const navigation = descriptors[route.key].navigation;
    const listeners = [].concat( // Get an array of listeners for all screens + common listeners on navigator
    ...[screenListeners, ...routeNames.map(name => {
      const {
        listeners
      } = screens[name].props;
      return listeners;
    })].map(listeners => {
      const map = typeof listeners === 'function' ? listeners({
        route: route,
        navigation
      }) : listeners;
      return map ? Object.keys(map).filter(type => type === e.type).map(type => map === null || map === void 0 ? void 0 : map[type]) : undefined;
    })) // We don't want same listener to be called multiple times for same event
    // So we remove any duplicate functions from the array
    .filter((cb, i, self) => cb && self.lastIndexOf(cb) === i);
    listeners.forEach(listener => listener === null || listener === void 0 ? void 0 : listener(e));
  });
  (0, _useFocusEvents.default)({
    state,
    emitter
  });
  React.useEffect(() => {
    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });
  }, [emitter, state]);
  const {
    listeners: childListeners,
    addListener
  } = (0, _useChildListeners.default)();
  const {
    keyedListeners,
    addKeyedListener
  } = (0, _useKeyedChildListeners.default)();
  const onAction = (0, _useOnAction.default)({
    router,
    getState,
    setState,
    key: route === null || route === void 0 ? void 0 : route.key,
    actionListeners: childListeners.action,
    beforeRemoveListeners: keyedListeners.beforeRemove,
    routerConfigOptions: {
      routeNames,
      routeParamList,
      routeGetIdList
    },
    emitter
  });
  const onRouteFocus = (0, _useOnRouteFocus.default)({
    router,
    key: route === null || route === void 0 ? void 0 : route.key,
    getState,
    setState
  });
  const navigation = (0, _useNavigationHelpers.default)({
    onAction,
    getState,
    emitter,
    router
  });
  (0, _useFocusedListenersChildrenAdapter.default)({
    navigation,
    focusedListeners: childListeners.focus
  });
  (0, _useOnGetState.default)({
    getState,
    getStateListeners: keyedListeners.getState
  });
  const descriptors = (0, _useDescriptors.default)({
    state,
    screens,
    navigation,
    screenOptions: options.screenOptions,
    defaultScreenOptions: options.defaultScreenOptions,
    onAction,
    getState,
    setState,
    onRouteFocus,
    addListener,
    addKeyedListener,
    router,
    // @ts-expect-error: this should have both core and custom events, but too much work right now
    emitter
  });
  (0, _useCurrentRender.default)({
    state,
    navigation,
    descriptors
  });
  const NavigationContent = (0, _useComponent.default)(_NavigationHelpersContext.default.Provider, {
    value: navigation
  });
  return {
    state,
    navigation,
    descriptors,
    NavigationContent
  };
}
//# sourceMappingURL=useNavigationBuilder.js.map