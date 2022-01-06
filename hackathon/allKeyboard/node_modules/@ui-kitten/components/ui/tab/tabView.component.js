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
const tabBar_component_1 = require("./tabBar.component");
const viewPager_component_1 = require("../viewPager/viewPager.component");
class TabViewChildElement {
}
class TabViewChildren {
    constructor() {
        this.tabs = [];
        this.contents = [];
    }
}
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
class TabView extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.viewPagerRef = react_1.default.createRef();
        this.tabBarRef = react_1.default.createRef();
        this.onBarSelect = (index) => {
            this.props.onSelect && this.props.onSelect(index);
        };
        this.onPagerOffsetChange = (offset) => {
        };
        this.onPagerSelect = (index) => {
            this.props.onSelect && this.props.onSelect(index);
        };
        this.renderComponentChild = (element, index) => {
            return {
                tab: react_1.default.cloneElement(element, { key: index }),
                content: element.props.children,
            };
        };
        this.renderComponentChildren = (source) => {
            const children = react_1.default.Children.toArray(source);
            return children.reduce((acc, element, index) => {
                const { tab, content } = this.renderComponentChild(element, index);
                return {
                    tabs: [...acc.tabs, tab],
                    contents: [...acc.contents, content],
                };
            }, new TabViewChildren());
        };
    }
    render() {
        const { style, selectedIndex, children, tabBarStyle, indicatorStyle, ...viewProps } = this.props;
        const { tabs, contents } = this.renderComponentChildren(children);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [styles.container, style] }),
            react_1.default.createElement(tabBar_component_1.TabBar, { style: tabBarStyle, ref: this.tabBarRef, selectedIndex: selectedIndex, indicatorStyle: indicatorStyle, onSelect: this.onBarSelect }, tabs),
            react_1.default.createElement(viewPager_component_1.ViewPager, Object.assign({ ref: this.viewPagerRef }, viewProps, { style: [styles.container, style], selectedIndex: selectedIndex, shouldLoadComponent: this.props.shouldLoadComponent, onOffsetChange: this.onPagerOffsetChange, onSelect: this.onPagerSelect }), contents)));
    }
}
exports.TabView = TabView;
TabView.defaultProps = {
    selectedIndex: 0,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
});
//# sourceMappingURL=tabView.component.js.map