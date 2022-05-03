"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class BottomNavigationRouteScreen extends _react.default.Component {
  render() {
    const {
      style,
      index,
      children,
      visibility,
      ...rest
    } = this.props;
    const display = visibility === 0 ? 'none' : 'flex';
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
      testID: `RouteScreen: ${index}`,
      style: [style, {
        display
      }]
    }, rest), children);
  }

}

var _default = _reactNative.Animated.createAnimatedComponent(BottomNavigationRouteScreen);

exports.default = _default;
//# sourceMappingURL=BottomNavigationRouteScreen.js.map