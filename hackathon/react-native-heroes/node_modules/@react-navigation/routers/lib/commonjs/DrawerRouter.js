"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerRouter;
exports.DrawerActions = void 0;

var _nonSecure = require("nanoid/non-secure");

var _TabRouter = _interopRequireWildcard(require("./TabRouter"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DrawerActions = { ..._TabRouter.TabActions,

  openDrawer() {
    return {
      type: 'OPEN_DRAWER'
    };
  },

  closeDrawer() {
    return {
      type: 'CLOSE_DRAWER'
    };
  },

  toggleDrawer() {
    return {
      type: 'TOGGLE_DRAWER'
    };
  }

};
exports.DrawerActions = DrawerActions;

function DrawerRouter({
  defaultStatus = 'closed',
  ...rest
}) {
  const router = (0, _TabRouter.default)(rest);

  const isDrawerInHistory = state => {
    var _state$history;

    return Boolean((_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.some(it => it.type === 'drawer'));
  };

  const addDrawerToHistory = state => {
    if (isDrawerInHistory(state)) {
      return state;
    }

    return { ...state,
      history: [...state.history, {
        type: 'drawer',
        status: defaultStatus === 'open' ? 'closed' : 'open'
      }]
    };
  };

  const removeDrawerFromHistory = state => {
    if (!isDrawerInHistory(state)) {
      return state;
    }

    return { ...state,
      history: state.history.filter(it => it.type !== 'drawer')
    };
  };

  const openDrawer = state => {
    if (defaultStatus === 'open') {
      return removeDrawerFromHistory(state);
    }

    return addDrawerToHistory(state);
  };

  const closeDrawer = state => {
    if (defaultStatus === 'open') {
      return addDrawerToHistory(state);
    }

    return removeDrawerFromHistory(state);
  };

  return { ...router,
    type: 'drawer',

    getInitialState({
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      const state = router.getInitialState({
        routeNames,
        routeParamList,
        routeGetIdList
      });
      return { ...state,
        default: defaultStatus,
        stale: false,
        type: 'drawer',
        key: `drawer-${(0, _nonSecure.nanoid)()}`
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      if (partialState.stale === false) {
        return partialState;
      }

      let state = router.getRehydratedState(partialState, {
        routeNames,
        routeParamList,
        routeGetIdList
      });

      if (isDrawerInHistory(partialState)) {
        // Re-sync the drawer entry in history to correct it if it was wrong
        state = removeDrawerFromHistory(state);
        state = addDrawerToHistory(state);
      }

      return { ...state,
        default: defaultStatus,
        type: 'drawer',
        key: `drawer-${(0, _nonSecure.nanoid)()}`
      };
    },

    getStateForRouteFocus(state, key) {
      const result = router.getStateForRouteFocus(state, key);
      return closeDrawer(result);
    },

    getStateForAction(state, action, options) {
      switch (action.type) {
        case 'OPEN_DRAWER':
          return openDrawer(state);

        case 'CLOSE_DRAWER':
          return closeDrawer(state);

        case 'TOGGLE_DRAWER':
          if (isDrawerInHistory(state)) {
            return removeDrawerFromHistory(state);
          }

          return addDrawerToHistory(state);

        case 'JUMP_TO':
        case 'NAVIGATE':
          {
            const result = router.getStateForAction(state, action, options);

            if (result != null && result.index !== state.index) {
              return closeDrawer(result);
            }

            return result;
          }

        case 'GO_BACK':
          if (isDrawerInHistory(state)) {
            return removeDrawerFromHistory(state);
          }

          return router.getStateForAction(state, action, options);

        default:
          return router.getStateForAction(state, action, options);
      }
    },

    actionCreators: DrawerActions
  };
}
//# sourceMappingURL=DrawerRouter.js.map