"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class DateService {
    setLocale(locale) {
        this.locale = locale;
    }
    compareDatesSafe(date1, date2) {
        if (date1 && date2) {
            return this.compareDates(date1, date2);
        }
        else if (!date1 && !date2) {
            return 0;
        }
        return -1;
    }
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetween(date, start, end) {
        return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    }
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetweenSafe(date, start, end) {
        return date && start && end && this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    }
    /**
     * Checks if the date is between the start date and the end date including bounds.
     * */
    isBetweenIncluding(date, start, end) {
        return this.compareDates(date, start) >= 0 && this.compareDates(date, end) <= 0;
    }
    /**
     * Checks if the date is between the start date and the end date including bounds.
     * */
    isBetweenIncludingSafe(date, start, end) {
        return date && start && end && this.isBetweenIncluding(date, start, end);
    }
    /**
     * Checks is two dates have the same day.
     * */
    isSameDaySafe(date1, date2) {
        return date1 && date2 && this.isSameDay(date1, date2);
    }
    /**
     * Checks is two dates have the same month.
     * */
    isSameMonthSafe(date1, date2) {
        return date1 && date2 && this.isSameMonth(date1, date2);
    }
    /**
     * Checks is two dates have the same year.
     * */
    isSameYearSafe(date1, date2) {
        return date1 && date2 && this.isSameYear(date1, date2);
    }
}
exports.DateService = DateService;
DateService.DAYS_IN_WEEK = 7;
DateService.MONTHS_IN_YEAR = 12;
//# sourceMappingURL=date.service.js.map