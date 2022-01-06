/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { ChildrenWithProps, EvaSize, EvaStatus, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { ButtonProps } from '../button/button.component';
declare type ButtonGroupStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'filled' | 'outline' | 'ghost'>;
}>;
export interface ButtonGroupProps extends ViewProps, ButtonGroupStyledProps {
    children: ChildrenWithProps<ButtonProps>;
    status?: EvaStatus;
    size?: EvaSize;
}
export declare type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;
/**
 * A group of buttons with additional styles provided by Eva.
 * ButtonGroup should contain Button components to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<ButtonProps> | ReactElement<ButtonProps>[]} children -
 * Buttons to be rendered within the group.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled`, `outline` or `ghost`.
 * Defaults to *filled*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ButtonGroupSimpleUsage
 * Button Group accepts buttons as child elements.
 *
 * @overview-example ButtonGroupAppearance
 * Appearance passed to group is also applied for grouped buttons.
 *
 * @overview-example ButtonGroupStatus
 * Same for status.
 *
 * @overview-example ButtonGroupSize
 * And size.
 *
 * @overview-example ButtonGroupOutline
 *
 * @overview-example ButtonGroupWithIcons
 */
export declare class ButtonGroup extends React.Component<ButtonGroupProps> {
    private getComponentStyle;
    private isFirstElement;
    private isLastElement;
    private renderButtonElement;
    private renderButtonElements;
    render(): React.ReactElement<ViewProps>;
}
export {};
