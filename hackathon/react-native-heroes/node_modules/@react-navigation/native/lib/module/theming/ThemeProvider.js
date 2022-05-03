import * as React from 'react';
import ThemeContext from './ThemeContext';
export default function ThemeProvider(_ref) {
  let {
    value,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
}
//# sourceMappingURL=ThemeProvider.js.map