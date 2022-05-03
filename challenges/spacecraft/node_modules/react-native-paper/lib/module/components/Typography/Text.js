function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import { withTheme } from '../../core/theming';

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text = (_ref, ref) => {
  let {
    style,
    theme,
    ...rest
  } = _ref;
  const root = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;

      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  return /*#__PURE__*/React.createElement(NativeText, _extends({}, rest, {
    ref: root,
    style: [{ ...theme.fonts.regular,
      color: theme.colors.text
    }, styles.text, style]
  }));
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default withTheme( /*#__PURE__*/React.forwardRef(Text));
//# sourceMappingURL=Text.js.map