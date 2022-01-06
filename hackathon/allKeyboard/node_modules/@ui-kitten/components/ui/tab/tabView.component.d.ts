/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { TabProps } from './tab.component';
import { ViewPagerProps } from '../viewPager/viewPager.component';
export interface TabViewProps extends ViewPagerProps<TabProps> {
    tabBarStyle?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
}
export declare type TabViewElement = React.ReactElement<TabViewProps>;
/**
 * A view with tabs and swipeable contents.
 *
 * @extends React.Component
 **
 * @property {ReactElement<TabProps> | ReactElement<TabProps>[]} children - Tabs to be rendered within the view.
 *
 * @property {number} selectedIndex - Index of currently selected tab.
 *
 * @property {(number) => void} onSelect - Called when tab is pressed or its content becomes visible.
 *
 * @property {(number) => boolean} shouldLoadComponent - A function to determine
 * whether content for particular tab should be rendered.
 * Useful when providing "lazy" loading behavior.
 *
 * @property {(number) => void} onOffsetChange - Called when scroll offset changes.
 *
 * @property {StyleProp<ViewStyle>} tabBarStyle - Style of TabBar component.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Style of selected tab indicator.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example TabViewSimpleUsage
 * TabView is an alternative way to build tabbed screens, without a need to configure routing.
 *
 * @overview-example TabViewLazyLoading
 * Tab contents may be loaded lazily, by configuring `shouldLoadComponent` property.
 */
export declare class TabView extends React.Component<TabViewProps> {
    static defaultProps: Partial<TabViewProps>;
    private viewPagerRef;
    private tabBarRef;
    private onBarSelect;
    private onPagerOffsetChange;
    private onPagerSelect;
    private renderComponentChild;
    private renderComponentChildren;
    render(): React.ReactElement<ViewProps>;
}
