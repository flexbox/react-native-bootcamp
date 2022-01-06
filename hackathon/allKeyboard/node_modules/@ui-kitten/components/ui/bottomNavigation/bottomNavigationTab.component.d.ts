/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { RenderProp, TouchableWebElement, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type BottomNavigationTabStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default' | string>;
}>;
export interface BottomNavigationTabProps extends TouchableWebProps, BottomNavigationTabStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    icon?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    onSelect?: (selected: boolean) => void;
}
export declare type BottomNavigationTabElement = React.ReactElement<BottomNavigationTabProps>;
/**
 * A single tab within the BottomNavigation.
 * Bottom tabs should be rendered within BottomNavigation to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the tab.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} icon - Function component
 * to render within the tab.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example BottomNavigationTabSimpleUsage
 */
export declare class BottomNavigationTab extends React.Component<BottomNavigationTabProps> {
    private onMouseEnter;
    private onMouseLeave;
    private onPress;
    private getComponentStyle;
    render(): TouchableWebElement;
}
export {};
