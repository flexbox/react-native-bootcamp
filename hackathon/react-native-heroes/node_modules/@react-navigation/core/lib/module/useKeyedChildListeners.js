import * as React from 'react';

/**
 * Hook which lets child navigators add getters to be called for obtaining rehydrated state.
 */
export default function useKeyedChildListeners() {
  const {
    current: keyedListeners
  } = React.useRef({
    getState: {},
    beforeRemove: {}
  });
  const addKeyedListener = React.useCallback((type, key, listener) => {
    keyedListeners[type][key] = listener;
    return () => {
      keyedListeners[type][key] = undefined;
    };
  }, [keyedListeners]);
  return {
    keyedListeners,
    addKeyedListener
  };
}
//# sourceMappingURL=useKeyedChildListeners.js.map