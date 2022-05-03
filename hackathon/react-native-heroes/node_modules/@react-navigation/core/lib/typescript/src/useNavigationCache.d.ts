import { NavigationAction, NavigationState, ParamListBase, Router } from '@react-navigation/routers';
import type { NavigationHelpers, NavigationProp } from './types';
import type { NavigationEventEmitter } from './useEventEmitter';
declare type Options<State extends NavigationState, EventMap extends Record<string, any>> = {
    state: State;
    getState: () => State;
    navigation: NavigationHelpers<ParamListBase> & Partial<NavigationProp<ParamListBase, string, any, any, any>>;
    setOptions: (cb: (options: Record<string, object>) => Record<string, object>) => void;
    router: Router<State, NavigationAction>;
    emitter: NavigationEventEmitter<EventMap>;
};
declare type NavigationCache<State extends NavigationState, ScreenOptions extends {}, EventMap extends Record<string, any>> = Record<string, NavigationProp<ParamListBase, string, State, ScreenOptions, EventMap>>;
/**
 * Hook to cache navigation objects for each screen in the navigator.
 * It's important to cache them to make sure navigation objects don't change between renders.
 * This lets us apply optimizations like `React.memo` to minimize re-rendering screens.
 */
export default function useNavigationCache<State extends NavigationState, ScreenOptions extends {}, EventMap extends Record<string, any>>({ state, getState, navigation, setOptions, router, emitter, }: Options<State, EventMap>): NavigationCache<State, ScreenOptions, EventMap>;
export {};
