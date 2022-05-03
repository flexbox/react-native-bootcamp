"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigationHelpers;

var _routers = require("@react-navigation/routers");

var React = _interopRequireWildcard(require("react"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _types = require("./types");

var _UnhandledActionContext = _interopRequireDefault(require("./UnhandledActionContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions
_types.PrivateValueStore;

/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
function useNavigationHelpers(_ref) {
  let {
    id: navigatorId,
    onAction,
    getState,
    emitter,
    router
  } = _ref;
  const onUnhandledAction = React.useContext(_UnhandledActionContext.default);
  const parentNavigationHelpers = React.useContext(_NavigationContext.default);
  return React.useMemo(() => {
    const dispatch = op => {
      const action = typeof op === 'function' ? op(getState()) : op;
      const handled = onAction(action);

      if (!handled) {
        onUnhandledAction === null || onUnhandledAction === void 0 ? void 0 : onUnhandledAction(action);
      }
    };

    const actions = { ...router.actionCreators,
      ..._routers.CommonActions
    };
    const helpers = Object.keys(actions).reduce((acc, name) => {
      // @ts-expect-error: name is a valid key, but TypeScript is dumb
      acc[name] = function () {
        return dispatch(actions[name](...arguments));
      };

      return acc;
    }, {});
    const navigationHelpers = { ...parentNavigationHelpers,
      ...helpers,
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, _routers.CommonActions.goBack(), {
          routeNames: state.routeNames,
          routeParamList: {},
          routeGetIdList: {}
        }) !== null || (parentNavigationHelpers === null || parentNavigationHelpers === void 0 ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      getId: () => navigatorId,
      getParent: id => {
        if (id !== undefined) {
          let current = navigationHelpers;

          while (current && id !== current.getId()) {
            current = current.getParent();
          }

          return current;
        }

        return parentNavigationHelpers;
      },
      getState
    };
    return navigationHelpers;
  }, [navigatorId, emitter.emit, getState, onAction, onUnhandledAction, parentNavigationHelpers, router]);
}
//# sourceMappingURL=useNavigationHelpers.js.map