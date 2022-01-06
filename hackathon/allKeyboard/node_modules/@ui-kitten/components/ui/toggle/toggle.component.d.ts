/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { GestureResponderEvent, NativeSyntheticEvent, PanResponderCallbacks, PanResponderGestureState, TargetedEvent, ViewProps } from 'react-native';
import { EvaStatus, RenderProp, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TextProps } from '../text/text.component';
declare type ToggleStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export interface ToggleProps extends TouchableWebProps, ToggleStyledProps {
    children?: RenderProp<TextProps> | React.ReactText;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    status?: EvaStatus;
}
export declare type ToggleElement = React.ReactElement<ToggleProps>;
/**
 * Switches toggle the state of a single setting on or off.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(boolean) => void} onChange - Called when toggle
 * should switch it's value.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the toggle.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ToggleSimpleUsage
 *
 * @overview-example ToggleStates
 * Toggle can be checked or disabled.
 *
 * @overview-example ToggleStatus
 * Toggle may marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ToggleStyling
 * Toggle and it's inner views can be styled by passing them as function components.
 * ```
 * import { Toggle, Text } from '@ui-kitten/components';
 *
 * <Toggle>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </Toggle>
 * ```
 *
 * @overview-example ToggleTheming
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 */
export declare class Toggle extends React.Component<ToggleProps> implements PanResponderCallbacks {
    private panResponder;
    private thumbWidthAnimation;
    private thumbTranslateAnimation;
    private ellipseScaleAnimation;
    private thumbTranslateAnimationActive;
    constructor(props: ToggleProps);
    onStartShouldSetPanResponder: () => boolean;
    onStartShouldSetPanResponderCapture: () => boolean;
    onMoveShouldSetPanResponder: () => boolean;
    onMoveShouldSetPanResponderCapture: () => boolean;
    onPanResponderTerminationRequest: () => boolean;
    onPanResponderGrant: (event: GestureResponderEvent) => void;
    onPanResponderMove: () => boolean;
    onPanResponderRelease: (event: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onMouseLeave: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    private onMouseEnter;
    private onFocus;
    private onBlur;
    private onPressIn;
    private onPressOut;
    private onPress;
    private getComponentStyle;
    private animateThumbTranslate;
    private animateThumbWidth;
    private animateEllipseScale;
    private stopAnimations;
    private toggle;
    render(): React.ReactElement<ViewProps>;
}
export {};
