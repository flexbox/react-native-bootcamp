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
class CalendarMonthHeader extends react_1.default.Component {
    render() {
        const { style, data, children, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [styles.container, style] }), data.map(children)));
    }
}
exports.CalendarMonthHeader = CalendarMonthHeader;
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
//# sourceMappingURL=calendarMonthHeader.component.js.map