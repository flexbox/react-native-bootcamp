"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BaseNavigationContainer: true,
  createNavigationContainerRef: true,
  createNavigatorFactory: true,
  CurrentRenderContext: true,
  findFocusedRoute: true,
  getActionFromState: true,
  getFocusedRouteNameFromRoute: true,
  getPathFromState: true,
  getStateFromPath: true,
  NavigationContainerRefContext: true,
  NavigationContext: true,
  NavigationHelpersContext: true,
  NavigationRouteContext: true,
  useFocusEffect: true,
  useIsFocused: true,
  useNavigation: true,
  useNavigationBuilder: true,
  useNavigationContainerRef: true,
  useNavigationState: true,
  useRoute: true,
  validatePathConfig: true
};
Object.defineProperty(exports, "BaseNavigationContainer", {
  enumerable: true,
  get: function () {
    return _BaseNavigationContainer.default;
  }
});
Object.defineProperty(exports, "CurrentRenderContext", {
  enumerable: true,
  get: function () {
    return _CurrentRenderContext.default;
  }
});
Object.defineProperty(exports, "NavigationContainerRefContext", {
  enumerable: true,
  get: function () {
    return _NavigationContainerRefContext.default;
  }
});
Object.defineProperty(exports, "NavigationContext", {
  enumerable: true,
  get: function () {
    return _NavigationContext.default;
  }
});
Object.defineProperty(exports, "NavigationHelpersContext", {
  enumerable: true,
  get: function () {
    return _NavigationHelpersContext.default;
  }
});
Object.defineProperty(exports, "NavigationRouteContext", {
  enumerable: true,
  get: function () {
    return _NavigationRouteContext.default;
  }
});
Object.defineProperty(exports, "createNavigationContainerRef", {
  enumerable: true,
  get: function () {
    return _createNavigationContainerRef.default;
  }
});
Object.defineProperty(exports, "createNavigatorFactory", {
  enumerable: true,
  get: function () {
    return _createNavigatorFactory.default;
  }
});
Object.defineProperty(exports, "findFocusedRoute", {
  enumerable: true,
  get: function () {
    return _findFocusedRoute.default;
  }
});
Object.defineProperty(exports, "getActionFromState", {
  enumerable: true,
  get: function () {
    return _getActionFromState.default;
  }
});
Object.defineProperty(exports, "getFocusedRouteNameFromRoute", {
  enumerable: true,
  get: function () {
    return _getFocusedRouteNameFromRoute.default;
  }
});
Object.defineProperty(exports, "getPathFromState", {
  enumerable: true,
  get: function () {
    return _getPathFromState.default;
  }
});
Object.defineProperty(exports, "getStateFromPath", {
  enumerable: true,
  get: function () {
    return _getStateFromPath.default;
  }
});
Object.defineProperty(exports, "useFocusEffect", {
  enumerable: true,
  get: function () {
    return _useFocusEffect.default;
  }
});
Object.defineProperty(exports, "useIsFocused", {
  enumerable: true,
  get: function () {
    return _useIsFocused.default;
  }
});
Object.defineProperty(exports, "useNavigation", {
  enumerable: true,
  get: function () {
    return _useNavigation.default;
  }
});
Object.defineProperty(exports, "useNavigationBuilder", {
  enumerable: true,
  get: function () {
    return _useNavigationBuilder.default;
  }
});
Object.defineProperty(exports, "useNavigationContainerRef", {
  enumerable: true,
  get: function () {
    return _useNavigationContainerRef.default;
  }
});
Object.defineProperty(exports, "useNavigationState", {
  enumerable: true,
  get: function () {
    return _useNavigationState.default;
  }
});
Object.defineProperty(exports, "useRoute", {
  enumerable: true,
  get: function () {
    return _useRoute.default;
  }
});
Object.defineProperty(exports, "validatePathConfig", {
  enumerable: true,
  get: function () {
    return _validatePathConfig.default;
  }
});

var _BaseNavigationContainer = _interopRequireDefault(require("./BaseNavigationContainer"));

var _createNavigationContainerRef = _interopRequireDefault(require("./createNavigationContainerRef"));

var _createNavigatorFactory = _interopRequireDefault(require("./createNavigatorFactory"));

var _CurrentRenderContext = _interopRequireDefault(require("./CurrentRenderContext"));

var _findFocusedRoute = _interopRequireDefault(require("./findFocusedRoute"));

var _getActionFromState = _interopRequireDefault(require("./getActionFromState"));

var _getFocusedRouteNameFromRoute = _interopRequireDefault(require("./getFocusedRouteNameFromRoute"));

var _getPathFromState = _interopRequireDefault(require("./getPathFromState"));

var _getStateFromPath = _interopRequireDefault(require("./getStateFromPath"));

var _NavigationContainerRefContext = _interopRequireDefault(require("./NavigationContainerRefContext"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _NavigationHelpersContext = _interopRequireDefault(require("./NavigationHelpersContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _useFocusEffect = _interopRequireDefault(require("./useFocusEffect"));

var _useIsFocused = _interopRequireDefault(require("./useIsFocused"));

var _useNavigation = _interopRequireDefault(require("./useNavigation"));

var _useNavigationBuilder = _interopRequireDefault(require("./useNavigationBuilder"));

var _useNavigationContainerRef = _interopRequireDefault(require("./useNavigationContainerRef"));

var _useNavigationState = _interopRequireDefault(require("./useNavigationState"));

var _useRoute = _interopRequireDefault(require("./useRoute"));

var _validatePathConfig = _interopRequireDefault(require("./validatePathConfig"));

var _routers = require("@react-navigation/routers");

Object.keys(_routers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _routers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _routers[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map