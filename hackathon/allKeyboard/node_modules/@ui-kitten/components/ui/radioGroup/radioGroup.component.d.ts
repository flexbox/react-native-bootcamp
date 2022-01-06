/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { ChildrenWithProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { RadioProps } from '../radio/radio.component';
declare type RadioGroupStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export interface RadioGroupProps extends ViewProps, RadioGroupStyledProps {
    children?: ChildrenWithProps<RadioProps>;
    selectedIndex?: number;
    onChange?: (index: number) => void;
}
export declare type RadioGroupElement = React.ReactElement<RadioGroupProps>;
/**
 * Provides to select a single state from multiple options.
 * RadioGroup should contain Radio components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Index of currently checked radio.
 *
 * @property {(number) => void} onChange - Called when one of the radios is pressed.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example RadioGroupSimpleUsage
 */
export declare class RadioGroup extends React.Component<RadioGroupProps> {
    static defaultProps: Partial<RadioGroupProps>;
    private onRadioChange;
    private getComponentStyle;
    private renderRadioElements;
    render(): React.ReactElement<ViewProps>;
}
export {};
