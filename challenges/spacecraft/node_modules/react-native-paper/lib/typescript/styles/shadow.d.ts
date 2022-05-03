import { Animated } from 'react-native';
export default function shadow(elevation?: number | Animated.Value): {
    shadowColor: string;
    shadowOffset: {
        width: Animated.Value;
        height: Animated.AnimatedInterpolation;
    };
    shadowOpacity: Animated.AnimatedInterpolation;
    shadowRadius: Animated.AnimatedInterpolation;
} | {
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
} | {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
};
