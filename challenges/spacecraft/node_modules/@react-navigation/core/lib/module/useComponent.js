function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
export default function useComponent(Component, props) {
  const propsRef = React.useRef(props); // Normally refs shouldn't be mutated in render
  // But we return a component which will be rendered
  // So it's just for immediate consumption

  propsRef.current = props;
  React.useEffect(() => {
    propsRef.current = null;
  });
  return React.useRef(rest => {
    const props = propsRef.current;

    if (props === null) {
      throw new Error('The returned component must be rendered in the same render phase as the hook.');
    } // @ts-expect-error: the props should be fine here


    return /*#__PURE__*/React.createElement(Component, _extends({}, props, rest));
  }).current;
}
//# sourceMappingURL=useComponent.js.map