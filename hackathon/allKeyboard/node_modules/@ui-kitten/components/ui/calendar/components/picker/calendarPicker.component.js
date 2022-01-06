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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const calendarPickerRow_component_1 = require("./calendarPickerRow.component");
const calendarPickerCell_component_1 = require("./calendarPickerCell.component");
class CalendarPicker extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.isFirstRangeItem = (item, range) => {
            return range.indexOf(item) === 0;
        };
        this.isLastRangeItem = (item, range) => {
            return range.indexOf(item) === range.length - 1;
        };
        this.renderCellElement = (item, index) => {
            const isFirstRangeItem = this.isFirstRangeItem(item, this.rangedArray);
            const isLastRangeItem = this.isLastRangeItem(item, this.rangedArray);
            return (react_1.default.createElement(calendarPickerCell_component_1.CalendarPickerCell, { key: index, date: item, selected: this.props.isItemSelected(item), disabled: this.props.isItemDisabled(item), bounding: item.bounding, today: this.props.isItemToday(item), range: item.range, firstRangeItem: isFirstRangeItem, lastRangeItem: isLastRangeItem, onSelect: this.props.onSelect, shouldComponentUpdate: this.props.shouldItemUpdate }, this.props.children));
        };
        this.renderRowElement = (item, index) => {
            return (react_1.default.createElement(calendarPickerRow_component_1.CalendarPickerRow, { key: index, style: this.props.rowStyle, data: item }, this.renderCellElement));
        };
    }
    get rangedArray() {
        const { data } = this.props;
        return [].concat(...data).filter((item) => {
            return item.range;
        });
    }
    render() {
        const { data, children, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps), data.map(this.renderRowElement)));
    }
}
exports.CalendarPicker = CalendarPicker;
//# sourceMappingURL=calendarPicker.component.js.map