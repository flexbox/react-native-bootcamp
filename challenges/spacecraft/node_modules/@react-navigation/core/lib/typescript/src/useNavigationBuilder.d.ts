import { DefaultRouterOptions, NavigationState, ParamListBase, PartialState, RouterFactory } from '@react-navigation/routers';
import * as React from 'react';
import { DefaultNavigatorOptions, EventMapCore, PrivateValueStore } from './types';
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */
export default function useNavigationBuilder<State extends NavigationState, RouterOptions extends DefaultRouterOptions, ActionHelpers extends Record<string, () => void>, ScreenOptions extends {}, EventMap extends Record<string, any>>(createRouter: RouterFactory<State, any, RouterOptions>, options: DefaultNavigatorOptions<ParamListBase, State, ScreenOptions, EventMap> & RouterOptions): {
    state: State;
    navigation: {
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
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
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
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }> | PartialState<Readonly<{
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
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>>): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        getId(): string | undefined;
        getParent<T = import("./types").NavigationHelpers<ParamListBase, {}> | undefined>(id?: string | undefined): T;
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
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>;
    } & PrivateValueStore<[ParamListBase, unknown, unknown]> & import("./types").EventEmitter<EventMap> & {
        setParams<RouteName_2 extends string>(params: Partial<object | undefined>): void;
    } & ActionHelpers;
    descriptors: Record<string, import("./types").Descriptor<ScreenOptions, Omit<{
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
        reset(state: State | PartialState<State>): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        getId(): string | undefined;
        getParent<T = import("./types").NavigationHelpers<ParamListBase, {}> | undefined>(id?: string | undefined): T;
        getState(): State;
    } & PrivateValueStore<[ParamListBase, unknown, unknown]>, "getParent"> & {
        getParent<T_1 = import("./types").NavigationProp<ParamListBase, string, undefined, Readonly<{
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
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, {}, {}> | undefined>(id?: string | undefined): T_1;
        setParams(params: Partial<object | undefined>): void;
        setOptions(options: Partial<ScreenOptions>): void;
    } & import("./types").EventConsumer<EventMap & EventMapCore<State>> & PrivateValueStore<[ParamListBase, string, EventMap]> & ActionHelpers, import("./types").RouteProp<ParamListBase, string>>>;
    NavigationContent: (rest: Omit<React.ProviderProps<import("./types").NavigationHelpers<ParamListBase, {}> | undefined>, "value">) => JSX.Element;
};
