import * as offlineActionTypes from './redux/actionTypes';
import * as offlineActionCreators from './redux/actionCreators';
export { default as NetworkProvider } from './components/NetworkProvider';
export { default as ReduxNetworkProvider } from './components/ReduxNetworkProvider';
export { default as NetworkConsumer } from './components/NetworkConsumer';
export { default as useIsConnected } from './hooks/useIsConnected';
export { default as createNetworkMiddleware } from './redux/createNetworkMiddleware';
export { default as networkSaga } from './redux/sagas';
export { default as checkInternetConnection } from './utils/checkInternetConnection';
export declare const createReducer: (comparisonFn?: (action: any, actionQueue: import("./types").EnqueuedAction[]) => import("./types").Thunk | import("./types").FluxAction<any> | undefined) => (state: import("./types").NetworkState | undefined, action: import("redux").AnyAction | {
    type: "@@network-connectivity/CONNECTION_CHANGE";
    payload: boolean | null;
} | {
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
    meta: import("./types").MetaProps;
} | {
    type: "@@network-connectivity/FETCH_OFFLINE_MODE";
    payload: {
        prevThunk: import("./types").Thunk;
        prevAction?: undefined;
    };
    meta: import("./types").MetaProps;
} | {
    type: "@@network-connectivity/REMOVE_FROM_ACTION_QUEUE";
    payload: import("./types").EnqueuedAction;
} | {
    type: "@@network-connectivity/DISMISS_ACTIONS_FROM_QUEUE";
    payload: string;
} | {
    type: string;
    payload: import("./types").SemaphoreColor;
}) => import("./types").NetworkState;
export declare const reducer: (state: import("./types").NetworkState | undefined, action: import("redux").AnyAction | {
    type: "@@network-connectivity/CONNECTION_CHANGE";
    payload: boolean | null;
} | {
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
    meta: import("./types").MetaProps;
} | {
    type: "@@network-connectivity/FETCH_OFFLINE_MODE";
    payload: {
        prevThunk: import("./types").Thunk;
        prevAction?: undefined;
    };
    meta: import("./types").MetaProps;
} | {
    type: "@@network-connectivity/REMOVE_FROM_ACTION_QUEUE";
    payload: import("./types").EnqueuedAction;
} | {
    type: "@@network-connectivity/DISMISS_ACTIONS_FROM_QUEUE";
    payload: string;
} | {
    type: string;
    payload: import("./types").SemaphoreColor;
}) => import("./types").NetworkState;
export { offlineActionCreators, offlineActionTypes };
