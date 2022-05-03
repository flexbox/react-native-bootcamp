"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const INDETERMINATE_DURATION = 2000;
const INDETERMINATE_MAX_WIDTH = 0.6;
const {
  isRTL
} = _reactNative.I18nManager;
/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * <div class="screenshots">
 *   <img src="screenshots/progress-bar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */

const ProgressBar = _ref => {
  let {
    color,
    indeterminate,
    style,
    progress = 0,
    visible = true,
    theme,
    ...rest
  } = _ref;
  const {
    current: timer
  } = React.useRef(new _reactNative.Animated.Value(0));
  const {
    current: fade
  } = React.useRef(new _reactNative.Animated.Value(0));
  const [width, setWidth] = React.useState(0);
  const [prevWidth, setPrevWidth] = React.useState(0);
  const indeterminateAnimation = React.useRef(null);
  const {
    scale
  } = theme.animation;
  const startAnimation = React.useCallback(() => {
    // Show progress bar
    _reactNative.Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 1,
      useNativeDriver: true,
      isInteraction: false
    }).start(); // Animate progress bar


    if (indeterminate) {
      if (!indeterminateAnimation.current) {
        indeterminateAnimation.current = _reactNative.Animated.timing(timer, {
          duration: INDETERMINATE_DURATION,
          toValue: 1,
          // Animated.loop does not work if useNativeDriver is true on web
          useNativeDriver: _reactNative.Platform.OS !== 'web',
          isInteraction: false
        });
      } // Reset timer to the beginning


      timer.setValue(0);

      _reactNative.Animated.loop(indeterminateAnimation.current).start();
    } else {
      _reactNative.Animated.timing(timer, {
        duration: 200 * scale,
        toValue: progress ? progress : 0,
        useNativeDriver: true,
        isInteraction: false
      }).start();
    }
  }, [scale, timer, progress, indeterminate, fade]);
  const stopAnimation = React.useCallback(() => {
    // Stop indeterminate animation
    if (indeterminateAnimation.current) {
      indeterminateAnimation.current.stop();
    }

    _reactNative.Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 0,
      useNativeDriver: true,
      isInteraction: false
    }).start();
  }, [fade, scale]);
  React.useEffect(() => {
    if (visible) startAnimation();else stopAnimation();
  }, [visible, startAnimation, stopAnimation]);
  React.useEffect(() => {
    // Start animation the very first time when previously the width was unclear
    if (visible && prevWidth === 0) {
      startAnimation();
    }
  }, [prevWidth, startAnimation, visible]);

  const onLayout = event => {
    setPrevWidth(width);
    setWidth(event.nativeEvent.layout.width);
  };

  const tintColor = color || theme.colors.primary;
  const trackTintColor = (0, _color.default)(tintColor).alpha(0.38).rgb().string();
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    onLayout: onLayout
  }, rest, {
    accessible: true,
    accessibilityRole: "progressbar",
    accessibilityState: {
      busy: visible
    },
    accessibilityValue: indeterminate ? {} : {
      min: 0,
      max: 100,
      now: progress * 100
    }
  }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      backgroundColor: trackTintColor,
      opacity: fade
    }, style]
  }, width ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.progressBar, {
      width,
      backgroundColor: tintColor,
      transform: [{
        translateX: timer.interpolate(indeterminate ? {
          inputRange: [0, 0.5, 1],
          outputRange: [(isRTL ? 1 : -1) * 0.5 * width, (isRTL ? 1 : -1) * 0.5 * INDETERMINATE_MAX_WIDTH * width, (isRTL ? -1 : 1) * 0.7 * width]
        } : {
          inputRange: [0, 1],
          outputRange: [(isRTL ? 1 : -1) * 0.5 * width, 0]
        })
      }, {
        // Workaround for workaround for https://github.com/facebook/react-native/issues/6278
        scaleX: timer.interpolate(indeterminate ? {
          inputRange: [0, 0.5, 1],
          outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001]
        } : {
          inputRange: [0, 1],
          outputRange: [0.0001, 1]
        })
      }]
    }]
  }) : null));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 4,
    overflow: 'hidden'
  },
  progressBar: {
    flex: 1
  }
});

var _default = (0, _theming.withTheme)(ProgressBar);

exports.default = _default;
//# sourceMappingURL=ProgressBar.js.map