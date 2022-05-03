import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import AnimatedText from '../../Typography/AnimatedText';

const InputLabel = props => {
  const {
    parentState,
    labelBackground
  } = props;
  const {
    label,
    error,
    onLayoutAnimatedText,
    hasActiveOutline,
    activeColor,
    placeholderStyle,
    baseLabelTranslateX,
    baseLabelTranslateY,
    font,
    fontSize,
    fontWeight,
    placeholderOpacity,
    wiggleOffsetX,
    labelScale,
    topPosition,
    paddingOffset,
    placeholderColor,
    errorColor,
    labelTranslationXOffset
  } = props.labelProps;
  const labelTranslationX = {
    transform: [{
      // Offset label scale since RN doesn't support transform origin
      translateX: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateX, labelTranslationXOffset || 0]
      })
    }]
  };
  const labelStyle = { ...font,
    fontSize,
    fontWeight,
    transform: [{
      // Wiggle the label when there's an error
      translateX: parentState.error.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, parentState.value && error ? wiggleOffsetX : 0, 0]
      })
    }, {
      // Move label to top
      translateY: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateY, 0]
      })
    }, {
      // Make label smaller
      scale: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [labelScale, 1]
      })
    }]
  };
  return label ?
  /*#__PURE__*/
  // Position colored placeholder and gray placeholder on top of each other and crossfade them
  // This gives the effect of animating the color, but allows us to use native driver
  React.createElement(Animated.View, {
    pointerEvents: "none",
    style: [StyleSheet.absoluteFill, styles.labelContainer, {
      opacity: // Hide the label in minimized state until we measure it's width
      parentState.value || parentState.focused ? parentState.labelLayout.measured ? 1 : 0 : 1
    }, labelTranslationX]
  }, labelBackground === null || labelBackground === void 0 ? void 0 : labelBackground({
    parentState,
    labelStyle,
    labelProps: props.labelProps
  }), /*#__PURE__*/React.createElement(AnimatedText, {
    onLayout: onLayoutAnimatedText,
    style: [placeholderStyle, {
      top: topPosition
    }, labelStyle, paddingOffset || {}, {
      color: activeColor,
      opacity: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [hasActiveOutline ? 1 : 0, 0]
      })
    }],
    numberOfLines: 1
  }, label), /*#__PURE__*/React.createElement(AnimatedText, {
    style: [placeholderStyle, {
      top: topPosition
    }, labelStyle, paddingOffset, {
      color: error && errorColor ? errorColor : placeholderColor,
      opacity: placeholderOpacity
    }],
    numberOfLines: 1
  }, label)) : null;
};

const styles = StyleSheet.create({
  labelContainer: {
    zIndex: 3
  }
});
export default InputLabel;
//# sourceMappingURL=InputLabel.js.map