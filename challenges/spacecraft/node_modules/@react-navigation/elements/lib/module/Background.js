function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
export default function Background(_ref) {
  let {
    style,
    ...rest
  } = _ref;
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [{
      flex: 1,
      backgroundColor: colors.background
    }, style]
  }));
}
//# sourceMappingURL=Background.js.map