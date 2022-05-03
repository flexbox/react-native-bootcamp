import { getActionFromState, getStateFromPath, NavigationContainerRefContext } from '@react-navigation/core';
import * as React from 'react';
import LinkingContext from './LinkingContext';
export default function useLinkTo() {
  const navigation = React.useContext(NavigationContainerRefContext);
  const linking = React.useContext(LinkingContext);
  const linkTo = React.useCallback(to => {
    if (navigation === undefined) {
      throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    }

    if (typeof to !== 'string') {
      // @ts-expect-error: This is fine
      navigation.navigate(to.screen, to.params);
      return;
    }

    if (!to.startsWith('/')) {
      throw new Error(`The path must start with '/' (${to}).`);
    }

    const {
      options
    } = linking;
    const state = options !== null && options !== void 0 && options.getStateFromPath ? options.getStateFromPath(to, options.config) : getStateFromPath(to, options === null || options === void 0 ? void 0 : options.config);

    if (state) {
      const action = getActionFromState(state, options === null || options === void 0 ? void 0 : options.config);

      if (action !== undefined) {
        navigation.dispatch(action);
      } else {
        navigation.reset(state);
      }
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking, navigation]);
  return linkTo;
}
//# sourceMappingURL=useLinkTo.js.map