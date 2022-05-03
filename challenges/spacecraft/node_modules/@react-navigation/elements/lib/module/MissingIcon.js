import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
export default function MissingIcon(_ref) {
  let {
    color,
    size,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, {
    style: [styles.icon, {
      color,
      fontSize: size
    }, style]
  }, "\u23F7");
}
const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=MissingIcon.js.map