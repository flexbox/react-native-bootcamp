import { Animated } from 'react-native';
export default function overlay<T extends Animated.Value | number>(elevation: T, surfaceColor?: string): T extends number ? string : Animated.AnimatedInterpolation;
