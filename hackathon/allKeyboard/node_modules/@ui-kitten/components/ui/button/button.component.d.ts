/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { EvaSize, EvaStatus, RenderProp, TouchableWebElement, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type ButtonStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'filled' | 'outline' | 'ghost'>;
}>;
export interface ButtonProps extends TouchableWebProps, ButtonStyledProps {
    children?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    status?: EvaStatus;
    size?: EvaSize;
}
export declare type ButtonElement = React.ReactElement<ButtonProps>;
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render within the button.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
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
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ButtonSimpleUsage
 * Default button size is `medium` and status color is `primary`.
 *
 * @overview-example ButtonStates
 * Button can be disabled with `disabled` property.
 *
 * @overview-example ButtonAppearances
 * Within Eva Design System, it can be `filled`, `outline` or `ghost`.
 *
 * @overview-example ButtonAccessories
 * Also, it may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](guides/icon-packages).
 *
 * @overview-example ButtonSize
 * Buttons can be resized by using `size` property.
 *
 * @overview-example ButtonStatus
 * Or marked with `status` property.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ButtonOutline
 * Status can be combined with `outline` appearance.
 *
 * @overview-example ButtonGhost
 * As well as for `ghost`.
 *
 * @overview-example ButtonStyling
 * Button and it's inner views can be styled by passing them as function components.
 * ```
 * import { Button, Text } from '@ui-kitten/components';
 *
 * <Button style={...}>
 *   {evaProps => <Text {...evaProps}>BUTTON</Text>}
 * </Button>
 * ```
 *
 * @overview-example ButtonTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class Button extends React.Component<ButtonProps> {
    private onMouseEnter;
    private onMouseLeave;
    private onFocus;
    private onBlur;
    private onPressIn;
    private onPressOut;
    private getComponentStyle;
    render(): TouchableWebElement;
}
export {};
