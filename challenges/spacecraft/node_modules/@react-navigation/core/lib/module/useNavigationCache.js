import { CommonActions } from '@react-navigation/routers';
import * as React from 'react';
import NavigationBuilderContext from './NavigationBuilderContext';

/**
 * Hook to cache navigation objects for each screen in the navigator.
 * It's important to cache them to make sure navigation objects don't change between renders.
 * This lets us apply optimizations like `React.memo` to minimize re-rendering screens.
 */
export default function useNavigationCache(_ref) {
  let {
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  } = _ref;
  const {
    stackRef
  } = React.useContext(NavigationBuilderContext); // Cache object which holds navigation objects for each screen
  // We use `React.useMemo` instead of `React.useRef` coz we want to invalidate it when deps change
  // In reality, these deps will rarely change, if ever

  const cache = React.useMemo(() => ({
    current: {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [getState, navigation, setOptions, router, emitter]);
  const actions = { ...router.actionCreators,
    ...CommonActions
  };
  cache.current = state.routes.reduce((acc, route) => {
    const previous = cache.current[route.key];

    if (previous) {
      // If a cached navigation object already exists, reuse it
      acc[route.key] = previous;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        emit,
        ...rest
      } = navigation;

      const dispatch = thunk => {
        const action = typeof thunk === 'function' ? thunk(getState()) : thunk;

        if (action != null) {
          navigation.dispatch({
            source: route.key,
            ...action
          });
        }
      };

      const withStack = callback => {
        let isStackSet = false;

        try {
          if (process.env.NODE_ENV !== 'production' && stackRef && !stackRef.current) {
            // Capture the stack trace for devtools
            stackRef.current = new Error().stack;
            isStackSet = true;
          }

          callback();
        } finally {
          if (isStackSet && stackRef) {
            stackRef.current = undefined;
          }
        }
      };

      const helpers = Object.keys(actions).reduce((acc, name) => {
        acc[name] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return withStack(() => // @ts-expect-error: name is a valid key, but TypeScript is dumb
          dispatch(actions[name](...args)));
        };

        return acc;
      }, {});
      acc[route.key] = { ...rest,
        ...helpers,
        // FIXME: too much work to fix the types for now
        ...emitter.create(route.key),
        dispatch: thunk => withStack(() => dispatch(thunk)),
        getParent: id => {
          if (id !== undefined && id === rest.getId()) {
            // If the passed id is the same as the current navigation id,
            // we return the cached navigation object for the relevant route
            return acc[route.key];
          }

          return rest.getParent(id);
        },
        setOptions: options => setOptions(o => ({ ...o,
          [route.key]: { ...o[route.key],
            ...options
          }
        })),
        isFocused: () => {
          const state = getState();

          if (state.routes[state.index].key !== route.key) {
            return false;
          } // If the current screen is focused, we also need to check if parent navigator is focused
          // This makes sure that we return the focus state in the whole tree, not just this navigator


          return navigation ? navigation.isFocused() : true;
        }
      };
    }

    return acc;
  }, {});
  return cache.current;
}
//# sourceMappingURL=useNavigationCache.js.map