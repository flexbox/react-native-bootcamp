/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledComponentProps, StyleType } from '../../../../theme';
import { CalendarDateInfo } from '../../type';
declare type ChildrenProp<D> = (date: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
export interface CalendarPickerCellProps<D> extends StyledComponentProps, TouchableOpacityProps {
    date: CalendarDateInfo<D>;
    selected?: boolean;
    bounding?: boolean;
    today?: boolean;
    range?: boolean;
    firstRangeItem?: boolean;
    lastRangeItem?: boolean;
    onSelect?: (date: CalendarDateInfo<D>) => void;
    children: ChildrenProp<D>;
    shouldComponentUpdate?: (props: CalendarPickerCellProps<D>, nextProps: CalendarPickerCellProps<D>) => boolean;
}
export declare type CalendarPickerCellElement<D> = React.ReactElement<CalendarPickerCellProps<D>>;
export declare class CalendarPickerCell<D> extends React.Component<CalendarPickerCellProps<D>> {
    shouldComponentUpdate(nextProps: CalendarPickerCellProps<D>): boolean;
    private onPress;
    private getContainerBorderRadius;
    private getComponentStyle;
    private renderContentElement;
    render(): React.ReactElement<TouchableOpacityProps>;
}
export {};
