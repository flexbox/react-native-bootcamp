"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Screen;

var _native = require("@react-navigation/native");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _Background = _interopRequireDefault(require("./Background"));

var _getDefaultHeaderHeight = _interopRequireDefault(require("./Header/getDefaultHeaderHeight"));

var _HeaderHeightContext = _interopRequireDefault(require("./Header/HeaderHeightContext"));

var _HeaderShownContext = _interopRequireDefault(require("./Header/HeaderShownContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Screen(props) {
  const dimensions = (0, _reactNativeSafeAreaContext.useSafeAreaFrame)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const isParentHeaderShown = React.useContext(_HeaderShownContext.default);
  const parentHeaderHeight = React.useContext(_HeaderHeightContext.default);
  const {
    focused,
    modal = false,
    header,
    headerShown = true,
    headerTransparent,
    headerStatusBarHeight = isParentHeaderShown ? 0 : insets.top,
    navigation,
    route,
    children,
    style
  } = props;
  const [headerHeight, setHeaderHeight] = React.useState(() => (0, _getDefaultHeaderHeight.default)(dimensions, modal, headerStatusBarHeight));
  return /*#__PURE__*/React.createElement(_Background.default, {
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(_HeaderShownContext.default.Provider, {
    value: isParentHeaderShown || headerShown !== false
  }, /*#__PURE__*/React.createElement(_HeaderHeightContext.default.Provider, {
    value: headerShown ? headerHeight : parentHeaderHeight !== null && parentHeaderHeight !== void 0 ? parentHeaderHeight : 0
  }, children))), headerShown ? /*#__PURE__*/React.createElement(_native.NavigationContext.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(_native.NavigationRouteContext.Provider, {
    value: route
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    onLayout: e => {
      const {
        height
      } = e.nativeEvent.layout;
      setHeaderHeight(height);
    },
    style: headerTransparent ? styles.absolute : null
  }, header))) : null);
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  // This is necessary to avoid applying 'column-reverse' to screen content
  content: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=Screen.js.map