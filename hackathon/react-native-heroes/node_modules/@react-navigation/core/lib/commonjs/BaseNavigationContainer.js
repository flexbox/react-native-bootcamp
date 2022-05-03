"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _routers = require("@react-navigation/routers");

var React = _interopRequireWildcard(require("react"));

var _checkDuplicateRouteNames = _interopRequireDefault(require("./checkDuplicateRouteNames"));

var _checkSerializable = _interopRequireDefault(require("./checkSerializable"));

var _createNavigationContainerRef = require("./createNavigationContainerRef");

var _EnsureSingleNavigator = _interopRequireDefault(require("./EnsureSingleNavigator"));

var _findFocusedRoute = _interopRequireDefault(require("./findFocusedRoute"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _NavigationContainerRefContext = _interopRequireDefault(require("./NavigationContainerRefContext"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _UnhandledActionContext = _interopRequireDefault(require("./UnhandledActionContext"));

var _useChildListeners = _interopRequireDefault(require("./useChildListeners"));

var _useEventEmitter = _interopRequireDefault(require("./useEventEmitter"));

var _useKeyedChildListeners = _interopRequireDefault(require("./useKeyedChildListeners"));

var _useOptionsGetters = _interopRequireDefault(require("./useOptionsGetters"));

var _useScheduleUpdate = require("./useScheduleUpdate");

var _useSyncState = _interopRequireDefault(require("./useSyncState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const serializableWarnings = [];
const duplicateNameWarnings = [];
/**
 * Remove `key` and `routeNames` from the state objects recursively to get partial state.
 *
 * @param state Initial state object.
 */

const getPartialState = state => {
  if (state === undefined) {
    return;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const {
    key,
    routeNames,
    ...partialState
  } = state;
  return { ...partialState,
    stale: true,
    routes: state.routes.map(route => {
      if (route.state === undefined) {
        return route;
      }

      return { ...route,
        state: getPartialState(route.state)
      };
    })
  };
};
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */


const BaseNavigationContainer = /*#__PURE__*/React.forwardRef(function BaseNavigationContainer(_ref, ref) {
  let {
    initialState,
    onStateChange,
    onUnhandledAction,
    independent,
    children
  } = _ref;
  const parent = React.useContext(_NavigationStateContext.default);

  if (!parent.isDefault && !independent) {
    throw new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
  }

  const [state, getState, setState, scheduleUpdate, flushUpdates] = (0, _useSyncState.default)(() => getPartialState(initialState == null ? undefined : initialState));
  const isFirstMountRef = React.useRef(true);
  const navigatorKeyRef = React.useRef();
  const getKey = React.useCallback(() => navigatorKeyRef.current, []);
  const setKey = React.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const {
    listeners,
    addListener
  } = (0, _useChildListeners.default)();
  const {
    keyedListeners,
    addKeyedListener
  } = (0, _useKeyedChildListeners.default)();
  const dispatch = React.useCallback(action => {
    if (listeners.focus[0] == null) {
      console.error(_createNavigationContainerRef.NOT_INITIALIZED_ERROR);
    } else {
      listeners.focus[0](navigation => navigation.dispatch(action));
    }
  }, [listeners.focus]);
  const canGoBack = React.useCallback(() => {
    if (listeners.focus[0] == null) {
      return false;
    }

    const {
      result,
      handled
    } = listeners.focus[0](navigation => navigation.canGoBack());

    if (handled) {
      return result;
    } else {
      return false;
    }
  }, [listeners.focus]);
  const resetRoot = React.useCallback(state => {
    var _state$key, _keyedListeners$getSt, _keyedListeners$getSt2;

    const target = (_state$key = state === null || state === void 0 ? void 0 : state.key) !== null && _state$key !== void 0 ? _state$key : (_keyedListeners$getSt = (_keyedListeners$getSt2 = keyedListeners.getState).root) === null || _keyedListeners$getSt === void 0 ? void 0 : _keyedListeners$getSt.call(_keyedListeners$getSt2).key;

    if (target == null) {
      console.error(_createNavigationContainerRef.NOT_INITIALIZED_ERROR);
    } else {
      listeners.focus[0](navigation => navigation.dispatch({ ..._routers.CommonActions.reset(state),
        target
      }));
    }
  }, [keyedListeners.getState, listeners.focus]);
  const getRootState = React.useCallback(() => {
    var _keyedListeners$getSt3, _keyedListeners$getSt4;

    return (_keyedListeners$getSt3 = (_keyedListeners$getSt4 = keyedListeners.getState).root) === null || _keyedListeners$getSt3 === void 0 ? void 0 : _keyedListeners$getSt3.call(_keyedListeners$getSt4);
  }, [keyedListeners.getState]);
  const getCurrentRoute = React.useCallback(() => {
    const state = getRootState();

    if (state == null) {
      return undefined;
    }

    const route = (0, _findFocusedRoute.default)(state);
    return route;
  }, [getRootState]);
  const emitter = (0, _useEventEmitter.default)();
  const {
    addOptionsGetter,
    getCurrentOptions
  } = (0, _useOptionsGetters.default)({});
  const navigation = React.useMemo(() => ({ ...Object.keys(_routers.CommonActions).reduce((acc, name) => {
      acc[name] = function () {
        return (// @ts-expect-error: this is ok
          dispatch(_routers.CommonActions[name](...arguments))
        );
      };

      return acc;
    }, {}),
    ...emitter.create('root'),
    dispatch,
    resetRoot,
    isFocused: () => true,
    canGoBack,
    getParent: () => undefined,
    getState: () => stateRef.current,
    getRootState,
    getCurrentRoute,
    getCurrentOptions,
    isReady: () => listeners.focus[0] != null
  }), [canGoBack, dispatch, emitter, getCurrentOptions, getCurrentRoute, getRootState, listeners.focus, resetRoot]);
  React.useImperativeHandle(ref, () => navigation, [navigation]);
  const onDispatchAction = React.useCallback((action, noop) => {
    emitter.emit({
      type: '__unsafe_action__',
      data: {
        action,
        noop,
        stack: stackRef.current
      }
    });
  }, [emitter]);
  const lastEmittedOptionsRef = React.useRef();
  const onOptionsChange = React.useCallback(options => {
    if (lastEmittedOptionsRef.current === options) {
      return;
    }

    lastEmittedOptionsRef.current = options;
    emitter.emit({
      type: 'options',
      data: {
        options
      }
    });
  }, [emitter]);
  const stackRef = React.useRef();
  const builderContext = React.useMemo(() => ({
    addListener,
    addKeyedListener,
    onDispatchAction,
    onOptionsChange,
    stackRef
  }), [addListener, addKeyedListener, onDispatchAction, onOptionsChange]);
  const scheduleContext = React.useMemo(() => ({
    scheduleUpdate,
    flushUpdates
  }), [scheduleUpdate, flushUpdates]);
  const isInitialRef = React.useRef(true);
  const getIsInitial = React.useCallback(() => isInitialRef.current, []);
  const context = React.useMemo(() => ({
    state,
    getState,
    setState,
    getKey,
    setKey,
    getIsInitial,
    addOptionsGetter
  }), [state, getState, setState, getKey, setKey, getIsInitial, addOptionsGetter]);
  const onStateChangeRef = React.useRef(onStateChange);
  const stateRef = React.useRef(state);
  React.useEffect(() => {
    isInitialRef.current = false;
    onStateChangeRef.current = onStateChange;
    stateRef.current = state;
  });
  React.useEffect(() => {
    const hydratedState = getRootState();

    if (process.env.NODE_ENV !== 'production') {
      if (hydratedState !== undefined) {
        const serializableResult = (0, _checkSerializable.default)(hydratedState);

        if (!serializableResult.serializable) {
          const {
            location,
            reason
          } = serializableResult;
          let path = '';
          let pointer = hydratedState;
          let params = false;

          for (let i = 0; i < location.length; i++) {
            const curr = location[i];
            const prev = location[i - 1];
            pointer = pointer[curr];

            if (!params && curr === 'state') {
              continue;
            } else if (!params && curr === 'routes') {
              if (path) {
                path += ' > ';
              }
            } else if (!params && typeof curr === 'number' && prev === 'routes') {
              var _pointer;

              path += (_pointer = pointer) === null || _pointer === void 0 ? void 0 : _pointer.name;
            } else if (!params) {
              path += ` > ${curr}`;
              params = true;
            } else {
              if (typeof curr === 'number' || /^[0-9]+$/.test(curr)) {
                path += `[${curr}]`;
              } else if (/^[a-z$_]+$/i.test(curr)) {
                path += `.${curr}`;
              } else {
                path += `[${JSON.stringify(curr)}]`;
              }
            }
          }

          const message = `Non-serializable values were found in the navigation state. Check:\n\n${path} (${reason})\n\nThis can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.`;

          if (!serializableWarnings.includes(message)) {
            serializableWarnings.push(message);
            console.warn(message);
          }
        }

        const duplicateRouteNamesResult = (0, _checkDuplicateRouteNames.default)(hydratedState);

        if (duplicateRouteNamesResult.length) {
          const message = `Found screens with the same name nested inside one another. Check:\n${duplicateRouteNamesResult.map(locations => `\n${locations.join(', ')}`)}\n\nThis can cause confusing behavior during navigation. Consider using unique names for each screen instead.`;

          if (!duplicateNameWarnings.includes(message)) {
            duplicateNameWarnings.push(message);
            console.warn(message);
          }
        }
      }
    }

    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });

    if (!isFirstMountRef.current && onStateChangeRef.current) {
      onStateChangeRef.current(hydratedState);
    }

    isFirstMountRef.current = false;
  }, [getRootState, emitter, state]);
  const defaultOnUnhandledAction = React.useCallback(action => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const payload = action.payload;
    let message = `The action '${action.type}'${payload ? ` with payload ${JSON.stringify(action.payload)}` : ''} was not handled by any navigator.`;

    switch (action.type) {
      case 'NAVIGATE':
      case 'PUSH':
      case 'REPLACE':
      case 'JUMP_TO':
        if (payload !== null && payload !== void 0 && payload.name) {
          message += `\n\nDo you have a screen named '${payload.name}'?\n\nIf you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.`;
        } else {
          message += `\n\nYou need to pass the name of the screen to navigate to.\n\nSee https://reactnavigation.org/docs/navigation-actions for usage.`;
        }

        break;

      case 'GO_BACK':
      case 'POP':
      case 'POP_TO_TOP':
        message += `\n\nIs there any screen to go back to?`;
        break;

      case 'OPEN_DRAWER':
      case 'CLOSE_DRAWER':
      case 'TOGGLE_DRAWER':
        message += `\n\nIs your screen inside a Drawer navigator?`;
        break;
    }

    message += `\n\nThis is a development-only warning and won't be shown in production.`;
    console.error(message);
  }, []);
  let element = /*#__PURE__*/React.createElement(_NavigationContainerRefContext.default.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(_useScheduleUpdate.ScheduleUpdateContext.Provider, {
    value: scheduleContext
  }, /*#__PURE__*/React.createElement(_NavigationBuilderContext.default.Provider, {
    value: builderContext
  }, /*#__PURE__*/React.createElement(_NavigationStateContext.default.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(_UnhandledActionContext.default.Provider, {
    value: onUnhandledAction !== null && onUnhandledAction !== void 0 ? onUnhandledAction : defaultOnUnhandledAction
  }, /*#__PURE__*/React.createElement(_EnsureSingleNavigator.default, null, children))))));

  if (independent) {
    // We need to clear any existing contexts for nested independent container to work correctly
    element = /*#__PURE__*/React.createElement(_NavigationRouteContext.default.Provider, {
      value: undefined
    }, /*#__PURE__*/React.createElement(_NavigationContext.default.Provider, {
      value: undefined
    }, element));
  }

  return element;
});
var _default = BaseNavigationContainer;
exports.default = _default;
//# sourceMappingURL=BaseNavigationContainer.js.map