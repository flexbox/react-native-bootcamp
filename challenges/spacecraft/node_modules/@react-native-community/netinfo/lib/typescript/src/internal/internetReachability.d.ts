/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import * as Types from './types';
import * as PrivateTypes from './privateTypes';
export default class InternetReachability {
    private _configuration;
    private _listener;
    private _isInternetReachable;
    private _currentInternetReachabilityCheckHandler;
    private _currentTimeoutHandle;
    constructor(configuration: Types.NetInfoConfiguration, listener: PrivateTypes.NetInfoInternetReachabilityChangeListener);
    private _setIsInternetReachable;
    private _setExpectsConnection;
    private _checkInternetReachability;
    update: (state: PrivateTypes.NetInfoNativeModuleState) => void;
    currentState: () => boolean | null | undefined;
    tearDown: () => void;
}
