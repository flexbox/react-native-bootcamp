import type { ParamListBase } from '@react-navigation/routers';
import * as React from 'react';
import type { NavigationContainerRef } from './types';
/**
 * Context which holds the route prop for a screen.
 */
declare const NavigationContainerRefContext: React.Context<NavigationContainerRef<ParamListBase> | undefined>;
export default NavigationContainerRefContext;
