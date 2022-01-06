/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
export interface CalendarMonthHeaderProps extends ViewProps {
    data: string[];
    children: (data: string, index: number) => React.ReactElement;
}
export declare type CalendarMonthHeaderElement = React.ReactElement<CalendarMonthHeaderProps>;
export declare class CalendarMonthHeader extends React.Component<CalendarMonthHeaderProps> {
    render(): React.ReactElement<ViewProps>;
}
