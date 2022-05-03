import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    visible: boolean;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
export default function ResourceSavingScene({ visible, children, style, ...rest }: Props): JSX.Element;
export {};
