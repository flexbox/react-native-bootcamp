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
const divider_component_1 = require("../divider/divider.component");
const calendarHeader_component_1 = require("./components/calendarHeader.component");
const calendarMonthHeader_component_1 = require("./components/calendarMonthHeader.component");
const calendarPicker_component_1 = require("./components/picker/calendarPicker.component");
const calendarDateContent_component_1 = require("./components/calendarDateContent.component");
const type_1 = require("./type");
const type_2 = require("./i18n/type");
const nativeDate_service_1 = require("./service/nativeDate.service");
const calendarData_service_1 = require("./service/calendarData.service");
const PICKER_ROWS = 4;
const PICKER_COLUMNS = 3;
const VIEWS_IN_PICKER = PICKER_ROWS * PICKER_COLUMNS;
class BaseCalendarComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            viewMode: this.props.startView,
            visibleDate: this.dateService.getMonthStart(this.selectedDate()),
        };
        this.dataService = new calendarData_service_1.CalendarDataService(this.dateService);
        this.scrollToToday = () => {
            this.setState({
                viewMode: type_1.CalendarViewModes.DATE,
                visibleDate: this.dateService.today(),
            });
        };
        this.getCalendarStyle = (source) => {
            return {
                container: {
                    width: source.width,
                    paddingVertical: source.paddingVertical,
                    borderColor: source.borderColor,
                    borderWidth: source.borderWidth,
                    borderRadius: source.borderRadius,
                },
                headerContainer: {
                    paddingHorizontal: source.headerPaddingHorizontal,
                    paddingVertical: source.headerPaddingVertical,
                },
                title: {
                    fontSize: source.titleFontSize,
                    fontWeight: source.titleFontWeight,
                    color: source.titleColor,
                    fontFamily: source.titleFontFamily,
                },
                icon: {
                    width: source.iconWidth,
                    height: source.iconHeight,
                    tintColor: source.iconTintColor,
                },
                divider: {
                    marginVertical: source.dividerMarginVertical,
                },
                daysHeaderContainer: {
                    marginHorizontal: source.rowMarginHorizontal,
                },
                row: {
                    minHeight: source.rowMinHeight,
                    marginHorizontal: source.rowMarginHorizontal,
                },
            };
        };
        this.isDayDisabled = ({ date }) => {
            const minDayStart = this.dateService.createDate(this.dateService.getYear(this.min), this.dateService.getMonth(this.min), this.dateService.getDate(this.min));
            const maxDayStart = this.dateService.createDate(this.dateService.getYear(this.max), this.dateService.getMonth(this.max), this.dateService.getDate(this.max));
            const fitsFilter = this.props.filter && !this.props.filter(date) || false;
            return !this.dateService.isBetweenIncludingSafe(date, minDayStart, maxDayStart) || fitsFilter;
        };
        this.isDayToday = ({ date }) => {
            return this.dateService.isSameDaySafe(date, this.dateService.today());
        };
        this.onDaySelect = ({ date }) => {
            this.onDateSelect(date);
        };
        this.onMonthSelect = ({ date }) => {
            const nextVisibleDate = this.dateService.createDate(this.dateService.getYear(this.state.visibleDate), this.dateService.getMonth(date), this.dateService.getDate(this.state.visibleDate));
            this.setState({
                viewMode: this.state.viewMode.pickNext(),
                visibleDate: nextVisibleDate,
            }, () => {
                this.props.onVisibleDateChange?.(this.state.visibleDate, this.state.viewMode.id);
            });
        };
        this.onYearSelect = ({ date }) => {
            const nextVisibleDate = this.dateService.createDate(this.dateService.getYear(date), this.dateService.getMonth(this.state.visibleDate), this.dateService.getDate(this.state.visibleDate));
            this.setState({
                viewMode: this.state.viewMode.pickNext(),
                visibleDate: nextVisibleDate,
            }, () => {
                this.props.onVisibleDateChange?.(this.state.visibleDate, this.state.viewMode.id);
            });
        };
        this.onPickerNavigationPress = () => {
            this.setState({
                viewMode: this.state.viewMode.navigationNext(),
            });
        };
        this.onHeaderNavigationLeftPress = () => {
            this.setState({
                visibleDate: this.createViewModeVisibleDate(-1),
            }, () => {
                this.props.onVisibleDateChange?.(this.state.visibleDate, this.state.viewMode.id);
            });
        };
        this.onHeaderNavigationRightPress = () => {
            this.setState({
                visibleDate: this.createViewModeVisibleDate(1),
            }, () => {
                this.props.onVisibleDateChange?.(this.state.visibleDate, this.state.viewMode.id);
            });
        };
        this.getWeekdayStyle = (source) => {
            return {
                fontSize: source.weekdayTextFontSize,
                fontWeight: source.weekdayTextFontWeight,
                color: source.weekdayTextColor,
                fontFamily: source.weekdayTextFontFamily,
            };
        };
        this.isDaySelected = ({ date }) => {
            return this.isDateSelected(date);
        };
        this.isMonthSelected = ({ date }) => {
            return this.dateService.isSameMonthSafe(date, this.selectedDate());
        };
        this.isYearSelected = ({ date }) => {
            return this.dateService.isSameYearSafe(date, this.selectedDate());
        };
        this.isMonthDisabled = ({ date }) => {
            const minMonthStart = this.dateService.getMonthStart(this.min);
            const maxMonthStart = this.dateService.getMonthStart(this.max);
            return !this.dateService.isBetweenIncludingSafe(date, minMonthStart, maxMonthStart);
        };
        this.isYearDisabled = ({ date }) => {
            const minYearStart = this.dateService.getYearStart(this.min);
            const maxYearStart = this.dateService.getYearEnd(this.max);
            return !this.dateService.isBetweenIncludingSafe(date, minYearStart, maxYearStart);
        };
        this.isMonthToday = (date) => {
            return this.dateService.isSameMonthSafe(date.date, this.dateService.today());
        };
        this.isYearToday = ({ date }) => {
            return this.dateService.isSameYearSafe(date, this.dateService.today());
        };
        this.isHeaderNavigationAllowed = () => {
            return this.state.viewMode.id !== type_1.CalendarViewModes.MONTH.id;
        };
        this.createViewModeVisibleDate = (page) => {
            switch (this.state.viewMode.id) {
                case type_1.CalendarViewModes.DATE.id: {
                    return this.dateService.addMonth(this.state.visibleDate, page);
                }
                case type_1.CalendarViewModes.MONTH.id: {
                    return this.dateService.addYear(this.state.visibleDate, page);
                }
                case type_1.CalendarViewModes.YEAR.id: {
                    return this.dateService.addYear(this.state.visibleDate, VIEWS_IN_PICKER * page);
                }
            }
        };
        this.createViewModeHeaderTitle = (date, viewMode) => {
            switch (viewMode.id) {
                case type_1.CalendarViewModes.DATE.id: {
                    const month = this.props.dateService.getMonthName(date, type_2.TranslationWidth.LONG);
                    const year = this.props.dateService.getYear(date);
                    return `${month} ${year}`;
                }
                case type_1.CalendarViewModes.MONTH.id: {
                    return `${this.dateService.getYear(date)}`;
                }
                case type_1.CalendarViewModes.YEAR.id: {
                    const minDateFormat = this.dateService.getYear(this.min);
                    const maxDateFormat = this.dateService.getYear(this.max);
                    return `${minDateFormat} - ${maxDateFormat}`;
                }
            }
        };
        this.renderDayIfNeeded = (item, style) => {
            const shouldRender = !item.bounding || this.props.boundingMonth;
            if (shouldRender) {
                const renderSelector = this.props.renderDay || this.renderDayElement;
                return renderSelector(item, style);
            }
            return null;
        };
        this.renderWeekdayElement = (weekday, index) => {
            return (react_1.default.createElement(calendarDateContent_component_1.CalendarDateContent, { key: index, textStyle: this.getWeekdayStyle(this.props.eva.style) }, weekday));
        };
        this.renderDayElement = ({ date }, evaStyle) => {
            return (react_1.default.createElement(calendarDateContent_component_1.CalendarDateContent, { style: evaStyle.container, textStyle: evaStyle.text }, this.dateService.getDate(date)));
        };
        this.renderMonthElement = ({ date }, evaStyle) => {
            return (react_1.default.createElement(calendarDateContent_component_1.CalendarDateContent, { style: evaStyle.container, textStyle: evaStyle.text }, this.dateService.getMonthName(date, type_2.TranslationWidth.SHORT)));
        };
        this.renderYearElement = ({ date }, evaStyle) => {
            return (react_1.default.createElement(calendarDateContent_component_1.CalendarDateContent, { style: evaStyle.container, textStyle: evaStyle.text }, this.dateService.getYear(date)));
        };
        this.renderDayPickerElement = (date, evaStyle) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(calendarMonthHeader_component_1.CalendarMonthHeader, { style: evaStyle.daysHeaderContainer, data: this.dateService.getDayOfWeekNames() }, this.renderWeekdayElement),
                react_1.default.createElement(divider_component_1.Divider, { style: evaStyle.divider }),
                react_1.default.createElement(calendarPicker_component_1.CalendarPicker, { rowStyle: evaStyle.row, data: this.createDates(date), onSelect: this.onDaySelect, isItemSelected: this.isDaySelected, isItemDisabled: this.isDayDisabled, isItemToday: this.isDayToday, shouldItemUpdate: this.shouldUpdateDate }, this.renderDayIfNeeded)));
        };
        this.renderMonthPickerElement = (date, evaStyle) => {
            return (react_1.default.createElement(calendarPicker_component_1.CalendarPicker, { rowStyle: evaStyle.row, data: this.dataService.createMonthPickerData(date, PICKER_ROWS, PICKER_COLUMNS), onSelect: this.onMonthSelect, isItemSelected: this.isMonthSelected, isItemDisabled: this.isMonthDisabled, isItemToday: this.isMonthToday }, this.props.renderMonth || this.renderMonthElement));
        };
        this.renderYearPickerElement = (date, style) => {
            return (react_1.default.createElement(calendarPicker_component_1.CalendarPicker, { rowStyle: style.row, data: this.dataService.createYearPickerData(date, PICKER_ROWS, PICKER_COLUMNS), onSelect: this.onYearSelect, isItemSelected: this.isYearSelected, isItemDisabled: this.isYearDisabled, isItemToday: this.isYearToday }, this.props.renderYear || this.renderYearElement));
        };
        this.renderPickerElement = (date, style) => {
            switch (this.state.viewMode.id) {
                case type_1.CalendarViewModes.DATE.id:
                    return this.renderDayPickerElement(date, style);
                case type_1.CalendarViewModes.MONTH.id:
                    return this.renderMonthPickerElement(date, style);
                case type_1.CalendarViewModes.YEAR.id:
                    return this.renderYearPickerElement(date, style);
            }
        };
        this.renderFooterElement = (evaStyle) => {
            if (this.props.renderFooter) {
                return this.props.renderFooter();
            }
            return null;
        };
        this.renderHeaderElement = (evaStyle) => {
            const titleSelector = this.props.title || this.createViewModeHeaderTitle;
            return (react_1.default.createElement(calendarHeader_component_1.CalendarHeader, { style: evaStyle.headerContainer, title: titleSelector(this.state.visibleDate, this.state.viewMode), titleStyle: evaStyle.title, iconStyle: evaStyle.icon, lateralNavigationAllowed: this.isHeaderNavigationAllowed(), onTitlePress: this.onPickerNavigationPress, onNavigationLeftPress: this.onHeaderNavigationLeftPress, onNavigationRightPress: this.onHeaderNavigationRightPress }));
        };
    }
    get dateService() {
        return this.props.dateService;
    }
    get min() {
        return this.props.min || this.dateService.getYearStart(this.dateService.today());
    }
    get max() {
        return this.props.max || this.dateService.getYearEnd(this.dateService.today());
    }
    render() {
        const { eva, style, ...viewProps } = this.props;
        const evaStyle = this.getCalendarStyle(eva.style);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.container, style] }),
            this.renderHeaderElement(evaStyle),
            this.renderPickerElement(this.state.visibleDate, evaStyle),
            this.renderFooterElement(evaStyle)));
    }
}
exports.BaseCalendarComponent = BaseCalendarComponent;
BaseCalendarComponent.defaultProps = {
    dateService: new nativeDate_service_1.NativeDateService(),
    boundingMonth: true,
    startView: type_1.CalendarViewModes.DATE,
};
//# sourceMappingURL=baseCalendar.component.js.map