function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Platform } from 'react-native';
import { Screen } from 'react-native-screens'; // @ts-ignore file to be used only if `react-native-reanimated` available in the project

import Animated, { useEvent, useSharedValue } from 'react-native-reanimated';
import ReanimatedTransitionProgressContext from './ReanimatedTransitionProgressContext';
const AnimatedScreen = Animated.createAnimatedComponent(Screen);
const ReanimatedNativeStackScreen = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    ...rest
  } = props;
  const progress = useSharedValue(0);
  const closing = useSharedValue(0);
  const goingForward = useSharedValue(0);
  return /*#__PURE__*/React.createElement(AnimatedScreen // @ts-ignore some problems with ref and onTransitionProgressReanimated being "fake" prop for parsing of `useEvent` return value
  , _extends({
    ref: ref,
    onTransitionProgressReanimated: useEvent(event => {
      'worklet';

      progress.value = event.progress;
      closing.value = event.closing;
      goingForward.value = event.goingForward;
    }, [// This should not be necessary, but is not properly managed by `react-native-reanimated`
    // @ts-ignore wrong type
    Platform.OS === 'android' ? 'onTransitionProgress' : 'topTransitionProgress'])
  }, rest), /*#__PURE__*/React.createElement(ReanimatedTransitionProgressContext.Provider, {
    value: {
      progress: progress,
      closing: closing,
      goingForward: goingForward
    }
  }, children));
});
ReanimatedNativeStackScreen.displayName = 'ReanimatedNativeStackScreen';
export default ReanimatedNativeStackScreen;
//# sourceMappingURL=ReanimatedNativeStackScreen.js.map