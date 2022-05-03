import type { NavigationAction } from '@react-navigation/core';
import * as React from 'react';
import { GestureResponderEvent, Text, TextProps } from 'react-native';
import type { To } from './useLinkTo';
declare type Props<ParamList extends ReactNavigation.RootParamList> = {
    to: To<ParamList>;
    action?: NavigationAction;
    target?: string;
    onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
} & (TextProps & {
    children: React.ReactNode;
});
/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
export default function Link<ParamList extends ReactNavigation.RootParamList>({ to, action, ...rest }: Props<ParamList>): React.CElement<TextProps, Text>;
export {};
