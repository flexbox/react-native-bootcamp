/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ThemeType } from './theme.service';
export interface ThemeProviderProps {
    theme: ThemeType;
    children?: React.ReactNode;
}
/**
 * Since ApplicationProvider is the root component of the application,
 * it provides same theme for all underlying components.
 *
 * ThemeProvider allows modifying this theme so that each component that is the child
 * of ThemeProvider will use modified theme.
 *
 * @overview-example ThemeProviderSimpleUsage
 */
export declare class ThemeProvider extends React.PureComponent<ThemeProviderProps> {
    render(): React.ReactNode;
}
