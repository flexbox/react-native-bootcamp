/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export interface CalendarDateOptions {
    bounding: boolean;
    holiday: boolean;
    range?: boolean;
}
export interface CalendarRange<D> {
    startDate?: D;
    endDate?: D;
}
export interface CalendarDateInfo<D> extends CalendarDateOptions {
    date: D;
}
export declare type CalendarViewModeId = 'DATE' | 'MONTH' | 'YEAR';
export interface CalendarViewMode {
    id: CalendarViewModeId;
    navigationNext: () => CalendarViewMode;
    pickNext: () => CalendarViewMode;
}
interface CalendarViewModes {
    DATE: CalendarViewMode;
    MONTH: CalendarViewMode;
    YEAR: CalendarViewMode;
}
export declare const CalendarViewModes: CalendarViewModes;
export {};
