/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { GestureResponderEvent, ImageProps } from 'react-native';
import { RenderProp, TouchableWebElement, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
import { SelectItemDescriptor } from './select.service';
declare type SelectItemStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default' | 'grouped'>;
}>;
declare type TouchableSelectProps = Overwrite<TouchableWebProps, {
    onPress?: (descriptor: SelectItemDescriptor, event?: GestureResponderEvent) => void;
}>;
export interface SelectItemProps extends TouchableSelectProps, SelectItemStyledProps {
    title?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    selected?: boolean;
    descriptor?: SelectItemDescriptor;
}
export declare type SelectItemElement = React.ReactElement<SelectItemProps>;
/**
 * A single item in Select.
 * Items should be rendered within Select or SelectGroup children to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
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
 * @overview-example SelectItemSimpleUsage
 */
export declare class SelectItem extends React.Component<SelectItemProps> {
    private get isMultiSelect();
    private onMouseEnter;
    private onMouseLeave;
    private onFocus;
    private onBlur;
    private onPress;
    private onPressIn;
    private onPressOut;
    private onAccessoryCheckedChange;
    private getComponentStyle;
    private renderAccessory;
    render(): TouchableWebElement;
}
export {};
