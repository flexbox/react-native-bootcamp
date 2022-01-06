"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Icon = _interopRequireWildcard(require("./Icon"));

var _theming = require("../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CrossFadeIcon = ({
  color,
  size,
  source,
  theme
}) => {
  const [currentIcon, setCurrentIcon] = React.useState(() => source);
  const [previousIcon, setPreviousIcon] = React.useState(null);
  const {
    current: fade
  } = React.useRef(new _reactNative.Animated.Value(1));
  const {
    scale
  } = theme.animation;

  if (currentIcon !== source) {
    setPreviousIcon(() => currentIcon);
    setCurrentIcon(() => source);
  }

  React.useEffect(() => {
    if ((0, _Icon.isValidIcon)(previousIcon) && !(0, _Icon.isEqualIcon)(previousIcon, currentIcon)) {
      fade.setValue(1);

      _reactNative.Animated.timing(fade, {
        duration: scale * 200,
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }, [currentIcon, previousIcon, fade, scale]);
  const opacityPrev = fade;
  const opacityNext = previousIcon ? fade.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  }) : 1;
  const rotatePrev = fade.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg']
  });
  const rotateNext = previousIcon ? fade.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg']
  }) : '0deg';
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, {
      height: size,
      width: size
    }]
  }, previousIcon ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.icon, {
      opacity: opacityPrev,
      transform: [{
        rotate: rotatePrev
      }]
    }]
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: previousIcon,
    size: size,
    color: color
  })) : null, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.icon, {
      opacity: opacityNext,
      transform: [{
        rotate: rotateNext
      }]
    }]
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: currentIcon,
    size: size,
    color: color
  })));
};

var _default = (0, _theming.withTheme)(CrossFadeIcon);

exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
//# sourceMappingURL=CrossFadeIcon.js.map