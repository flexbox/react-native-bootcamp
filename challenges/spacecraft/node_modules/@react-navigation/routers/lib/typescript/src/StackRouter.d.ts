import type { DefaultRouterOptions, NavigationState, ParamListBase, Router } from './types';
export declare type StackActionType = {
    type: 'REPLACE';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'PUSH';
    payload: {
        name: string;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'POP';
    payload: {
        count: number;
    };
    source?: string;
    target?: string;
} | {
    type: 'POP_TO_TOP';
    source?: string;
    target?: string;
};
export declare type StackRouterOptions = DefaultRouterOptions;
export declare type StackNavigationState<ParamList extends ParamListBase> = NavigationState<ParamList> & {
    /**
     * Type of the router, in this case, it's stack.
     */
    type: 'stack';
};
export declare type StackActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Replace the current route with a new one.
     *
     * @param name Route name of the new route.
     * @param [params] Params object for the new route.
     */
    replace<RouteName extends keyof ParamList>(...args: undefined extends ParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]] : [screen: RouteName, params: ParamList[RouteName]]): void;
    /**
     * Push a new screen onto the stack.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    push<RouteName extends keyof ParamList>(...args: undefined extends ParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]] : [screen: RouteName, params: ParamList[RouteName]]): void;
    /**
     * Pop a screen from the stack.
     */
    pop(count?: number): void;
    /**
     * Pop to the first route in the stack, dismissing all other screens.
     */
    popToTop(): void;
};
export declare const StackActions: {
    replace(name: string, params?: object | undefined): StackActionType;
    push(name: string, params?: object | undefined): StackActionType;
    pop(count?: number): StackActionType;
    popToTop(): StackActionType;
};
export default function StackRouter(options: StackRouterOptions): Router<StackNavigationState<ParamListBase>, import("./CommonActions").Action | StackActionType>;
