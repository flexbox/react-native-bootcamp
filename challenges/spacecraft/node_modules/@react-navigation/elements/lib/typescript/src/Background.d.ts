import * as React from 'react';
import { ViewProps } from 'react-native';
declare type Props = ViewProps & {
    children: React.ReactNode;
};
export default function Background({ style, ...rest }: Props): JSX.Element;
export {};
