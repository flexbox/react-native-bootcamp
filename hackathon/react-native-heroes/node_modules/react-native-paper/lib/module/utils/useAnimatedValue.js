import { Animated } from 'react-native';
import useLazyRef from './useLazyRef';
export default function useAnimatedValue(initialValue) {
  const {
    current
  } = useLazyRef(() => new Animated.Value(initialValue));
  return current;
}
//# sourceMappingURL=useAnimatedValue.js.map