"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_INITIALIZED_ERROR = void 0;
exports.default = createNavigationContainerRef;

var _routers = require("@react-navigation/routers");

const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
exports.NOT_INITIALIZED_ERROR = NOT_INITIALIZED_ERROR;

function createNavigationContainerRef() {
  const methods = [...Object.keys(_routers.CommonActions), 'addListener', 'removeListener', 'resetRoot', 'dispatch', 'isFocused', 'canGoBack', 'getRootState', 'getState', 'getParent', 'getCurrentRoute', 'getCurrentOptions'];
  const listeners = {};

  const removeListener = (event, callback) => {
    if (listeners[event]) {
      listeners[event] = listeners[event].filter(cb => cb !== callback);
    }
  };

  let current = null;
  const ref = {
    get current() {
      return current;
    },

    set current(value) {
      current = value;

      if (value != null) {
        Object.entries(listeners).forEach(_ref => {
          let [event, callbacks] = _ref;
          callbacks.forEach(callback => {
            value.addListener(event, callback);
          });
        });
      }
    },

    isReady: () => {
      if (current == null) {
        return false;
      }

      return current.isReady();
    },
    ...methods.reduce((acc, name) => {
      acc[name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (current == null) {
          switch (name) {
            case 'addListener':
              {
                const [event, callback] = args;
                listeners[event] = listeners[event] || [];
                listeners[event].push(callback);
                return () => removeListener(event, callback);
              }

            case 'removeListener':
              {
                const [event, callback] = args;
                removeListener(event, callback);
                break;
              }

            default:
              console.error(NOT_INITIALIZED_ERROR);
          }
        } else {
          // @ts-expect-error: this is ok
          return current[name](...args);
        }
      };

      return acc;
    }, {})
  };
  return ref;
}
//# sourceMappingURL=createNavigationContainerRef.js.map