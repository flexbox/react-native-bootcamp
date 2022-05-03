"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Button = _interopRequireDefault(require("./Button"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _Text = _interopRequireDefault(require("./Typography/Text"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DURATION_SHORT = 4000;
const DURATION_MEDIUM = 7000;
const DURATION_LONG = 10000;
/**
 * Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
 * Snackbar by default uses `onSurface` color from theme.
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/snackbar.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Button, Snackbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const onToggleSnackBar = () => setVisible(!visible);
 *
 *   const onDismissSnackBar = () => setVisible(false);
 *
 *   return (
 *     <View style={styles.container}>
 *       <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
 *       <Snackbar
 *         visible={visible}
 *         onDismiss={onDismissSnackBar}
 *         action={{
 *           label: 'Undo',
 *           onPress: () => {
 *             // Do something
 *           },
 *         }}>
 *         Hey there! I'm a Snackbar.
 *       </Snackbar>
 *     </View>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'space-between',
 *   },
 * });
 *
 * export default MyComponent;
 * ```
 */

const Snackbar = _ref => {
  let {
    visible,
    action,
    duration = DURATION_MEDIUM,
    onDismiss,
    children,
    wrapperStyle,
    style,
    theme,
    ...rest
  } = _ref;
  const {
    current: opacity
  } = React.useRef(new _reactNative.Animated.Value(0.0));
  const [hidden, setHidden] = React.useState(!visible);
  const hideTimeout = React.useRef(undefined);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);
  React.useLayoutEffect(() => {
    if (visible) {
      // show
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      setHidden(false);

      _reactNative.Animated.timing(opacity, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start(_ref2 => {
        let {
          finished
        } = _ref2;

        if (finished) {
          const isInfinity = duration === Number.POSITIVE_INFINITY || duration === Number.NEGATIVE_INFINITY;

          if (finished && !isInfinity) {
            hideTimeout.current = setTimeout(onDismiss, duration);
          }
        }
      });
    } else {
      // hide
      if (hideTimeout.current) clearTimeout(hideTimeout.current);

      _reactNative.Animated.timing(opacity, {
        toValue: 0,
        duration: 100 * scale,
        useNativeDriver: true
      }).start(_ref3 => {
        let {
          finished
        } = _ref3;
        if (finished) setHidden(true);
      });
    }
  }, [visible, duration, opacity, scale, onDismiss]);
  const {
    colors,
    roundness
  } = theme;
  if (hidden) return null;
  const {
    style: actionStyle,
    label: actionLabel,
    onPress: onPressAction,
    ...actionProps
  } = action || {};
  return /*#__PURE__*/React.createElement(_reactNative.SafeAreaView, {
    pointerEvents: "box-none",
    style: [styles.wrapper, wrapperStyle]
  }, /*#__PURE__*/React.createElement(_Surface.default, _extends({
    pointerEvents: "box-none",
    accessibilityLiveRegion: "polite",
    style: [styles.container, {
      borderRadius: roundness,
      opacity: opacity,
      transform: [{
        scale: visible ? opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1]
        }) : 1
      }]
    }, {
      backgroundColor: colors.onSurface
    }, style]
  }, rest), /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.content, {
      marginRight: action ? 0 : 16,
      color: colors.surface
    }]
  }, children), action ? /*#__PURE__*/React.createElement(_Button.default, _extends({
    onPress: () => {
      onPressAction === null || onPressAction === void 0 ? void 0 : onPressAction();
      onDismiss();
    },
    style: [styles.button, actionStyle],
    color: colors.accent,
    compact: true,
    mode: "text"
  }, actionProps), actionLabel) : null));
};
/**
 * Show the Snackbar for a short duration.
 */


Snackbar.DURATION_SHORT = DURATION_SHORT;
/**
 * Show the Snackbar for a medium duration.
 */

Snackbar.DURATION_MEDIUM = DURATION_MEDIUM;
/**
 * Show the Snackbar for a long duration.
 */

Snackbar.DURATION_LONG = DURATION_LONG;

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  container: {
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4
  },
  content: {
    marginLeft: 16,
    marginVertical: 14,
    flexWrap: 'wrap',
    flex: 1
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 6
  }
});

var _default = (0, _theming.withTheme)(Snackbar);

exports.default = _default;
//# sourceMappingURL=Snackbar.js.map