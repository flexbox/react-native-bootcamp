/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { ChildrenWithProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { TabProps } from './tab.component';
declare type TabBarStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export interface TabBarProps extends ViewProps, TabBarStyledProps {
    children?: ChildrenWithProps<TabProps>;
    selectedIndex?: number;
    onSelect?: (index: number) => void;
    indicatorStyle?: StyleProp<ViewStyle>;
}
export declare type TabBarElement = React.ReactElement<TabBarProps>;
/**
 * A bar with tabs styled by Eva.
 * TabBar should contain Tab components to provide a useful navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<TabProps> | ReactElement<TabProps>[]} children - Tabs to be rendered within the bar.
 *
 * @property {number} selectedIndex - Index of currently selected tab.
 *
 * @property {(number) => void} onSelect - Called when tab is pressed.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Style of the indicator component.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example TabBarSimpleUsage
 * In basic examples, tabs are wrapped within `TabBar`.
 *
 * @overview-example Using with React Navigation
 * TabBar can also be [configured with React Navigation](guides/configure-navigation)
 * to provide a navigational component.
 * ```
 * import React from 'react';
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 * import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
 *
 * const { Navigator, Screen } = createMaterialTopTabNavigator();
 *
 * const UsersScreen = () => (
 *   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *     <Text category='h1'>USERS</Text>
 *   </Layout>
 * );
 *
 * const OrdersScreen = () => (
 *   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *     <Text category='h1'>ORDERS</Text>
 *   </Layout>
 * );
 *
 * const TopTabBar = ({ navigation, state }) => (
 *   <TabBar
 *     selectedIndex={state.index}
 *     onSelect={index => navigation.navigate(state.routeNames[index])}>
 *     <Tab title='USERS'/>
 *     <Tab title='ORDERS'/>
 *   </TabBar>
 * );
 *
 * const TabNavigator = () => (
 *   <Navigator tabBar={props => <TopTabBar {...props} />}>
 *     <Screen name='Users' component={UsersScreen}/>
 *     <Screen name='Orders' component={OrdersScreen}/>
 *   </Navigator>
 * );
 *
 * export const AppNavigator = () => (
 *   <NavigationContainer>
 *     <TabNavigator/>
 *   </NavigationContainer>
 * );
 * ```
 *
 * @overview-example TabBarAccessories
 * Tabs also may contain [icons](guides/icon-packages), to provide a better user interfaces.
 *
 * @overview-example TabStyling
 * Tab and it's inner views can be styled by passing them as function components.
 * ```
 * import { Tab, Text } from '@ui-kitten/components';
 *
 * <Tab
 *   title={evaProps => <Text {...evaProps}>USERS</Text>}
 * />
 * ```
 *
 * @overview-example TabTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class TabBar extends React.Component<TabBarProps> {
    static defaultProps: Partial<TabBarProps>;
    private tabIndicatorRef;
    scrollToIndex(params: {
        index: number;
        animated?: boolean;
    }): void;
    scrollToOffset(params: {
        offset: number;
        animated?: boolean;
    }): void;
    private onTabSelect;
    private getComponentStyle;
    private isTabSelected;
    private renderTabElement;
    private renderTabElements;
    render(): React.ReactElement<ViewProps>;
}
export {};
