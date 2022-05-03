function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
let MaterialCommunityIcons;

try {
  // Optionally require vector-icons
  MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default;
} catch (e) {
  let isErrorLogged = false; // Fallback component for icons

  MaterialCommunityIcons = ({
    name,
    color,
    size,
    ...rest
  }) => {
    /* eslint-disable no-console */
    if (!isErrorLogged) {
      if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)) {
        console.error(e);
      }

      console.warn(`Tried to use the icon '${name}' in a component from 'react-native-paper', but 'react-native-vector-icons/MaterialCommunityIcons' could not be loaded.`, `To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.`);
      isErrorLogged = true;
    }

    return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
      style: [styles.icon, {
        color,
        fontSize: size
      }] // @ts-expect-error: Text doesn't support this, but it seems to affect TouchableNativeFeedback
      ,
      pointerEvents: "none",
      selectable: false
    }), "\u25A1");
  };
}

export const accessibilityProps = Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};

const defaultIcon = ({
  name,
  color,
  size,
  direction,
  allowFontScaling
}) => /*#__PURE__*/React.createElement(MaterialCommunityIcons, _extends({
  allowFontScaling: allowFontScaling,
  name: name,
  color: color,
  size: size,
  style: [{
    transform: [{
      scaleX: direction === 'rtl' ? -1 : 1
    }],
    lineHeight: size
  }, styles.icon],
  pointerEvents: "none",
  selectable: false
}, accessibilityProps));

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  }
});
export default defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.js.map