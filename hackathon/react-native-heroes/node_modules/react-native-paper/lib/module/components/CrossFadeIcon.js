import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Icon, { isValidIcon, isEqualIcon } from './Icon';
import { withTheme } from '../core/theming';

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
  } = React.useRef(new Animated.Value(1));
  const {
    scale
  } = theme.animation;

  if (currentIcon !== source) {
    setPreviousIcon(() => currentIcon);
    setCurrentIcon(() => source);
  }

  React.useEffect(() => {
    if (isValidIcon(previousIcon) && !isEqualIcon(previousIcon, currentIcon)) {
      fade.setValue(1);
      Animated.timing(fade, {
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
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      height: size,
      width: size
    }]
  }, previousIcon ? /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.icon, {
      opacity: opacityPrev,
      transform: [{
        rotate: rotatePrev
      }]
    }]
  }, /*#__PURE__*/React.createElement(Icon, {
    source: previousIcon,
    size: size,
    color: color
  })) : null, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.icon, {
      opacity: opacityNext,
      transform: [{
        rotate: rotateNext
      }]
    }]
  }, /*#__PURE__*/React.createElement(Icon, {
    source: currentIcon,
    size: size,
    color: color
  })));
};

export default withTheme(CrossFadeIcon);
const styles = StyleSheet.create({
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