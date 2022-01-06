/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type DividerStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export declare type DividerProps = ViewProps & DividerStyledProps;
export declare type DividerElement = React.ReactElement<DividerProps>;
/**
 * A divider is a thin line that groups content in lists and layouts.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example DividerSimpleUsage
 */
export declare class Divider extends React.Component<DividerProps> {
    render(): React.ReactElement;
}
export {};
