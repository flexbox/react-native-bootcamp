import type { CommonActions, NavigationState, PartialState } from '@react-navigation/routers';
import type { NavigatorScreenParams, PathConfigMap } from './types';
declare type Options = {
    initialRouteName?: string;
    screens: PathConfigMap<object>;
};
declare type NavigateAction<State extends NavigationState> = {
    type: 'NAVIGATE';
    payload: {
        name: string;
        params?: NavigatorScreenParams<State>;
        path?: string;
    };
};
export default function getActionFromState(state: PartialState<NavigationState>, options?: Options): NavigateAction<NavigationState> | CommonActions.Action | undefined;
export {};
