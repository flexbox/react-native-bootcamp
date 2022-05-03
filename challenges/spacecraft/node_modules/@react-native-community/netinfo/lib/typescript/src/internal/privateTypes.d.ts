/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import { NetInfoState } from './types';
export declare const DEVICE_CONNECTIVITY_EVENT = "netInfo.networkStatusDidChange";
export declare type NetInfoNativeModuleState = Pick<NetInfoState, Exclude<keyof NetInfoState, 'isInternetReachable'>> & {
    isInternetReachable?: boolean;
};
export interface Events {
    [DEVICE_CONNECTIVITY_EVENT]: NetInfoNativeModuleState;
}
export interface NetInfoNativeModule {
    getCurrentState: (requestedInterface?: string) => Promise<NetInfoNativeModuleState>;
    addListener<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void;
    removeListeners<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void;
}
export declare type NetInfoInternetReachabilityChangeListener = (isInternetReachable: boolean | null | undefined) => void;
