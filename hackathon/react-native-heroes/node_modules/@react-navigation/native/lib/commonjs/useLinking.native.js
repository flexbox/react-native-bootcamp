"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinking;

var _core = require("@react-navigation/core");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _extractPathFromURL = _interopRequireDefault(require("./extractPathFromURL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let linkingHandlers = [];

function useLinking(ref, _ref) {
  let {
    independent,
    enabled = true,
    prefixes,
    filter,
    config,
    getInitialURL = () => Promise.race([_reactNative.Linking.getInitialURL(), new Promise(resolve => // Timeout in 150ms if `getInitialState` doesn't resolve
    // Workaround for https://github.com/facebook/react-native/issues/25675
    setTimeout(resolve, 150))]),
    subscribe = listener => {
      const callback = _ref2 => {
        let {
          url
        } = _ref2;
        return listener(url);
      };

      const subscription = _reactNative.Linking.addEventListener('url', callback);

      return () => {
        // https://github.com/facebook/react-native/commit/6d1aca806cee86ad76de771ed3a1cc62982ebcd7
        if (subscription !== null && subscription !== void 0 && subscription.remove) {
          subscription.remove();
        } else {
          _reactNative.Linking.removeEventListener('url', callback);
        }
      };
    },
    getStateFromPath = _core.getStateFromPath,
    getActionFromState = _core.getActionFromState
  } = _ref;
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return undefined;
    }

    if (independent) {
      return undefined;
    }

    if (enabled !== false && linkingHandlers.length) {
      console.error(['Looks like you have configured linking in multiple places. This is likely an error since deep links should only be handled in one place to avoid conflicts. Make sure that:', "- You don't have multiple NavigationContainers in the app each with 'linking' enabled", '- Only a single instance of the root component is rendered', _reactNative.Platform.OS === 'android' ? "- You have set 'android:launchMode=singleTask' in the '<activity />' section of the 'AndroidManifest.xml' file to avoid launching multiple instances" : ''].join('\n').trim());
    }

    const handler = Symbol();

    if (enabled !== false) {
      linkingHandlers.push(handler);
    }

    return () => {
      const index = linkingHandlers.indexOf(handler);

      if (index > -1) {
        linkingHandlers.splice(index, 1);
      }
    };
  }, [enabled, independent]); // We store these options in ref to avoid re-creating getInitialState and re-subscribing listeners
  // This lets user avoid wrapping the items in `React.useCallback` or `React.useMemo`
  // Not re-creating `getInitialState` is important coz it makes it easier for the user to use in an effect

  const enabledRef = React.useRef(enabled);
  const prefixesRef = React.useRef(prefixes);
  const filterRef = React.useRef(filter);
  const configRef = React.useRef(config);
  const getInitialURLRef = React.useRef(getInitialURL);
  const getStateFromPathRef = React.useRef(getStateFromPath);
  const getActionFromStateRef = React.useRef(getActionFromState);
  React.useEffect(() => {
    enabledRef.current = enabled;
    prefixesRef.current = prefixes;
    filterRef.current = filter;
    configRef.current = config;
    getInitialURLRef.current = getInitialURL;
    getStateFromPathRef.current = getStateFromPath;
    getActionFromStateRef.current = getActionFromState;
  });
  const getStateFromURL = React.useCallback(url => {
    if (!url || filterRef.current && !filterRef.current(url)) {
      return undefined;
    }

    const path = (0, _extractPathFromURL.default)(prefixesRef.current, url);
    return path ? getStateFromPathRef.current(path, configRef.current) : undefined;
  }, []);
  const getInitialState = React.useCallback(() => {
    let state;

    if (enabledRef.current) {
      const url = getInitialURLRef.current();

      if (url != null && typeof url !== 'string') {
        return url.then(url => {
          const state = getStateFromURL(url);
          return state;
        });
      }

      state = getStateFromURL(url);
    }

    const thenable = {
      then(onfulfilled) {
        return Promise.resolve(onfulfilled ? onfulfilled(state) : state);
      },

      catch() {
        return thenable;
      }

    };
    return thenable;
  }, [getStateFromURL]);
  React.useEffect(() => {
    const listener = url => {
      if (!enabled) {
        return;
      }

      const navigation = ref.current;
      const state = navigation ? getStateFromURL(url) : undefined;

      if (navigation && state) {
        // Make sure that the routes in the state exist in the root navigator
        // Otherwise there's an error in the linking configuration
        const rootState = navigation.getRootState();

        if (state.routes.some(r => !(rootState !== null && rootState !== void 0 && rootState.routeNames.includes(r.name)))) {
          console.warn("The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
          return;
        }

        const action = getActionFromStateRef.current(state, configRef.current);

        if (action !== undefined) {
          try {
            navigation.dispatch(action);
          } catch (e) {
            // Ignore any errors from deep linking.
            // This could happen in case of malformed links, navigation object not being initialized etc.
            console.warn(`An error occurred when trying to handle the link '${url}': ${typeof e === 'object' && e != null && 'message' in e ? // @ts-expect-error: we're already checking for this
            e.message : e}`);
          }
        } else {
          navigation.resetRoot(state);
        }
      }
    };

    return subscribe(listener);
  }, [enabled, getStateFromURL, ref, subscribe]);
  return {
    getInitialState
  };
}
//# sourceMappingURL=useLinking.native.js.map