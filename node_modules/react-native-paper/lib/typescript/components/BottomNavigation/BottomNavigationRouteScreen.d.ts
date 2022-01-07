import React from 'react';
import { Animated, ViewProps } from 'react-native';
interface Props extends ViewProps {
    visibility?: 0 | 1 | Animated.AnimatedInterpolation;
    index: number;
}
declare class BottomNavigationRouteScreen extends React.Component<Props> {
    render(): JSX.Element;
}
declare const _default: Animated.AnimatedComponent<typeof BottomNavigationRouteScreen>;
export default _default;
