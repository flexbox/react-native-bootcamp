import type { NavigationState, ParamListBase } from '@react-navigation/routers';
import type * as React from 'react';
import type { EventMapBase, TypedNavigator } from './types';
/**
 * Higher order component to create a `Navigator` and `Screen` pair.
 * Custom navigators should wrap the navigator component in `createNavigator` before exporting.
 *
 * @param Navigator The navigtor component to wrap.
 * @returns Factory method to create a `Navigator` and `Screen` pair.
 */
export default function createNavigatorFactory<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase, NavigatorComponent extends React.ComponentType<any>>(Navigator: NavigatorComponent): <ParamList extends ParamListBase>() => TypedNavigator<ParamList, State, ScreenOptions, EventMap, NavigatorComponent>;
