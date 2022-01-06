"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../../theme");
const baseCalendar_component_1 = require("./baseCalendar.component");
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
let Calendar = class Calendar extends baseCalendar_component_1.BaseCalendarComponent {
    constructor(props) {
        super(props);
        this.createDates = this.createDates.bind(this);
        this.selectedDate = this.selectedDate.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.isDateSelected = this.isDateSelected.bind(this);
        this.shouldUpdateDate = this.shouldUpdateDate.bind(this);
    }
    // BaseCalendarComponent
    createDates(date) {
        return this.dataService.createDayPickerData(date);
    }
    selectedDate() {
        return this.props.date || this.dateService.today();
    }
    onDateSelect(date) {
        this.props.onSelect && this.props.onSelect(date);
    }
    isDateSelected(date) {
        return this.dateService.isSameDaySafe(date, this.selectedDate());
    }
    shouldUpdateDate(props, nextProps) {
        const dateChanged = this.dateService.compareDatesSafe(props.date.date, nextProps.date.date) !== 0;
        if (dateChanged) {
            return true;
        }
        const selectionChanged = props.selected !== nextProps.selected;
        const disablingChanged = props.disabled !== nextProps.disabled;
        const value = selectionChanged || disablingChanged;
        if (value) {
            return true;
        }
        return props.eva.theme !== nextProps.eva.theme;
    }
};
Calendar = __decorate([
    theme_1.styled('Calendar')
], Calendar);
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.component.js.map