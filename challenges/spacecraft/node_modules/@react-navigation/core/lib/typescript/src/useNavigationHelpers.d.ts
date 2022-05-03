import { NavigationAction, NavigationState, ParamListBase, Router } from '@react-navigation/routers';
import { NavigationHelpers, PrivateValueStore } from './types';
import type { NavigationEventEmitter } from './useEventEmitter';
declare type Options<State extends NavigationState, Action extends NavigationAction> = {
    id: string | undefined;
    onAction: (action: NavigationAction) => boolean;
    getState: () => State;
    emitter: NavigationEventEmitter<any>;
    router: Router<State, Action>;
};
/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
export default function useNavigationHelpers<State extends NavigationState, ActionHelpers extends Record<string, () => void>, Action extends NavigationAction, EventMap extends Record<string, any>>({ id: navigatorId, onAction, getState, emitter, router, }: Options<State, Action>): {
    dispatch(action: Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }> | ((state: Readonly<{
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
    }>) => Readonly<{
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
    reset(state: Readonly<{
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
    }> | import("@react-navigation/routers").PartialState<Readonly<{
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
    }>>): void;
    goBack(): void;
    isFocused(): boolean;
    canGoBack(): boolean;
    getId(): string | undefined;
    getParent<T = NavigationHelpers<ParamListBase, {}> | undefined>(id?: string | undefined): T;
    getState(): Readonly<{
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
    }>;
} & PrivateValueStore<[ParamListBase, unknown, unknown]> & import("./types").EventEmitter<EventMap> & {
    setParams<RouteName_2 extends string>(params: Partial<object | undefined>): void;
} & ActionHelpers;
export {};
