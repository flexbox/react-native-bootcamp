import { Subscribe } from 'redux-saga';
import { NetInfoState } from '@react-native-community/netinfo';
import { ConnectivityArgs, NetworkState } from '../types';
declare type NetInfoChangeArgs = Omit<ConnectivityArgs, 'pingInterval' | 'pingOnlyIfOffline' | 'pingInBackground'>;
declare type CheckInternetArgs = Omit<NetInfoChangeArgs, 'shouldPing'> & {
    pingInBackground: boolean;
};
export declare function netInfoEventChannelFn(emit: (param: NetInfoState) => unknown): import("@react-native-community/netinfo").NetInfoSubscription;
export declare function intervalChannelFn(interval: number): (emit: (param: boolean) => unknown) => () => void;
/**
 * Returns a factory function that creates a channel from network connection change events
 * @returns {Channel<T>}
 */
export declare function createNetInfoConnectionChangeChannel<T = any>(channelFn: Subscribe<T>): import("redux-saga").EventChannel<T>;
/**
 * Returns a factory function that creates a channel from an interval
 * @param interval
 * @returns {Channel<T>}
 */
export declare function createIntervalChannel(interval: number, channelFn: Function): import("redux-saga").EventChannel<unknown>;
/**
 * Creates a NetInfo change event channel that:
 * - Listens to NetInfo connection change events
 * - If shouldPing === true, it first verifies we have internet access
 * - Otherwise it calls handleConnectivityChange immediately to process the new information into the redux store
 * @param pingTimeout
 * @param pingServerUrl
 * @param shouldPing
 * @param httpMethod
 * @param customHeaders
 */
export declare function netInfoChangeSaga({ pingTimeout, pingServerUrl, shouldPing, httpMethod, customHeaders, }: NetInfoChangeArgs): Generator<import("redux-saga/effects").CallEffect<NetInfoState> | import("redux-saga/effects").ForkEffect<void> | import("redux-saga/effects").CallEffect<import("redux-saga").EventChannel<unknown>> | import("redux-saga/effects").TakeEffect | import("redux-saga/effects").CancelledEffect, void, NetInfoState>;
/**
 * Either checks internet by pinging a server or calls the store handler function
 * @param shouldPing
 * @param isConnected
 * @param pingTimeout
 * @param pingServerUrl
 * @param httpMethod
 * @param customHeaders
 * @returns {IterableIterator<ForkEffect | *>}
 */
export declare function connectionHandler({ shouldPing, isConnected, pingTimeout, pingServerUrl, httpMethod, customHeaders, }: NetInfoChangeArgs & {
    isConnected: boolean | null;
}): Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>;
/**
 * Creates an interval channel that periodically verifies internet access
 * @param pingTimeout
 * @param pingServerUrl
 * @param interval
 * @param pingOnlyIfOffline
 * @param pingInBackground
 * @param httpMethod
 * @param customHeaders
 * @returns {IterableIterator<*>}
 */
export declare function connectionIntervalSaga({ pingTimeout, pingServerUrl, pingInterval, pingOnlyIfOffline, pingInBackground, httpMethod, customHeaders, }: Omit<ConnectivityArgs, 'shouldPing'>): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").ForkEffect<void> | import("redux-saga/effects").CallEffect<import("redux-saga").EventChannel<unknown>> | import("redux-saga/effects").TakeEffect | import("redux-saga/effects").CancelledEffect, void, NetworkState>;
/**
 * Saga that verifies internet connection, besides connectivity, by pinging a server of your choice
 * @param pingServerUrl
 * @param pingTimeout
 * @param httpMethod
 * @param pingInBackground
 * @param customHeaders
 */
export declare function checkInternetAccessSaga({ pingServerUrl, pingTimeout, httpMethod, pingInBackground, customHeaders, }: CheckInternetArgs): Generator<import("redux-saga/effects").CallEffect<boolean> | import("redux-saga/effects").CallEffect<void>, void, unknown>;
/**
 * Takes action under the new network connection value:
 * - Dispatches a '@@network-connectivity/CONNECTION_CHANGE' action type
 * - Flushes the queue of pending actions if we are connected back to the internet
 * @param hasInternetAccess
 */
export declare function handleConnectivityChange(hasInternetAccess: boolean | null): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").PutEffect<{
    type: "@@network-connectivity/CONNECTION_CHANGE";
    payload: boolean | null;
}>, void, NetworkState>;
/**
 * Saga that controls internet connectivity in your whole application.
 * You just need to fork it from your root saga.
 * It receives the same parameters as withNetworkConnectivity HOC
 * @param pingTimeout
 * @param pingServerUrl
 * @param shouldPing
 * @param pingInterval
 * @param pingOnlyIfOffline
 * @param pingInBackground
 * @param httpMethod
 * @param customHeaders
 */
export default function networkSaga(args?: ConnectivityArgs): Generator<import("redux-saga/effects").ForkEffect<void>, void, unknown>;
export {};
