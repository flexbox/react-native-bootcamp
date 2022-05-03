import * as React from 'react';
import { ConnectivityArgs } from '../types';
declare type Props = {
    children: React.ReactNode;
} & ConnectivityArgs;
declare function NetworkProvider({ httpMethod, pingInBackground, pingInterval, pingOnlyIfOffline, pingServerUrl, pingTimeout, shouldPing, children, }: Partial<Props>): JSX.Element;
export default NetworkProvider;
