import { AnyAction } from 'redux';
export interface Thunk {
    (...args: any[]): any;
    meta?: MetaProps;
    interceptInOffline?: boolean;
}
export declare type EnqueuedAction = FluxAction | Thunk;
export interface MetaProps {
    retry?: boolean;
    dismiss?: string[];
    [x: string]: any;
}
export interface FluxAction<T = any> extends AnyAction {
    type: string;
    payload: T;
    meta?: MetaProps;
}
export interface NetworkState extends ConnectivityState {
    isQueuePaused: boolean;
    actionQueue: EnqueuedAction[];
}
export declare type ConnectivityState = {
    isConnected: boolean | null;
};
export declare type HTTPMethod = 'HEAD' | 'OPTIONS';
export declare type AddUndefined<T> = {
    [P in keyof T]: T[P] | undefined;
};
export declare type ConnectivityArgs = {
    pingTimeout: number;
    pingServerUrl: string;
    shouldPing: boolean;
    pingInterval: number;
    pingOnlyIfOffline: boolean;
    pingInBackground: boolean;
    httpMethod: HTTPMethod;
    customHeaders?: HTTPHeaders;
};
export declare type SemaphoreColor = 'RED' | 'GREEN';
export declare type HTTPHeaders = {
    [key: string]: string;
};
