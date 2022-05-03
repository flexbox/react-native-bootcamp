"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResourceSavingScene;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FAR_FAR_AWAY = 30000; // this should be big enough to move the whole view out of its container

function ResourceSavingScene(_ref) {
  let {
    visible,
    children,
    style,
    ...rest
  } = _ref;

  if (_reactNative.Platform.OS === 'web') {
    return /*#__PURE__*/React.createElement(_reactNative.View // @ts-expect-error: hidden exists on web, but not in React Native
    , _extends({
      hidden: !visible,
      style: [{
        display: visible ? 'flex' : 'none'
      }, styles.container, style],
      pointerEvents: visible ? 'auto' : 'none'
    }, rest), children);
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style] // box-none doesn't seem to work properly on Android
    ,
    pointerEvents: visible ? 'auto' : 'none'
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    collapsable: false,
    removeClippedSubviews: // On iOS & macOS, set removeClippedSubviews to true only when not focused
    // This is an workaround for a bug where the clipped view never re-appears
    _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'macos' ? !visible : true,
    pointerEvents: visible ? 'auto' : 'none',
    style: visible ? styles.attached : styles.detached
  }, children));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  attached: {
    flex: 1
  },
  detached: {
    flex: 1,
    top: FAR_FAR_AWAY
  }
});
//# sourceMappingURL=ResourceSavingView.js.map