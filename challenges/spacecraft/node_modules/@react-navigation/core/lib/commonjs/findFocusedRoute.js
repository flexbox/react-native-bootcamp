"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findFocusedRoute;

function findFocusedRoute(state) {
  var _current2, _current$index3, _current3;

  let current = state;

  while (((_current = current) === null || _current === void 0 ? void 0 : _current.routes[(_current$index = current.index) !== null && _current$index !== void 0 ? _current$index : 0].state) != null) {
    var _current, _current$index, _current$index2;

    current = current.routes[(_current$index2 = current.index) !== null && _current$index2 !== void 0 ? _current$index2 : 0].state;
  }

  const route = (_current2 = current) === null || _current2 === void 0 ? void 0 : _current2.routes[(_current$index3 = (_current3 = current) === null || _current3 === void 0 ? void 0 : _current3.index) !== null && _current$index3 !== void 0 ? _current$index3 : 0];
  return route;
}
//# sourceMappingURL=findFocusedRoute.js.map