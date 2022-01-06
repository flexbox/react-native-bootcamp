/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { GestureResponderEvent, PanResponderCallbacks, PanResponderGestureState, ViewProps } from 'react-native';
import { ChildrenWithProps } from '../../devsupport';
export interface ViewPagerProps<ChildrenProps = {}> extends ViewProps {
    children?: ChildrenWithProps<ChildrenProps>;
    selectedIndex?: number;
    swipeEnabled?: boolean;
    onSelect?: (index: number) => void;
    shouldLoadComponent?: (index: number) => boolean;
    onOffsetChange?: (offset: number) => void;
}
export declare type ViewPagerElement = React.ReactElement<ViewPagerProps>;
/**
 * A view with a set of swipeable pages.
 *
 * @extends React.Component
 **
 * @property {ReactNode} children - Page components to render within the view.
 *
 * @property {number} selectedIndex - Index of currently selected view.
 *
 * @property {boolean} swipeEnabled - Disable swipe gesture, but keeping animations.
 *
 * @property {(number) => void} onSelect - Called when view becomes visible.
 *
 * @property {(number) => boolean} shouldLoadComponent - A function to determine
 * whether particular view should be rendered.
 * Useful when providing "lazy" loading behavior.
 *
 * @property {(number) => void} onOffsetChange - Called when scroll offset changes.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ViewPagerSimpleUsage
 * Simple usage.
 *
 * @overview-example ViewPagerLazyLoading
 * Each view can be loaded lazily by using `shouldLoadComponent` property.
 */
export declare class ViewPager<ChildrenProps = {}> extends React.Component<ViewPagerProps<ChildrenProps>> implements PanResponderCallbacks {
    static defaultProps: Partial<ViewPagerProps>;
    private containerRef;
    private contentWidth;
    private contentOffsetValue;
    private contentOffset;
    private panResponder;
    private get children();
    componentDidMount(): void;
    componentDidUpdate(prevProps: ViewPagerProps): void;
    componentWillUnmount(): void;
    onMoveShouldSetPanResponder: (_event: GestureResponderEvent, state: PanResponderGestureState) => boolean;
    onPanResponderMove: (_event: GestureResponderEvent, state: PanResponderGestureState) => void;
    onPanResponderRelease: (event: GestureResponderEvent, state: PanResponderGestureState) => void;
    scrollToIndex(params: {
        index: number;
        animated?: boolean;
    }): void;
    scrollToOffset: (params: {
        offset: number;
        animated?: boolean;
    }) => void;
    private onLayout;
    private onContentOffsetAnimationStateChanged;
    private onContentOffsetAnimationStateEnd;
    private createOffsetAnimation;
    private getContainerStyle;
    private renderComponentChild;
    private renderComponentChildren;
    render(): React.ReactElement<ViewProps>;
}
