"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fecha_1 = __importDefault(require("fecha"));
const date_service_1 = require("./date.service");
const type_1 = require("../i18n/type");
const en_1 = require("../i18n/en");
exports.LOCALE_DEFAULT = 'en';
const DEFAULT_OPTIONS = {
    format: 'DD/MM/YYYY',
    startDayOfWeek: 0,
};
/**
 * The `NativeDateService` is basic implementation of `DateService` using
 * native js date objects.
 */
class NativeDateService extends date_service_1.DateService {
    constructor(locale = exports.LOCALE_DEFAULT, options) {
        super();
        this.i18nSettings = fecha_1.default.i18n;
        this.options = { ...DEFAULT_OPTIONS, ...options };
        super.setLocale(this.options.i18n ? locale : exports.LOCALE_DEFAULT);
        this.setFechaLocaleData(this.options.i18n || en_1.EN);
    }
    setLocale(locale) {
        console.warn('Runtime locale is not supported');
    }
    isValidDateString(date, format) {
        return !isNaN(this.parse(date, format).getTime());
    }
    today() {
        return new Date();
    }
    getDate(date) {
        return date.getDate();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getYear(date) {
        return date.getFullYear();
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek() {
        return this.options.startDayOfWeek;
    }
    getMonthName(date, style = type_1.TranslationWidth.SHORT) {
        const index = date.getMonth();
        return this.getMonthNameByIndex(index, style);
    }
    getMonthNameByIndex(index, style = type_1.TranslationWidth.SHORT) {
        return this.getFechaMonthNames(style)[index];
    }
    getDayOfWeekNames(style = type_1.TranslationWidth.SHORT) {
        const dayNames = this.getFechaDayNames(style);
        // avoid mutation of source array
        return this.shiftDayOfWeekNames([...dayNames], this.options.startDayOfWeek);
    }
    format(date, format) {
        return fecha_1.default.format(date, format || this.options.format, this.i18nSettings);
    }
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date, format) {
        return new Date(Date.parse(date));
    }
    addDay(date, num) {
        return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
    }
    addMonth(date, num) {
        const month = this.createDate(date.getFullYear(), date.getMonth() + num, 1);
        // In case of date has more days than calculated month js Date will change that month to the next one
        // because of the date overflow.
        month.setDate(Math.min(date.getDate(), this.getMonthEnd(month).getDate()));
        return month;
    }
    addYear(date, num) {
        return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
    }
    clone(date) {
        return new Date(date.getTime());
    }
    compareDates(date1, date2) {
        return date1.getTime() - date2.getTime();
    }
    compareDatesSafe(date1, date2) {
        if (this.compareDates(date1, date2) < 0) {
            return -1;
        }
        else if (this.compareDates(date1, date2) > 0) {
            return 1;
        }
        else if (this.compareDates(date1, date2) === 0) {
            return 0;
        }
    }
    createDate(year, month, date) {
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(result.getFullYear() - 1900);
        }
        return result;
    }
    getMonthEnd(date) {
        return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getMonthStart(date) {
        return this.createDate(date.getFullYear(), date.getMonth(), 1);
    }
    getNumberOfDaysInMonth(date) {
        return this.getMonthEnd(date).getDate();
    }
    getYearEnd(date) {
        return this.createDate(date.getFullYear(), 11, 31);
    }
    getYearStart(date) {
        return this.createDate(date.getFullYear(), 0, 1);
    }
    isSameDay(date1, date2) {
        return this.isSameMonth(date1, date2) && date1.getDate() === date2.getDate();
    }
    isSameMonth(date1, date2) {
        return this.isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
    }
    isSameYear(date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    }
    getId() {
        return 'native';
    }
    shiftDayOfWeekNames(value, offset) {
        return value.splice(offset).concat(value);
    }
    getFechaDayNames(style) {
        switch (style) {
            case type_1.TranslationWidth.SHORT:
                return this.i18nSettings.dayNamesShort;
            case type_1.TranslationWidth.LONG:
                return this.i18nSettings.dayNames;
        }
    }
    getFechaMonthNames(style) {
        switch (style) {
            case type_1.TranslationWidth.SHORT:
                return this.i18nSettings.monthNamesShort;
            case type_1.TranslationWidth.LONG:
                return this.i18nSettings.monthNames;
        }
    }
    setFechaLocaleData(config) {
        this.i18nSettings = {
            ...fecha_1.default.i18n,
            dayNames: config.dayNames[type_1.TranslationWidth.LONG],
            dayNamesShort: config.dayNames[type_1.TranslationWidth.SHORT],
            monthNames: config.monthNames[type_1.TranslationWidth.LONG],
            monthNamesShort: config.monthNames[type_1.TranslationWidth.SHORT],
        };
    }
}
exports.NativeDateService = NativeDateService;
//# sourceMappingURL=nativeDate.service.js.map