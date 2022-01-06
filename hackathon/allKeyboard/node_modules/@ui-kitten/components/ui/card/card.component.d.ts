/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { EvaStatus, RenderProp, TouchableWebElement, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type CardStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'filled' | 'outline'>;
}>;
export interface CardProps extends TouchableWebProps, CardStyledProps {
    children?: React.ReactNode;
    header?: RenderProp<ViewProps>;
    footer?: RenderProp<ViewProps>;
    accent?: RenderProp<ViewProps>;
    status?: EvaStatus;
}
export declare type CardElement = React.ReactElement<CardProps>;
/**
 * Cards contain content and actions about a single subject.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the card.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} header - Function component
 * to render above the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} footer - Function component
 * to render below the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} accent - Function component
 * to render above the card.
 * Accents may change it's color depending on *status* property.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled` or `outline`.
 * Defaults to *outline*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CardSimpleUsage
 * In basic example, card accepts content view as child element.
 *
 * @overview-example CardAccessories
 * It also may have header and footer by configuring `header` and `footer` properties.
 *
 * @overview-example CardStatuses
 */
export declare class Card extends React.Component<CardProps> {
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    private renderStatusAccent;
    render(): TouchableWebElement;
}
export {};
