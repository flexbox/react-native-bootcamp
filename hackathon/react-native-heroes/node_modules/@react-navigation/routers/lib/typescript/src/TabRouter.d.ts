import type { DefaultRouterOptions, NavigationState, ParamListBase, Router } from './types';
export declare type TabActionType = {
    type: 'JUMP_TO';
    payload: {
        name: string;
        params?: object;
    };
    source?: string;
    target?: string;
};
export declare type BackBehavior = 'initialRoute' | 'firstRoute' | 'history' | 'order' | 'none';
export declare type TabRouterOptions = DefaultRouterOptions & {
    backBehavior?: BackBehavior;
};
export declare type TabNavigationState<ParamList extends ParamListBase> = Omit<NavigationState<ParamList>, 'history'> & {
    /**
     * Type of the router, in this case, it's tab.
     */
    type: 'tab';
    /**
     * List of previously visited route keys.
     */
    history: {
        type: 'route';
        key: string;
    }[];
};
export declare type TabActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Jump to an existing tab.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    jumpTo<RouteName extends Extract<keyof ParamList, string>>(...args: undefined extends ParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]] : [screen: RouteName, params: ParamList[RouteName]]): void;
};
export declare const TabActions: {
    jumpTo(name: string, params?: object | undefined): TabActionType;
};
export default function TabRouter({ initialRouteName, backBehavior, }: TabRouterOptions): Router<TabNavigationState<ParamListBase>, import("./CommonActions").Action | TabActionType>;
