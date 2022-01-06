"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const menu_component_1 = require("../menu/menu.component");
const popover_component_1 = require("../popover/popover.component");
/**
 * Displays a menu relative to another view.
 * Menu should contain MenuItem components to provide a useful component.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets menu visible.
 *
 * @method {() => void} hide - Sets menu invisible.
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * items to be rendered within menu.
 *
 * @property {() => ReactElement} anchor - A component relative to which content component will be shown.
 *
 * @property {boolean} visible - Whether menu is visible.
 * Defaults to false.
 *
 * @property {IndexPath} selectedIndex - Index of selected item.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Updating this property is not required if marking items selected is not needed.
 *
 * @property {(IndexPath) => void} onSelect - Called when item is pressed.
 *
 * @property {() => void} onBackdropPress - Called when popover is visible and the underlying view was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {string | PopoverPlacement} placement - Position of the options list relative to the `children`.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {boolean} fullWidth - Whether a menu should take the width of `anchor`.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 **
 * @overview-example OverflowMenuSimpleUsage
 * OverflowMenu accepts `MenuItem` components as child elements and is displayed relative to `anchor` view.
 *
 * @overview-example OverflowMenuIndexType
 * Menu works with special index object - IndexPath.
 * For non-grouped items in menu, there is only a `row` property.
 * Otherwise, `row` is an index of item within the group, section - index of group in menu.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example OverflowMenuNoMarkers
 * Pressing of menu items can be handled without marking items.
 *
 * @overview-example OverflowMenuPlacement
 * By default, menu is displayed to the bottom of `anchor` view, but it is configurable with `placement` property.
 *
 * @overview-example OverflowMenuFullWidth
 * Menu may take the full width of the anchor view by configuring `fullWidth` property.
 *
 * @overview-example OverflowMenuAccessories
 * Menu items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](guides/icon-packages).
 *
 * @overview-example OverflowMenuWithDisabledItems
 * Menu items may be disabled with `disabled` property.
 *
 * @overview-example OverflowMenuStyledBackdrop
 * To style the underlying view, `backdropStyle` property may be used.
 *
 * @example OverflowMenuWithoutDivider
 * To disable dividers within the menu, `appearance` property may be used.
 */
let OverflowMenu = class OverflowMenu extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.popoverRef = react_1.default.createRef();
        this.show = () => {
            this.popoverRef.current?.show();
        };
        this.hide = () => {
            this.popoverRef.current?.hide();
        };
        this.getComponentStyle = (source) => {
            const { indicatorBackgroundColor, ...containerParameters } = source;
            return {
                container: containerParameters,
                indicator: {
                    backgroundColor: indicatorBackgroundColor,
                },
            };
        };
        this.renderPopoverContentElement = () => {
            const { eva, children, style, ...menuProps } = this.props;
            return (react_1.default.createElement(menu_component_1.Menu, Object.assign({}, menuProps, { style: styles.menu, initialNumToRender: this.itemsCount, showsVerticalScrollIndicator: false, bounces: false }), this.props.children));
        };
    }
    get itemsCount() {
        return react_1.default.Children.count(this.props.children);
    }
    render() {
        const { eva, style, children, appearance, ...popoverProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        const contentElement = this.renderPopoverContentElement();
        return (react_1.default.createElement(popover_component_1.Popover, Object.assign({}, popoverProps, { ref: this.popoverRef, style: [styles.popover, evaStyle.container, style] }), contentElement));
    }
};
OverflowMenu = __decorate([
    theme_1.styled('OverflowMenu')
], OverflowMenu);
exports.OverflowMenu = OverflowMenu;
const styles = react_native_1.StyleSheet.create({
    popover: {
        overflow: 'hidden',
    },
    menu: {
        flexGrow: 0,
    },
});
//# sourceMappingURL=overflowMenu.component.js.map