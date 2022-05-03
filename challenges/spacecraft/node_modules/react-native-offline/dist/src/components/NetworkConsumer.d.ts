import { ReactNode } from 'react';
import { ConnectivityState } from '../types';
declare type Props = {
    children: (args: ConnectivityState) => ReactNode;
};
export default function NetworkConsumer({ children }: Props): JSX.Element;
export {};
