import { AnyAction } from 'redux';
import { NetworkState, EnqueuedAction, FluxAction, Thunk, SemaphoreColor } from '../types';
declare type ComparisonFn = (action: any, actionQueue: EnqueuedAction[]) => FluxAction<any> | Thunk | undefined;
export declare const initialState: {
    isConnected: boolean;
    actionQueue: EnqueuedAction[];
    isQueuePaused: boolean;
};
declare const _default: (comparisonFn?: ComparisonFn) => (state: NetworkState | undefined, action: AnyAction | {
    type: "@@network-connectivity/FETCH_OFFLINE_MODE";
    payload: {
        prevAction: {
            [x: string]: any;
            type: string;
            payload: any;
        } | {
            interceptInOffline?: boolean | undefined;
        };
        prevThunk?: undefined;
    };
    meta: import("../types").MetaProps;
} | {
    type: "@@network-connectivity/FETCH_OFFLINE_MODE";
    payload: {
        prevThunk: Thunk;
        prevAction?: undefined;
    };
    meta: import("../types").MetaProps;
} | {
    type: "@@network-connectivity/CONNECTION_CHANGE";
    payload: boolean | null;
} | {
    type: "@@network-connectivity/REMOVE_FROM_ACTION_QUEUE";
    payload: EnqueuedAction;
} | {
    type: "@@network-connectivity/DISMISS_ACTIONS_FROM_QUEUE";
    payload: string;
} | {
    type: string;
    payload: SemaphoreColor;
}) => NetworkState;
export default _default;
export declare function networkSelector(state: {
    network: NetworkState;
}): NetworkState;
