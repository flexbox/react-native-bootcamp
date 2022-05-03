import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    focused: boolean;
    modal?: boolean;
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase>;
    header: React.ReactNode;
    headerShown?: boolean;
    headerStatusBarHeight?: number;
    headerTransparent?: boolean;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
};
export default function Screen(props: Props): JSX.Element;
export {};
