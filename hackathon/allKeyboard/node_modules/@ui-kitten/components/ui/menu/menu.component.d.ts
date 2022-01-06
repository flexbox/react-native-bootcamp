/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ChildrenWithProps, IndexPath, Overwrite, LiteralUnion } from '../../devsupport';
import { ListElement, ListProps } from '../list/list.component';
import { MenuItemProps } from './menuItem.component';
declare type MenuStyledProps = Overwrite<ListProps, {
    appearance?: LiteralUnion<'default' | 'noDivider'>;
}>;
declare type MenuListProps = Omit<MenuStyledProps, 'data' | 'renderItem'>;
export interface MenuProps extends MenuListProps {
    children?: ChildrenWithProps<MenuItemProps>;
    selectedIndex?: IndexPath;
    onSelect?: (index: IndexPath) => void;
}
export declare type MenuElement = React.ReactElement<MenuProps>;
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
export declare class Menu extends React.Component<MenuProps> {
    private service;
    private get data();
    private get shouldRenderDividers();
    clear: () => void;
    private onItemPress;
    private isItemSelected;
    private cloneItemWithProps;
    private renderItem;
    render(): ListElement;
}
export {};
