/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import { NetInfoNativeModule } from './privateTypes';
declare type ConnectionType = 'bluetooth' | 'cellular' | 'ethernet' | 'mixed' | 'none' | 'other' | 'unknown' | 'wifi' | 'wimax';
declare type ConnectionEffectiveType = '2g' | '3g' | '4g' | 'slow-2g';
declare type ConnectionSaveData = boolean;
interface Events {
    change: Event;
}
interface Connection {
    type: ConnectionType;
    effectiveType: ConnectionEffectiveType;
    saveData: ConnectionSaveData;
    addEventListener<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void;
    removeEventListener<K extends keyof Events>(type: K, listener: (event: Events[K]) => void): void;
}
declare global {
    interface Navigator {
        connection?: Connection;
        mozConnection?: Connection;
        webkitConnection?: Connection;
    }
}
declare const RNCNetInfo: NetInfoNativeModule;
export default RNCNetInfo;
