/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { EvaProp, StyleType } from '../../theme';
import { CalendarPickerCellProps } from './components/picker/calendarPickerCell.component';
import { CalendarDateInfo, CalendarViewMode, CalendarViewModeId } from './type';
import { DateService } from './service/date.service';
import { CalendarDataService, DateBatch } from './service/calendarData.service';
export interface BaseCalendarProps<D = Date> extends ViewProps {
    min?: D;
    max?: D;
    dateService?: DateService<D>;
    boundingMonth?: boolean;
    startView?: CalendarViewMode;
    title?: (date: D, viewMode: CalendarViewMode) => string;
    filter?: (date: D) => boolean;
    renderFooter?: () => React.ReactElement;
    renderDay?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
    renderMonth?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
    renderYear?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
    onVisibleDateChange?: (date: D, viewModeId: CalendarViewModeId) => void;
    eva?: EvaProp;
}
export declare type BaseCalendarElement<D> = React.ReactElement<BaseCalendarProps<D>>;
interface State<D> {
    viewMode: CalendarViewMode;
    visibleDate: D;
}
export declare abstract class BaseCalendarComponent<P, D = Date> extends React.Component<BaseCalendarProps<D> & P, State<D>> {
    static defaultProps: Partial<BaseCalendarProps>;
    state: State<D>;
    protected dataService: CalendarDataService<D>;
    protected get dateService(): DateService<D>;
    private get min();
    private get max();
    scrollToToday: () => void;
    getCalendarStyle: (source: Record<string, any>) => {
        container: {
            width: any;
            paddingVertical: any;
            borderColor: any;
            borderWidth: any;
            borderRadius: any;
        };
        headerContainer: {
            paddingHorizontal: any;
            paddingVertical: any;
        };
        title: {
            fontSize: any;
            fontWeight: any;
            color: any;
            fontFamily: any;
        };
        icon: {
            width: any;
            height: any;
            tintColor: any;
        };
        divider: {
            marginVertical: any;
        };
        daysHeaderContainer: {
            marginHorizontal: any;
        };
        row: {
            minHeight: any;
            marginHorizontal: any;
        };
    };
    isDayDisabled: ({ date }: CalendarDateInfo<D>) => boolean;
    isDayToday: ({ date }: CalendarDateInfo<D>) => boolean;
    protected abstract createDates(date: D): DateBatch<D>;
    protected abstract selectedDate(): D;
    protected abstract onDateSelect(item: D): void;
    protected abstract isDateSelected(date: D): boolean;
    protected abstract shouldUpdateDate(props: CalendarPickerCellProps<D>, nextProps: CalendarPickerCellProps<D>): boolean;
    private onDaySelect;
    private onMonthSelect;
    private onYearSelect;
    private onPickerNavigationPress;
    private onHeaderNavigationLeftPress;
    private onHeaderNavigationRightPress;
    private getWeekdayStyle;
    private isDaySelected;
    private isMonthSelected;
    private isYearSelected;
    private isMonthDisabled;
    private isYearDisabled;
    private isMonthToday;
    private isYearToday;
    private isHeaderNavigationAllowed;
    private createViewModeVisibleDate;
    private createViewModeHeaderTitle;
    private renderDayIfNeeded;
    private renderWeekdayElement;
    private renderDayElement;
    private renderMonthElement;
    private renderYearElement;
    private renderDayPickerElement;
    private renderMonthPickerElement;
    private renderYearPickerElement;
    private renderPickerElement;
    private renderFooterElement;
    private renderHeaderElement;
    render(): React.ReactElement<ViewProps>;
}
export {};
