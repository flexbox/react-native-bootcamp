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
const tabIndicator_component_1 = require("../shared/tabIndicator.component");
/**
 * A bar with tabs styled by Eva.
 * BottomNavigation should contain BottomNavigationTab components to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<TabProps> | ReactElement<TabProps>[]} children - Tabs to be rendered within the bar.
 *
 * @property {number} selectedIndex - Index of currently selected tab.
 *
 * @property {(number) => void} onSelect - Called when tab is pressed.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` or `noIndicator`.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Styles of the indicator.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example BottomNavigationSimpleUsage
 * In basic examples, tabs are wrapped within `BottomNavigation`.
 *
 * @overview-example Using with React Navigation
 * BottomNavigation can also be [configured with React Navigation](guides/configure-navigation)
 * to provide a navigational component.
 *
 * ```
 * import React from 'react';
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
 *
 * const { Navigator, Screen } = createBottomTabNavigator();
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
 * const BottomTabBar = ({ navigation, state }) => (
 *   <BottomNavigation
 *     selectedIndex={state.index}
 *     onSelect={index => navigation.navigate(state.routeNames[index])}>
 *     <BottomNavigationTab title='USERS'/>
 *     <BottomNavigationTab title='ORDERS'/>
 *   </BottomNavigation>
 * );
 *
 * const TabNavigator = () => (
 *   <Navigator tabBar={props => <BottomTabBar {...props} />}>
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
 * @overview-example BottomNavigationAccessories
 * Tabs also may contain [icons](guides/icon-packages) to provide a better user interfaces.
 *
 * @overview-example BottomNavigationTabStyling
 * Tabs and it's inner views can be styled by passing them as function components.
 * ```
 * import { BottomNavigationTab, Text } from '@ui-kitten/components';
 *
 * <BottomNavigationTab
 *   title={evaProps => <Text {...evaProps}>USERS</Text>}
 * />
 * ```
 * @overview-example BottomNavigationTabTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 *
 * @example BottomNavigationWithoutIndicator
 * To remove indicator, `appearance` property may be used.
 */
let BottomNavigation = class BottomNavigation extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onTabSelect = (index) => {
            this.props.onSelect && this.props.onSelect(index);
        };
        this.getComponentStyle = (source) => {
            const { indicatorHeight, indicatorBackgroundColor, ...containerParameters } = source;
            return {
                container: containerParameters,
                indicator: {
                    height: indicatorHeight,
                    backgroundColor: indicatorBackgroundColor,
                },
            };
        };
        this.renderIndicatorElement = (positions, style) => {
            const { indicatorStyle, selectedIndex } = this.props;
            return (react_1.default.createElement(tabIndicator_component_1.TabIndicator, { key: 0, style: [style, styles.indicator, indicatorStyle], selectedPosition: selectedIndex, positions: positions }));
        };
        this.renderTabElement = (element, index) => {
            return react_1.default.cloneElement(element, {
                key: index,
                style: [styles.item, element.props.style],
                selected: index === this.props.selectedIndex,
                onSelect: () => this.onTabSelect(index),
            });
        };
        this.renderTabElements = (source) => {
            return react_1.default.Children.map(source, this.renderTabElement);
        };
        this.renderComponentChildren = (style) => {
            const tabElements = this.renderTabElements(this.props.children);
            const hasIndicator = style.indicator.height > 0;
            return [
                hasIndicator && this.renderIndicatorElement(tabElements.length, style.indicator),
                ...tabElements,
            ];
        };
    }
    render() {
        const { eva, style, ...viewProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        const [indicatorElement, ...tabElements] = this.renderComponentChildren(evaStyle);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.container, styles.container, style] }),
            indicatorElement,
            tabElements));
    }
};
BottomNavigation.defaultProps = {
    selectedIndex: 0,
};
BottomNavigation = __decorate([
    theme_1.styled('BottomNavigation')
], BottomNavigation);
exports.BottomNavigation = BottomNavigation;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
    },
    indicator: {
        position: 'absolute',
    },
});
//# sourceMappingURL=bottomNavigation.component.js.map