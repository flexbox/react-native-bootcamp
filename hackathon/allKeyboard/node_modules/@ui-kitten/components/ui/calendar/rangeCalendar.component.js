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
const rangeDate_service_1 = require("./service/rangeDate.service");
/**
 * Range Calendar provides a simple way to select a date range.
 *
 * Supports locales and different date objects like Moment.js or date-fns.
 * Composes date picker components in a horizontal pageable list.
 *
 * @extends React.Component
 *
 * @property {CalendarRange<D>} range - Date range which is currently selected.
 * CalendarRange `startDate?: D, endDate?: D` - Object with start and end dates for date range.
 * A range may contain only a startDate or both startDate and endDate properties meaning completeness of picked value.
 *
 * @property {(CalendarRange) => void} onSelect - Called when day cell is pressed.
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
 * @property {boolean} boundingMonth - Defines if we should render previous and next months in the current month view.
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
 * @overview-example RangeCalendarSimpleUsage
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
 */
let RangeCalendar = class RangeCalendar extends baseCalendar_component_1.BaseCalendarComponent {
    constructor(props) {
        super(props);
        this.rangeDateService = new rangeDate_service_1.RangeDateService(this.dateService);
        this.createDates = this.createDates.bind(this);
        this.selectedDate = this.selectedDate.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.isDateSelected = this.isDateSelected.bind(this);
        this.shouldUpdateDate = this.shouldUpdateDate.bind(this);
    }
    // BaseCalendarComponent
    createDates(date) {
        return this.dataService.createDayPickerData(date, this.props.range);
    }
    selectedDate() {
        return this.dateService.today();
    }
    onDateSelect(date) {
        if (this.props.onSelect) {
            const range = this.rangeDateService.createRange(this.props.range, date);
            this.props.onSelect(range);
        }
    }
    isDateSelected(date) {
        return false;
    }
    shouldUpdateDate(props, nextProps) {
        const dateChanged = this.dateService.compareDatesSafe(props.date.date, nextProps.date.date) !== 0;
        if (dateChanged) {
            return true;
        }
        const selectionChanged = props.selected !== nextProps.selected;
        const disablingChanged = props.disabled !== nextProps.disabled;
        const rangeChanged = props.range !== nextProps.range;
        const rangeStartPlaceChanged = props.firstRangeItem !== nextProps.firstRangeItem;
        const rangeEndPlaceChanged = props.lastRangeItem !== nextProps.lastRangeItem;
        const shouldUpdate = selectionChanged
            || disablingChanged
            || rangeChanged
            || rangeStartPlaceChanged
            || rangeEndPlaceChanged;
        if (shouldUpdate) {
            return true;
        }
        return props.eva.theme !== nextProps.eva.theme;
    }
};
RangeCalendar.defaultProps = {
    ...baseCalendar_component_1.BaseCalendarComponent.defaultProps,
    range: {},
};
RangeCalendar = __decorate([
    theme_1.styled('Calendar')
], RangeCalendar);
exports.RangeCalendar = RangeCalendar;
//# sourceMappingURL=rangeCalendar.component.js.map