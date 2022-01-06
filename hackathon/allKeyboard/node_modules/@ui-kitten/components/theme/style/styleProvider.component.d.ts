/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { MappingProviderProps } from '../mapping/mappingProvider.component';
import { ThemeProviderProps } from '../theme/themeProvider.component';
export declare type StyleProviderProps = MappingProviderProps & ThemeProviderProps;
export declare class StyleProvider extends React.PureComponent<StyleProviderProps> {
    render(): React.ReactNode;
}
