import { NavigationAction } from '@react-navigation/core';
import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { To } from './useLinkTo';
declare type Props<ParamList extends ReactNavigation.RootParamList> = {
    to: To<ParamList>;
    action?: NavigationAction;
};
/**
 * Hook to get props for an anchor tag so it can work with in page navigation.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 */
export default function useLinkProps<ParamList extends ReactNavigation.RootParamList>({ to, action }: Props<ParamList>): {
    href: string;
    accessibilityRole: "link";
    onPress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent | undefined) => void;
};
export {};
