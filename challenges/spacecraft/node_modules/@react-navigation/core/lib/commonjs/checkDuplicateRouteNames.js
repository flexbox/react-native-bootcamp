"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkDuplicateRouteNames;

function checkDuplicateRouteNames(state) {
  const duplicates = [];

  const getRouteNames = (location, state) => {
    state.routes.forEach(route => {
      var _route$state, _route$state$routeNam;

      const currentLocation = location ? `${location} > ${route.name}` : route.name;
      (_route$state = route.state) === null || _route$state === void 0 ? void 0 : (_route$state$routeNam = _route$state.routeNames) === null || _route$state$routeNam === void 0 ? void 0 : _route$state$routeNam.forEach(routeName => {
        if (routeName === route.name) {
          duplicates.push([currentLocation, `${currentLocation} > ${route.name}`]);
        }
      });

      if (route.state) {
        getRouteNames(currentLocation, route.state);
      }
    });
  };

  getRouteNames('', state);
  return duplicates;
}
//# sourceMappingURL=checkDuplicateRouteNames.js.map