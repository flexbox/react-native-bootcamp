/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps, StyleProp, TouchableOpacityProps, ViewProps, ViewStyle } from 'react-native';
import { EvaInputSize, EvaStatus, RenderProp } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { BaseCalendarProps } from '../calendar/baseCalendar.component';
import { CalendarElement } from '../calendar/calendar.component';
import { RangeCalendarElement } from '../calendar/rangeCalendar.component';
import { PopoverPlacement } from '../popover/type';
import { TextProps } from '../text/text.component';
export interface BaseDatepickerProps<D = Date> extends StyledComponentProps, TouchableOpacityProps, BaseCalendarProps<D> {
    controlStyle?: StyleProp<ViewStyle>;
    label?: RenderProp<TextProps> | React.ReactText;
    caption?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    status?: EvaStatus;
    size?: EvaInputSize;
    placeholder?: RenderProp<TextProps> | React.ReactText;
    placement?: PopoverPlacement | string;
    backdropStyle?: StyleProp<ViewStyle>;
    onFocus?: () => void;
    onBlur?: () => void;
}
interface State {
    visible: boolean;
}
export declare abstract class BaseDatepickerComponent<P, D = Date> extends React.Component<BaseDatepickerProps<D> & P, State> {
    static defaultProps: Partial<BaseDatepickerProps>;
    state: State;
    private popoverRef;
    show: () => void;
    hide: () => void;
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    abstract clear(): void;
    protected abstract getComponentTitle(): RenderProp<TextProps> | React.ReactText;
    protected abstract renderCalendar(): CalendarElement<D> | RangeCalendarElement<D>;
    private getComponentStyle;
    private onPress;
    private onPressIn;
    private onPressOut;
    private onPickerVisible;
    private onPickerInvisible;
    private setPickerVisible;
    private setPickerInvisible;
    private renderInputElement;
    render(): React.ReactElement<ViewProps>;
}
export {};
