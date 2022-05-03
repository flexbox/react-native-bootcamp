import type { ParamListBase } from '@react-navigation/routers';
import * as React from 'react';
import type { NavigationProp } from './types';
/**
 * Context which holds the navigation prop for a screen.
 */
declare const NavigationContext: React.Context<NavigationProp<ParamListBase, string, undefined, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
        path?: string | undefined;
    }> & Readonly<{
        params?: Readonly<object | undefined>;
    }> & {
        state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, {}> | undefined>;
export default NavigationContext;
