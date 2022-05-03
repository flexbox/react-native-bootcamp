import * as React from 'react';
import { Dispatch } from 'redux';
import { NetworkState, ConnectivityArgs } from '../types';
interface AppState {
    network: NetworkState;
}
declare type OwnProps = ConnectivityArgs;
interface StateProps {
    isConnected: boolean | null;
    dispatch: Dispatch;
}
declare type Props = OwnProps & StateProps & {
    children: React.ReactNode;
};
declare class ReduxNetworkProvider extends React.Component<Props> {
    static defaultProps: ConnectivityArgs;
    handleConnectivityChange: (isConnected: boolean | null) => void;
    render(): JSX.Element;
}
declare const mapStateToProps: (state: AppState) => {
    isConnected: boolean | null;
};
declare const ConnectedReduxNetworkProvider: import("react-redux").ConnectedComponent<typeof ReduxNetworkProvider, Pick<Props, "children" | "pingTimeout" | "pingServerUrl" | "shouldPing" | "pingInterval" | "pingOnlyIfOffline" | "pingInBackground" | "httpMethod" | "customHeaders">>;
export { ConnectedReduxNetworkProvider as default, ReduxNetworkProvider, mapStateToProps, };
