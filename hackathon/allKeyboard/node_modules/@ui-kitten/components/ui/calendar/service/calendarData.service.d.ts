/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { DateService } from './date.service';
import { CalendarDateInfo, CalendarRange } from '../type';
export declare type DateRange<D> = CalendarDateInfo<D>[];
export declare type DateBatch<D> = DateRange<D>[];
export declare class CalendarDataService<D> {
    protected dateService: DateService<D>;
    constructor(dateService: DateService<D>);
    createDayPickerData: (date: D, dateRange?: CalendarRange<D>) => DateBatch<D>;
    createMonthPickerData: (date: D, rows: number, columns: number) => DateBatch<D>;
    createYearPickerData: (date: D, rows: number, columns: number) => DateBatch<D>;
    createDayPickerPagerData: (startDate: D, endDate: D) => DateRange<D>;
    createYearPickerPagerData: (startDate: D, endDate: D, rows: number, columns: number) => DateRange<D>;
    getNumberOfMonths: (lhs: D, rhs: D) => number;
    getNumberOfYears: (lhs: D, rhs: D) => number;
    private createDates;
    private withRangedDates;
    private withRangedStartDates;
    private withRangedStartEndDates;
    private withBoundingMonths;
    private addPrevBoundingMonth;
    private addNextBoundingMonth;
    private createPrevBoundingDays;
    private createNextBoundingDays;
    private getStartOfWeekDayDiff;
    private getWeekStartDiff;
    private isShouldAddPrevBoundingMonth;
    private isShouldAddNextBoundingMonth;
    private createDateRangeForMonth;
}
