/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as Types from './types';
export default class State {
    private _nativeEventSubscription;
    private _subscriptions;
    private _latestState;
    private _internetReachability;
    constructor(configuration: Types.NetInfoConfiguration);
    private _handleNativeStateUpdate;
    private _handleInternetReachabilityUpdate;
    private _fetchCurrentState;
    private _convertState;
    latest: (requestedInterface?: string | undefined) => Promise<Types.NetInfoState>;
    add: (handler: Types.NetInfoChangeHandler) => void;
    remove: (handler: Types.NetInfoChangeHandler) => void;
    tearDown: () => void;
}
