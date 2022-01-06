/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { DateService } from './date.service';
import { I18nConfig, TranslationWidth } from '../i18n/type';
export declare const LOCALE_DEFAULT = "en";
export interface NativeDateServiceOptions {
    startDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    format?: string;
    i18n?: I18nConfig;
}
/**
 * The `NativeDateService` is basic implementation of `DateService` using
 * native js date objects.
 */
export declare class NativeDateService extends DateService<Date> {
    protected options: NativeDateServiceOptions;
    protected i18nSettings: import("fecha").i18nSettings;
    constructor(locale?: string, options?: NativeDateServiceOptions);
    setLocale(locale: string): void;
    isValidDateString(date: string, format: string): boolean;
    today(): Date;
    getDate(date: Date): number;
    getMonth(date: Date): number;
    getYear(date: Date): number;
    getDayOfWeek(date: Date): number;
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek(): number;
    getMonthName(date: Date, style?: TranslationWidth): string;
    getMonthNameByIndex(index: number, style?: TranslationWidth): string;
    getDayOfWeekNames(style?: TranslationWidth): string[];
    format(date: Date, format: string): string;
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date: string, format: string): Date;
    addDay(date: Date, num: number): Date;
    addMonth(date: Date, num: number): Date;
    addYear(date: Date, num: number): Date;
    clone(date: Date): Date;
    compareDates(date1: Date, date2: Date): number;
    compareDatesSafe(date1: Date, date2: Date): number;
    createDate(year: number, month: number, date: number): Date;
    getMonthEnd(date: Date): Date;
    getMonthStart(date: Date): Date;
    getNumberOfDaysInMonth(date: Date): number;
    getYearEnd(date: Date): Date;
    getYearStart(date: Date): Date;
    isSameDay(date1: Date, date2: Date): boolean;
    isSameMonth(date1: Date, date2: Date): boolean;
    isSameYear(date1: Date, date2: Date): boolean;
    getId(): string;
    protected shiftDayOfWeekNames<T>(value: T[], offset: number): T[];
    private getFechaDayNames;
    private getFechaMonthNames;
    private setFechaLocaleData;
}
