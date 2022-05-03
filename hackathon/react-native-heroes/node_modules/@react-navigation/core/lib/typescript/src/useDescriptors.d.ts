import type { NavigationAction, NavigationState, ParamListBase, Router } from '@react-navigation/routers';
import { AddKeyedListener, AddListener } from './NavigationBuilderContext';
import type { Descriptor, EventMapBase, NavigationHelpers, NavigationProp, RouteConfig, RouteProp } from './types';
import type { NavigationEventEmitter } from './useEventEmitter';
export declare type ScreenConfigWithParent<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase> = {
    keys: (string | undefined)[];
    options: (ScreenOptionsOrCallback<ScreenOptions> | undefined)[] | undefined;
    props: RouteConfig<ParamListBase, string, State, ScreenOptions, EventMap>;
};
declare type ScreenOptionsOrCallback<ScreenOptions extends {}> = ScreenOptions | ((props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}) => ScreenOptions);
declare type Options<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase> = {
    state: State;
    screens: Record<string, ScreenConfigWithParent<State, ScreenOptions, EventMap>>;
    navigation: NavigationHelpers<ParamListBase>;
    screenOptions?: ScreenOptionsOrCallback<ScreenOptions>;
    defaultScreenOptions?: ScreenOptions | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
        options: ScreenOptions;
    }) => ScreenOptions);
    onAction: (action: NavigationAction) => boolean;
    getState: () => State;
    setState: (state: State) => void;
    addListener: AddListener;
    addKeyedListener: AddKeyedListener;
    onRouteFocus: (key: string) => void;
    router: Router<State, NavigationAction>;
    emitter: NavigationEventEmitter<EventMap>;
};
/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
export default function useDescriptors<State extends NavigationState, ActionHelpers extends Record<string, () => void>, ScreenOptions extends {}, EventMap extends EventMapBase>({ state, screens, navigation, screenOptions, defaultScreenOptions, onAction, getState, setState, addListener, addKeyedListener, onRouteFocus, router, emitter, }: Options<State, ScreenOptions, EventMap>): Record<string, Descriptor<ScreenOptions, {
    dispatch(action: Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }> | ((state: State) => Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>)): void;
    navigate<RouteName extends string>(...args: [screen: RouteName] | [screen: RouteName, params: object | undefined]): void;
    navigate<RouteName_1 extends string>(options: {
        key: string;
        params?: object | undefined;
        merge?: boolean | undefined;
    } | {
        name: RouteName_1;
        key?: string | undefined;
        params: object | undefined;
        merge?: boolean | undefined;
    }): void;
    reset(state: State | import("@react-navigation/routers").PartialState<State>): void;
    goBack(): void;
    isFocused(): boolean;
    canGoBack(): boolean;
    getParent<T = NavigationProp<ParamListBase, string, Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, {}, {}> | undefined>(): T;
    getState(): State;
} & import("./types").PrivateValueStore<ParamListBase, string, {}> & {
    setParams(params: Partial<object | undefined>): void;
    setOptions(options: Partial<ScreenOptions>): void;
} & import("./types").EventConsumer<EventMap & import("./types").EventMapCore<State>> & import("./types").PrivateValueStore<ParamListBase, string, EventMap> & ActionHelpers, RouteProp<ParamListBase, string>>>;
export {};
