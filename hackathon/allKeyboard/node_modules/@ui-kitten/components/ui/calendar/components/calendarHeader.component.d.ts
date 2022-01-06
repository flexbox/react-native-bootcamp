/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewProps } from 'react-native';
export interface CalendarHeaderProps extends ViewProps {
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    iconStyle?: ImageStyle;
    lateralNavigationAllowed: boolean;
    onTitlePress?: () => void;
    onNavigationLeftPress?: () => void;
    onNavigationRightPress?: () => void;
}
export declare type CalendarHeaderElement = React.ReactElement<CalendarHeaderProps>;
export declare class CalendarHeader extends React.Component<CalendarHeaderProps> {
    private renderTitleIcon;
    private renderLeftIcon;
    private renderRightIcon;
    private renderLateralNavigationControls;
    private renderTitleElement;
    render(): React.ReactElement<ViewProps>;
}
