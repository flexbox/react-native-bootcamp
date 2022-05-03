/// <reference types="react" />
import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import type { NativeStackNavigationEventMap, NativeStackNavigationOptions, NativeStackNavigatorProps } from '../types';
declare function NativeStackNavigator({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: NativeStackNavigatorProps): JSX.Element;
declare const _default: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, StackNavigationState<ParamListBase>, NativeStackNavigationOptions, NativeStackNavigationEventMap, typeof NativeStackNavigator>;
export default _default;
