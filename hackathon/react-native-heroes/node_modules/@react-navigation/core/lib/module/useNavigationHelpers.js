import { CommonActions } from '@react-navigation/routers';
import * as React from 'react';
import NavigationContext from './NavigationContext';
import { PrivateValueStore } from './types';
import UnhandledActionContext from './UnhandledActionContext';
// This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions
PrivateValueStore;

/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
export default function useNavigationHelpers(_ref) {
  let {
    onAction,
    getState,
    emitter,
    router
  } = _ref;
  const onUnhandledAction = React.useContext(UnhandledActionContext);
  const parentNavigationHelpers = React.useContext(NavigationContext);
  return React.useMemo(() => {
    const dispatch = op => {
      const action = typeof op === 'function' ? op(getState()) : op;
      const handled = onAction(action);

      if (!handled) {
        onUnhandledAction === null || onUnhandledAction === void 0 ? void 0 : onUnhandledAction(action);
      }
    };

    const actions = { ...router.actionCreators,
      ...CommonActions
    };
    const helpers = Object.keys(actions).reduce((acc, name) => {
      // @ts-expect-error: name is a valid key, but TypeScript is dumb
      acc[name] = function () {
        return dispatch(actions[name](...arguments));
      };

      return acc;
    }, {});
    return { ...parentNavigationHelpers,
      ...helpers,
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, CommonActions.goBack(), {
          routeNames: state.routeNames,
          routeParamList: {},
          routeGetIdList: {}
        }) !== null || (parentNavigationHelpers === null || parentNavigationHelpers === void 0 ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      getParent: () => parentNavigationHelpers,
      getState
    };
  }, [emitter.emit, getState, onAction, onUnhandledAction, parentNavigationHelpers, router]);
}
//# sourceMappingURL=useNavigationHelpers.js.map