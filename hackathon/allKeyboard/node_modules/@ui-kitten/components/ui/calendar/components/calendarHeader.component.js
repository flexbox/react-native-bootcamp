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
const devsupport_1 = require("../../../devsupport");
const button_component_1 = require("../../button/button.component");
const text_component_1 = require("../../text/text.component");
const chevronDown_component_1 = require("../../shared/chevronDown.component");
const chevronLeft_component_1 = require("../../shared/chevronLeft.component");
const chevronRight_component_1 = require("../../shared/chevronRight.component");
class CalendarHeader extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.renderTitleIcon = () => {
            const { tintColor, ...svgStyle } = this.props.iconStyle;
            return (react_1.default.createElement(chevronDown_component_1.ChevronDown, { style: [styles.headerButtonIcon, svgStyle], fill: tintColor }));
        };
        this.renderLeftIcon = () => {
            const { tintColor, ...svgStyle } = this.props.iconStyle;
            const IconComponent = devsupport_1.RTLService.select(chevronLeft_component_1.ChevronLeft, chevronRight_component_1.ChevronRight);
            return (react_1.default.createElement(IconComponent, { style: [styles.lateralIcon, svgStyle], fill: tintColor }));
        };
        this.renderRightIcon = () => {
            const { tintColor, ...svgStyle } = this.props.iconStyle;
            const IconComponent = devsupport_1.RTLService.select(chevronRight_component_1.ChevronRight, chevronLeft_component_1.ChevronLeft);
            return (react_1.default.createElement(IconComponent, { style: [styles.lateralIcon, svgStyle], fill: tintColor }));
        };
        this.renderLateralNavigationControls = () => {
            return (react_1.default.createElement(react_native_1.View, { style: styles.subContainer },
                react_1.default.createElement(button_component_1.Button, { appearance: 'ghost', accessoryRight: this.renderLeftIcon, onPress: this.props.onNavigationLeftPress }),
                react_1.default.createElement(button_component_1.Button, { appearance: 'ghost', accessoryRight: this.renderRightIcon, onPress: this.props.onNavigationRightPress })));
        };
        this.renderTitleElement = (props) => {
            return (react_1.default.createElement(text_component_1.Text, Object.assign({}, props, { style: [props.style, styles.headerButtonText, this.props.titleStyle] }), this.props.title));
        };
    }
    render() {
        const { style, titleStyle, onTitlePress, title, lateralNavigationAllowed, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [styles.container, style] }),
            react_1.default.createElement(button_component_1.Button, { appearance: 'ghost', accessoryRight: this.renderTitleIcon, onPress: onTitlePress }, this.renderTitleElement),
            lateralNavigationAllowed && this.renderLateralNavigationControls()));
    }
}
exports.CalendarHeader = CalendarHeader;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerButtonText: {
        marginHorizontal: 0,
    },
    headerButtonIcon: {
        marginHorizontal: 0,
    },
    lateralIcon: {
        marginHorizontal: 0,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=calendarHeader.component.js.map