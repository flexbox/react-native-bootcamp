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
const theme_1 = require("../../theme");
const divider_component_1 = require("../divider/divider.component");
const list_component_1 = require("../list/list.component");
const menu_service_1 = require("./menu.service");
/**
 * A versatile menu for navigation.
 * Menu should contain MenuItem or MenuGroup components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` or `noDivider`.
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * Items to be rendered within menu.
 *
 * @property {IndexPath} selectedIndex - Index of selected item.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Menu becomes sectioned when MenuGroup is rendered within children.
 * Updating this property is not required if marking items selected is not needed.
 *
 * @property {(IndexPath) => void} onSelect - Called when item is pressed.
 * Called with `row: number` for non-grouped items.
 * Called with `row: number, section: number` for items rendered within group,
 * where row - index of item in group, section - index of group in list.
 *
 * @property {ListProps} ...ListProps - Any props applied to List component,
 * excluding `renderItem` and `data`.
 *
 * @overview-example MenuSimpleUsage
 *
 * @overview-example MenuIndexType
 * Menu works with special index object - IndexPath.
 * For non-grouped items in menu, there is only a `row` property.
 * Otherwise, `row` is an index of option within the group, section - index of group in menu.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example MenuNoMarkers
 * Pressing of menu items can be handled without marking items.
 *
 * @overview-example MenuAccessories
 * Items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva, item accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example MenuGroups
 * And be grouped within `MenuGroup` component.
 *
 * @overview-example MenuDisabledOptions
 * Also, it may be disabled with `disabled` property.
 *
 * @overview-example MenuStyling
 * Menu and it's inner views can be styled by passing them as function components.
 * ```
 * import { MenuItem, Text } from '@ui-kitten/components';
 *
 * <MenuItem
 *   title={evaProps => <Text {...evaProps}>USERS</Text>}>
 * </MenuItem>
 * ```
 *
 * @overview-example MenuTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 *
 */
let Menu = class Menu extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.service = new menu_service_1.MenuService();
        this.clear = () => {
            this.props.onSelect && this.props.onSelect(null);
        };
        this.onItemPress = (descriptor) => {
            this.props.onSelect && this.props.onSelect(descriptor.index);
        };
        this.isItemSelected = (descriptor) => {
            return descriptor.index.equals(this.props.selectedIndex);
        };
        this.cloneItemWithProps = (element, props) => {
            const nestedElements = react_1.default.Children.map(element.props.children, (el, index) => {
                const descriptor = this.service.createDescriptorForNestedElement(props.descriptor, index);
                const selected = this.isItemSelected(descriptor);
                return this.cloneItemWithProps(el, { ...props, selected, descriptor });
            });
            const onPress = (event, descriptor) => {
                element.props.onPress && element.props.onPress();
                props.onPress(event, descriptor);
            };
            return react_1.default.cloneElement(element, { ...element.props, ...props, onPress }, nestedElements);
        };
        this.renderItem = (info) => {
            const descriptor = this.service.createDescriptorForElement(info.item, info.index);
            const selected = this.isItemSelected(descriptor);
            return this.cloneItemWithProps(info.item, { descriptor, selected, onPress: this.onItemPress });
        };
    }
    get data() {
        return react_1.default.Children.toArray(this.props.children || []);
    }
    get shouldRenderDividers() {
        return this.props.appearance !== 'noDivider';
    }
    render() {
        const { appearance, ...listProps } = this.props;
        return (react_1.default.createElement(list_component_1.List, Object.assign({ ItemSeparatorComponent: this.shouldRenderDividers && divider_component_1.Divider }, listProps, { data: this.data, renderItem: this.renderItem })));
    }
};
Menu = __decorate([
    theme_1.styled('Menu')
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.component.js.map