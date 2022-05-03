import { EnqueuedAction, SemaphoreColor } from '../types';
export declare const connectionChange: (isConnected: boolean | null) => {
    type: "@@network-connectivity/CONNECTION_CHANGE";
    payload: boolean | null;
};
export declare const fetchOfflineMode: (action: EnqueuedAction) => {
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
        prevThunk: import("../types").Thunk;
        prevAction?: undefined;
    };
    meta: import("../types").MetaProps;
};
export declare const removeActionFromQueue: (action: EnqueuedAction) => {
    type: "@@network-connectivity/REMOVE_FROM_ACTION_QUEUE";
    payload: EnqueuedAction;
};
export declare const dismissActionsFromQueue: (actionTrigger: string) => {
    type: "@@network-connectivity/DISMISS_ACTIONS_FROM_QUEUE";
    payload: string;
};
export declare const changeQueueSemaphore: (semaphoreColor: SemaphoreColor) => {
    type: string;
    payload: SemaphoreColor;
};
export declare type ConnectionChangeType = ReturnType<typeof connectionChange>;
export declare type FetchOfflineModeType = ReturnType<typeof fetchOfflineMode>;
export declare type RemoveActionFromQueueType = ReturnType<typeof removeActionFromQueue>;
export declare type DismissActionsFromQueueType = ReturnType<typeof dismissActionsFromQueue>;
export declare type ChangeQueueSemaphoreType = ReturnType<typeof changeQueueSemaphore>;
export declare type ReduxActions = ConnectionChangeType | FetchOfflineModeType | RemoveActionFromQueueType | DismissActionsFromQueueType | ChangeQueueSemaphoreType;
