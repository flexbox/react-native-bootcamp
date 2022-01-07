import * as React from 'react';
import { Animated } from 'react-native';
export default function useAnimatedValueArray(initialValues) {
  const refs = React.useRef([]);
  refs.current.length = initialValues.length;
  initialValues.forEach((initialValue, i) => {
    var _refs$current$i;

    refs.current[i] = (_refs$current$i = refs.current[i]) !== null && _refs$current$i !== void 0 ? _refs$current$i : new Animated.Value(initialValue);
  });
  return refs.current;
}
//# sourceMappingURL=useAnimatedValueArray.js.map