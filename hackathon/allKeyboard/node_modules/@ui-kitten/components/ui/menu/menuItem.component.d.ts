/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { GestureResponderEvent, ImageProps } from 'react-native';
import { RenderProp, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
import { MenuItemDescriptor } from './menu.service';
declare type MenuItemStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default' | 'grouped'>;
}>;
declare type TouchableMenuItemProps = Overwrite<TouchableWebProps, {
    onPress?: (descriptor: MenuItemDescriptor, event?: GestureResponderEvent) => void;
}>;
export interface MenuItemProps extends TouchableMenuItemProps, MenuItemStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    descriptor?: MenuItemDescriptor;
}
export declare type MenuItemElement = React.ReactElement<MenuItemProps>;
/**
 * A single item in Menu.
 * Items should be rendered within Menu or MenuGroup to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuItemSimpleUsage
 */
export declare class MenuItem extends React.Component<MenuItemProps> {
    private onMouseEnter;
    private onMouseLeave;
    private onFocus;
    private onBlur;
    private onPress;
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    render(): React.ReactNode;
}
export {};
