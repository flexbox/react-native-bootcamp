function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';
// From https://material.io/design/motion/speed.html#duration
const ANIMATION_DURATION = 100;
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for Android, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */

const CheckboxAndroid = _ref => {
  let {
    status,
    theme,
    disabled,
    onPress,
    testID,
    ...rest
  } = _ref;
  const {
    current: scaleAnim
  } = React.useRef(new Animated.Value(1));
  const isFirstRendering = React.useRef(true);
  const {
    animation: {
      scale
    }
  } = theme;
  React.useEffect(() => {
    // Do not run animation on very first rendering
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }

    const checked = status === 'checked';
    Animated.sequence([Animated.timing(scaleAnim, {
      toValue: 0.85,
      duration: checked ? ANIMATION_DURATION * scale : 0,
      useNativeDriver: false
    }), Animated.timing(scaleAnim, {
      toValue: 1,
      duration: checked ? ANIMATION_DURATION * scale : ANIMATION_DURATION * scale * 1.75,
      useNativeDriver: false
    })]).start();
  }, [status, scaleAnim, scale]);
  const checked = status === 'checked';
  const indeterminate = status === 'indeterminate';
  const checkedColor = rest.color || theme.colors.accent;
  const uncheckedColor = rest.uncheckedColor || color(theme.colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
  let rippleColor, checkboxColor;

  if (disabled) {
    rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
    checkboxColor = theme.colors.disabled;
  } else {
    rippleColor = color(checkedColor).fade(0.32).rgb().string();
    checkboxColor = checked ? checkedColor : uncheckedColor;
  }

  const borderWidth = scaleAnim.interpolate({
    inputRange: [0.8, 1],
    outputRange: [7, 0]
  });
  const icon = indeterminate ? 'minus-box' : checked ? 'checkbox-marked' : 'checkbox-blank-outline';
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    borderless: true,
    rippleColor: rippleColor,
    onPress: onPress,
    disabled: disabled // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "checkbox",
    accessibilityState: {
      disabled,
      checked
    },
    accessibilityLiveRegion: "polite",
    style: styles.container,
    testID: testID
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      transform: [{
        scale: scaleAnim
      }]
    }
  }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    allowFontScaling: false,
    name: icon,
    size: 24,
    color: checkboxColor,
    direction: "ltr"
  }), /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.fillContainer]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.fill, {
      borderColor: checkboxColor
    }, {
      borderWidth
    }]
  }))));
};

CheckboxAndroid.displayName = 'Checkbox.Android';
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    width: 36,
    height: 36,
    padding: 6
  },
  fillContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill: {
    height: 14,
    width: 14
  }
});
export default withTheme(CheckboxAndroid); // @component-docs ignore-next-line

const CheckboxAndroidWithTheme = withTheme(CheckboxAndroid); // @component-docs ignore-next-line

export { CheckboxAndroidWithTheme as CheckboxAndroid };
//# sourceMappingURL=CheckboxAndroid.js.map