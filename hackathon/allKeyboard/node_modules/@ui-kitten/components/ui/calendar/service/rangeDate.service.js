"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class RangeDateService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    createRange(range, date) {
        switch (true) {
            case (!range.startDate && !range.endDate):
                return { startDate: date, endDate: null };
            case (range.startDate && !range.endDate):
                return this.createRangeForStart(range, date);
            case (range.startDate !== null && range.endDate !== null):
                return this.createRangeForStartEnd(date);
            default:
                return range;
        }
    }
    createRangeForStart(range, date) {
        if (this.dateService.compareDatesSafe(date, range.startDate) === 1) {
            return { startDate: range.startDate, endDate: date };
        }
        else if (this.dateService.compareDatesSafe(date, range.startDate) === -1) {
            return { startDate: date, endDate: range.startDate };
        }
        else {
            return range;
        }
    }
    createRangeForStartEnd(date) {
        return { startDate: date, endDate: null };
    }
}
exports.RangeDateService = RangeDateService;
//# sourceMappingURL=rangeDate.service.js.map