"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StackRouter;
exports.StackActions = void 0;

var _nonSecure = require("nanoid/non-secure");

var _BaseRouter = _interopRequireDefault(require("./BaseRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StackActions = {
  replace(name, params) {
    return {
      type: 'REPLACE',
      payload: {
        name,
        params
      }
    };
  },

  push(name, params) {
    return {
      type: 'PUSH',
      payload: {
        name,
        params
      }
    };
  },

  pop(count = 1) {
    return {
      type: 'POP',
      payload: {
        count
      }
    };
  },

  popToTop() {
    return {
      type: 'POP_TO_TOP'
    };
  }

};
exports.StackActions = StackActions;

function StackRouter(options) {
  const router = { ..._BaseRouter.default,
    type: 'stack',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
      return {
        stale: false,
        type: 'stack',
        key: `stack-${(0, _nonSecure.nanoid)()}`,
        index: 0,
        routeNames,
        routes: [{
          key: `${initialRouteName}-${(0, _nonSecure.nanoid)()}`,
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        }]
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      let state = partialState;

      if (state.stale === false) {
        return state;
      }

      const routes = state.routes.filter(route => routeNames.includes(route.name)).map(route => ({ ...route,
        key: route.key || `${route.name}-${(0, _nonSecure.nanoid)()}`,
        params: routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
          ...route.params
        } : route.params
      }));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined ? options.initialRouteName : routeNames[0];
        routes.push({
          key: `${initialRouteName}-${(0, _nonSecure.nanoid)()}`,
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return {
        stale: false,
        type: 'stack',
        key: `stack-${(0, _nonSecure.nanoid)()}`,
        index: routes.length - 1,
        routeNames,
        routes
      };
    },

    getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList,
      routeKeyChanges
    }) {
      const routes = state.routes.filter(route => routeNames.includes(route.name) && !routeKeyChanges.includes(route.name));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
        routes.push({
          key: `${initialRouteName}-${(0, _nonSecure.nanoid)()}`,
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return { ...state,
        routeNames,
        routes,
        index: Math.min(state.index, routes.length - 1)
      };
    },

    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);

      if (index === -1 || index === state.index) {
        return state;
      }

      return { ...state,
        index,
        routes: state.routes.slice(0, index + 1)
      };
    },

    getStateForAction(state, action, options) {
      const {
        routeParamList
      } = options;

      switch (action.type) {
        case 'REPLACE':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index === -1) {
              return null;
            }

            const {
              name,
              key,
              params
            } = action.payload;

            if (!state.routeNames.includes(name)) {
              return null;
            }

            return { ...state,
              routes: state.routes.map((route, i) => i === index ? {
                key: key !== undefined ? key : `${name}-${(0, _nonSecure.nanoid)()}`,
                name,
                params: routeParamList[name] !== undefined ? { ...routeParamList[name],
                  ...params
                } : params
              } : route)
            };
          }

        case 'PUSH':
          if (state.routeNames.includes(action.payload.name)) {
            const getId = options.routeGetIdList[action.payload.name];
            const id = getId === null || getId === void 0 ? void 0 : getId({
              params: action.payload.params
            });
            const route = id ? state.routes.find(route => route.name === action.payload.name && id === (getId === null || getId === void 0 ? void 0 : getId({
              params: route.params
            }))) : undefined;
            let routes;

            if (route) {
              routes = state.routes.filter(r => r.key !== route.key);
              routes.push({ ...route,
                params: routeParamList[action.payload.name] !== undefined ? { ...routeParamList[action.payload.name],
                  ...action.payload.params
                } : action.payload.params
              });
            } else {
              routes = [...state.routes, {
                key: `${action.payload.name}-${(0, _nonSecure.nanoid)()}`,
                name: action.payload.name,
                params: routeParamList[action.payload.name] !== undefined ? { ...routeParamList[action.payload.name],
                  ...action.payload.params
                } : action.payload.params
              }];
            }

            return { ...state,
              index: routes.length - 1,
              routes
            };
          }

          return null;

        case 'POP':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index > 0) {
              const count = Math.max(index - action.payload.count + 1, 1);
              const routes = state.routes.slice(0, count).concat(state.routes.slice(index + 1));
              return { ...state,
                index: routes.length - 1,
                routes
              };
            }

            return null;
          }

        case 'POP_TO_TOP':
          return router.getStateForAction(state, {
            type: 'POP',
            payload: {
              count: state.routes.length - 1
            }
          }, options);

        case 'NAVIGATE':
          if (action.payload.name !== undefined && !state.routeNames.includes(action.payload.name)) {
            return null;
          }

          if (action.payload.key || action.payload.name) {
            var _action$payload$path;

            // If the route already exists, navigate to that
            let index = -1;
            const getId = // `getId` and `key` can't be used together
            action.payload.key === undefined && action.payload.name !== undefined ? options.routeGetIdList[action.payload.name] : undefined;
            const id = getId === null || getId === void 0 ? void 0 : getId({
              params: action.payload.params
            });

            if (id) {
              index = state.routes.findIndex(route => route.name === action.payload.name && id === (getId === null || getId === void 0 ? void 0 : getId({
                params: route.params
              })));
            } else if (state.routes[state.index].name === action.payload.name && action.payload.key === undefined || state.routes[state.index].key === action.payload.key) {
              index = state.index;
            } else {
              for (let i = state.routes.length - 1; i >= 0; i--) {
                if (state.routes[i].name === action.payload.name && action.payload.key === undefined || state.routes[i].key === action.payload.key) {
                  index = i;
                  break;
                }
              }
            }

            if (index === -1 && action.payload.key && action.payload.name === undefined) {
              return null;
            }

            if (index === -1 && action.payload.name !== undefined) {
              var _action$payload$key;

              const routes = [...state.routes, {
                key: (_action$payload$key = action.payload.key) !== null && _action$payload$key !== void 0 ? _action$payload$key : `${action.payload.name}-${(0, _nonSecure.nanoid)()}`,
                name: action.payload.name,
                path: action.payload.path,
                params: routeParamList[action.payload.name] !== undefined ? { ...routeParamList[action.payload.name],
                  ...action.payload.params
                } : action.payload.params
              }];
              return { ...state,
                routes,
                index: routes.length - 1
              };
            }

            const route = state.routes[index];
            let params;

            if (action.payload.merge) {
              params = action.payload.params !== undefined || routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
                ...route.params,
                ...action.payload.params
              } : route.params;
            } else {
              params = routeParamList[route.name] !== undefined ? { ...routeParamList[route.name],
                ...action.payload.params
              } : action.payload.params;
            }

            return { ...state,
              index,
              routes: [...state.routes.slice(0, index), params !== route.params || action.payload.path && action.payload.path !== route.path ? { ...route,
                path: (_action$payload$path = action.payload.path) !== null && _action$payload$path !== void 0 ? _action$payload$path : route.path,
                params
              } : state.routes[index]]
            };
          }

          return null;

        case 'GO_BACK':
          if (state.index > 0) {
            return router.getStateForAction(state, {
              type: 'POP',
              payload: {
                count: 1
              },
              target: action.target,
              source: action.source
            }, options);
          }

          return null;

        default:
          return _BaseRouter.default.getStateForAction(state, action);
      }
    },

    actionCreators: StackActions
  };
  return router;
}
//# sourceMappingURL=StackRouter.js.map