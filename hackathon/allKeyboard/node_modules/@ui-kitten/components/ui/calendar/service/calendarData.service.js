"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const date_service_1 = require("./date.service");
const helpers_1 = require("./helpers");
const DEFAULT_DATE_OPTIONS = {
    bounding: false,
    holiday: false,
    range: false,
};
class CalendarDataService {
    constructor(dateService) {
        this.dateService = dateService;
        this.createDayPickerData = (date, dateRange) => {
            const weeks = this.createDates(date, DEFAULT_DATE_OPTIONS, dateRange);
            return this.withBoundingMonths(weeks, date);
        };
        this.createMonthPickerData = (date, rows, columns) => {
            const yearStart = this.dateService.getYearStart(date);
            const monthRange = helpers_1.range(rows * columns, (index) => {
                const monthDate = this.dateService.addMonth(yearStart, index);
                return { date: monthDate, ...DEFAULT_DATE_OPTIONS };
            });
            return helpers_1.batch(monthRange, rows);
        };
        this.createYearPickerData = (date, rows, columns) => {
            const yearStart = this.dateService.getYearStart(date);
            const yearRange = helpers_1.range(rows * columns, (index) => {
                const yearDate = this.dateService.addYear(yearStart, index);
                return { date: yearDate, ...DEFAULT_DATE_OPTIONS };
            });
            return helpers_1.batch(yearRange, rows);
        };
        this.createDayPickerPagerData = (startDate, endDate) => {
            const numberOfDayPickers = this.getNumberOfMonths(startDate, endDate) + 1;
            return helpers_1.range(numberOfDayPickers, (index) => {
                const monthDate = this.dateService.addMonth(startDate, index);
                return { date: monthDate, ...DEFAULT_DATE_OPTIONS };
            });
        };
        this.createYearPickerPagerData = (startDate, endDate, rows, columns) => {
            const numberOfYears = this.getNumberOfYears(startDate, endDate) + 1;
            const numberOfYearPickers = Math.max(Math.ceil(numberOfYears / (rows * columns)), 1);
            return helpers_1.range(numberOfYearPickers, (index) => {
                const yearDate = this.dateService.addYear(startDate, index * rows * columns);
                return { date: yearDate, ...DEFAULT_DATE_OPTIONS };
            });
        };
        this.getNumberOfMonths = (lhs, rhs) => {
            const numberOfYears = this.getNumberOfYears(lhs, rhs);
            const numberOfMonths = this.dateService.getMonth(rhs) - this.dateService.getMonth(lhs);
            return numberOfMonths + numberOfYears * date_service_1.DateService.MONTHS_IN_YEAR;
        };
        this.getNumberOfYears = (lhs, rhs) => {
            return this.dateService.getYear(rhs) - this.dateService.getYear(lhs);
        };
    }
    createDates(activeMonth, options, dateRange) {
        let days = this.createDateRangeForMonth(activeMonth, options);
        if (dateRange) {
            days = this.withRangedDates(days, dateRange);
        }
        const startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
        return helpers_1.batch(days, date_service_1.DateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    }
    withRangedDates(days, calendarRange) {
        if (calendarRange.startDate && !calendarRange.endDate) {
            return this.withRangedStartDates(days, calendarRange.startDate);
        }
        if (calendarRange.startDate && calendarRange.endDate) {
            return this.withRangedStartEndDates(days, calendarRange.startDate, calendarRange.endDate);
        }
        return days;
    }
    withRangedStartDates(days, startDate) {
        return days.map((day) => {
            const isSameStartDate = this.dateService.compareDatesSafe(day.date, startDate) === 0;
            return isSameStartDate ? { ...day, range: true } : day;
        });
    }
    withRangedStartEndDates(days, startDate, endDate) {
        return days.map((day) => {
            const isSameStartDate = this.dateService.compareDatesSafe(day.date, startDate) === 0;
            const isSameEndDate = this.dateService.compareDatesSafe(day.date, endDate) === 0;
            if (isSameStartDate || isSameEndDate) {
                return { ...day, range: true };
            }
            else {
                const isInRange = this.dateService.isBetween(day.date, startDate, endDate);
                return { ...day, range: isInRange };
            }
        });
    }
    withBoundingMonths(weeks, activeMonth) {
        let withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth);
        }
        return withBoundingMonths;
    }
    addPrevBoundingMonth(weeks, activeMonth) {
        const firstWeek = weeks.shift();
        const numberOfBoundingDates = date_service_1.DateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift(...this.createPrevBoundingDays(activeMonth, numberOfBoundingDates));
        return [firstWeek, ...weeks];
    }
    addNextBoundingMonth(weeks, activeMonth) {
        const lastWeek = weeks.pop();
        const numberOfBoundingDates = date_service_1.DateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push(...this.createNextBoundingDays(activeMonth, numberOfBoundingDates));
        return [...weeks, lastWeek];
    }
    createPrevBoundingDays(activeMonth, numberOfBoundingDates) {
        const month = this.dateService.addMonth(activeMonth, -1);
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month, DEFAULT_DATE_OPTIONS)
            .slice(daysInMonth - numberOfBoundingDates)
            .map((date) => {
            return { ...date, bounding: true };
        });
    }
    createNextBoundingDays(activeMonth, numberOfBoundingDates) {
        const month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month, DEFAULT_DATE_OPTIONS)
            .slice(0, numberOfBoundingDates)
            .map((date) => {
            return { ...date, bounding: true };
        });
    }
    getStartOfWeekDayDiff(date) {
        const startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth);
    }
    getWeekStartDiff(date) {
        return (date_service_1.DateService.DAYS_IN_WEEK
            - this.dateService.getFirstDayOfWeek()
            + this.dateService.getDayOfWeek(date)) % date_service_1.DateService.DAYS_IN_WEEK;
    }
    isShouldAddPrevBoundingMonth(weeks) {
        return weeks[0].length < date_service_1.DateService.DAYS_IN_WEEK;
    }
    isShouldAddNextBoundingMonth(weeks) {
        return weeks[weeks.length - 1].length < date_service_1.DateService.DAYS_IN_WEEK;
    }
    createDateRangeForMonth(monthDate, options) {
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(monthDate);
        return helpers_1.range(daysInMonth, (i) => {
            const year = this.dateService.getYear(monthDate);
            const month = this.dateService.getMonth(monthDate);
            const date = this.dateService.createDate(year, month, i + 1);
            return { date, ...options };
        });
    }
}
exports.CalendarDataService = CalendarDataService;
//# sourceMappingURL=calendarData.service.js.map