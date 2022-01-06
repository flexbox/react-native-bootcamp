/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { FlatListProps } from 'react-native';
import { Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
declare type ListStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export declare type ListProps<ItemT = any> = FlatListProps<ItemT> & ListStyledProps;
export declare type ListElement<ItemT = any> = React.ReactElement<ListProps<ItemT>>;
export interface BaseScrollParams {
    animated?: boolean;
}
export interface ViewScrollParams {
    viewOffset?: number;
    viewPosition?: number;
}
export interface ScrollToIndexParams extends BaseScrollParams, ViewScrollParams {
    index: number;
}
export interface ScrollToOffsetParams extends BaseScrollParams {
    offset: number;
}
/**
 * Performant interface for rendering simple, flat lists.
 *
 * @extends React.Component
 *
 * @property {any[]} data - An array of anything to be rendered within the list
 *
 * @property {(ListRenderItemInfo<ItemT>) => ReactElement} renderItem - Takes an
 * item from *data* and renders it into the list.
 *
 * @property {FlatListProps} ...FlatListProps - Any props applied to FlatList component.
 *
 * @overview-example ListSimpleUsage
 * Lists should render ListItem components by providing them through `renderItem` property
 * to provide a useful component.
 *
 * @overview-example ListDividers
 * It is a good idea to separate items with `Divider` component.
 *
 * @overview-example ListAccessories
 * Items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 *
 * @overview-example ListCustomItem
 * Using ListItem is helpful for basic lists, but not required. For example, `Card` may be used.
 */
export declare class List<ItemT = any> extends React.Component<ListProps<ItemT>> {
    private listRef;
    scrollToEnd: (params?: BaseScrollParams) => void;
    scrollToIndex: (params: ScrollToIndexParams) => void;
    scrollToOffset(params: ScrollToOffsetParams): void;
    private keyExtractor;
    render(): React.ReactElement;
}
export {};
