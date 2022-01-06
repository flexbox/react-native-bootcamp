/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ChildrenWithProps, Overwrite } from '../../devsupport';
import { MenuProps } from '../menu/menu.component';
import { MenuItemProps } from '../menu/menuItem.component';
import { PopoverElement, PopoverProps } from '../popover/popover.component';
declare type OverflowMenuPopoverProps = Overwrite<PopoverProps, {
    children?: ChildrenWithProps<MenuItemProps>;
}>;
export declare type OverflowMenuProps = MenuProps & OverflowMenuPopoverProps;
export declare type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;
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
export declare class OverflowMenu extends React.Component<OverflowMenuProps> {
    private popoverRef;
    private get itemsCount();
    show: () => void;
    hide: () => void;
    private getComponentStyle;
    private renderPopoverContentElement;
    render(): PopoverElement;
}
export {};
