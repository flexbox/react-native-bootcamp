/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { StyledComponentProps } from '../../theme';
import { BaseCalendarComponent, BaseCalendarProps } from './baseCalendar.component';
import { CalendarPickerCellProps } from './components/picker/calendarPickerCell.component';
import { DateBatch } from './service/calendarData.service';
export interface CalendarProps<D = Date> extends StyledComponentProps, BaseCalendarProps<D> {
    date?: D;
    onSelect?: (date: D) => void;
}
export declare type CalendarElement<D = Date> = React.ReactElement<CalendarProps<D>>;
/**
 * Calendar provides a simple way to select a date.
 *
 * @extends React.Component
 *
 * @property {D} date - Date which is currently selected.
 * Defaults to current date.
 *
 * @property {(D) => void} onSelect - Called when date cell is pressed.
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 * Moment.js service can be provided by installing `@ui-kitten/moment` package.
 * date-fns service can be provided by installing `@ui-kitten/date-fns` package.
 *
 * @property {boolean} boundingMonth - Whether previous and next months in the current month view should be rendered.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar.
 * Can be `CalendarViewModes.DATE`, `CalendarViewModes.MONTH` or `CalendarViewModes.YEAR`.
 * Defaults to *CalendarViewModes.DATE*.
 *
 * @property {(D) => string} title - A function to transform selected date to a string displayed in header.
 *
 * @property {(D) => boolean} filter - A function to determine whether particular date cells should be disabled.
 *
 * @property {() => ReactElement} renderFooter - Function component
 * to render below the calendar.
 *
 * @property {(D, NamedStyles) => ReactElement} renderDay - Function component
 * to render instead of default day cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {(D, NamedStyles) => ReactElement} renderMonth - Function component
 * to render instead of default month cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {(D, NamedStyles) => ReactElement} renderYear - Function component
 * to render instead of default year cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {(D, CalendarViewMode) => void} onVisibleDateChange - Called when navigating to the previous or next month / year.
 * viewMode returns string with current calendar view ("YEAR", "MONTH", "DATE").
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example CalendarSimpleUsage
 *
 * @overview-example RangeCalendarSimpleUsage
 * There is an alternative calendar component, to work with date ranges.
 *
 * @overview-example RangeCalendarType
 * Ranged calendar works with special range object - CalendarRange.
 * For empty ranges, range has no date properties.
 * And for incomplete ranges, there is only a `startDate` property.
 * ```
 * export interface CalendarRange<D> {
 *   startDate?: D;
 *   endDate?: D;
 * }
 * ```
 *
 * @overview-example CalendarFilters
 * Calendar may accept minimal and maximum dates, filter functions, and `boundingMonth` property,
 * which disables displaying previous month dates at the current date view.
 *
 * @overview-example CalendarLocaleSettings
 * Also, it is possible to setup locale by configuring Date Service.
 *
 * @overview-example CalendarMoment
 * Calendar is able to work with Moment, by configuring date service.
 * In order to use Moment, `@ui-kitten/moment` package is required.
 *
 * @overview-example CalendarCustomDay
 * To render custom cells, `renderDay`, `renderMonth` and `renderYear` properties may be used.
 *
 * @overview-example CalendarTheming
 * Styling of the calendar is possible with [configuring a custom theme](guides/branding).
 */
export declare class Calendar<D = Date> extends BaseCalendarComponent<CalendarProps<D>, D> {
    constructor(props: CalendarProps<D>);
    protected createDates(date: D): DateBatch<D>;
    protected selectedDate(): D;
    protected onDateSelect(date: D): void;
    protected isDateSelected(date: D): boolean;
    protected shouldUpdateDate(props: CalendarPickerCellProps<D>, nextProps: CalendarPickerCellProps<D>): boolean;
}
