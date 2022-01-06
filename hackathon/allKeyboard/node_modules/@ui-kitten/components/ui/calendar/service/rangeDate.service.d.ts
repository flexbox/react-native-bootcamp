/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { DateService } from './date.service';
import { CalendarRange } from '../type';
export declare class RangeDateService<D> {
    private dateService;
    constructor(dateService: DateService<D>);
    createRange(range: CalendarRange<D>, date: D): CalendarRange<D>;
    private createRangeForStart;
    private createRangeForStartEnd;
}
