/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ThemeType } from './theme.service';
import { Styles } from '../style/style.service';
import { EvaProp } from '../style/styled';
export interface ThemedComponentProps<T extends Styles<T> = any> {
    eva?: EvaProp;
}
export declare type ThemedComponentClass<P, S extends Styles<S>> = React.ComponentClass<ThemedComponentProps<S> & P>;
declare type CreateStylesFunction<T extends Styles<T>> = (theme: ThemeType) => T;
/**
 * High Order Function for creating styles mapped to current theme
 * Returns component class which can be used as themed component.
 *
 * @param Component - Type: {ComponentType}. Component to be themed.
 *
 * @param createStyles - Type: {(ThemeType) => NamedStyles}. Function used to create styles mapped on theme.
 *
 * @overview-example WithStylesSimpleUsage
 *
 * @overview-example WithStylesEvaProp
 * A withStyles function injects `eva` property into props of wrapped component, where
 * theme - a current theme,
 * styles - a styles object provided by a function used as a second argument of withStyles.
 * ```
 * interface EvaProp {
 *   theme: ThemeType;
 *   style: StyleType;
 * }
 * ```
 */
export declare const withStyles: <P extends object, S>(Component: React.ComponentType<P>, createStyles?: CreateStylesFunction<S>) => ThemedComponentClass<P, S>;
export {};
