/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { RenderProp, TouchableWebElement, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type TopNavigationActionStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default' | 'control'>;
}>;
export interface TopNavigationActionProps extends TouchableWebProps, TopNavigationActionStyledProps {
    icon?: RenderProp<Partial<ImageProps>>;
}
export declare type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;
/**
 * A single action within the TopNavigation.
 * Actions should be rendered within TopNavigation by providing them through `accessory` props
 * to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | (ImageProps) => ReactElement} icon - Function component
 * to render within the action.
 * Expected to return an Image.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` and `control`.
 * Use *control* appearance when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example TopNavigationActionSimpleUsage
 */
export declare class TopNavigationAction extends React.Component<TopNavigationActionProps> {
    onBlur: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    private onMouseEnter;
    private onMouseLeave;
    private onFocus;
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    render(): TouchableWebElement;
}
export {};
