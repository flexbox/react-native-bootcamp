import type { Route } from '@react-navigation/routers';
import * as React from 'react';
/**
 * Context which holds the route prop for a screen.
 */
declare const NavigationRouteContext: React.Context<Route<string, object | undefined> | undefined>;
export default NavigationRouteContext;
