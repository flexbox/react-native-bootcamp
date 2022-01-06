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
const devsupport_1 = require("../../devsupport");
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
class ViewPager extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.containerRef = react_1.default.createRef();
        this.contentWidth = 0;
        this.contentOffsetValue = 0;
        this.contentOffset = new react_native_1.Animated.Value(this.contentOffsetValue);
        this.panResponder = react_native_1.PanResponder.create(this);
        this.onMoveShouldSetPanResponder = (_event, state) => {
            const isHorizontalMove = Math.abs(state.dx) > 0 && Math.abs(state.dx) > Math.abs(state.dy);
            if (isHorizontalMove) {
                const i18nOffset = devsupport_1.RTLService.select(state.dx, -state.dx);
                const nextSelectedIndex = this.props.selectedIndex - Math.sign(i18nOffset);
                return nextSelectedIndex >= 0 && nextSelectedIndex < this.children.length;
            }
            return false;
        };
        this.onPanResponderMove = (_event, state) => {
            const i18nOffset = devsupport_1.RTLService.select(this.contentWidth, -this.contentWidth);
            const selectedPageOffset = this.props.selectedIndex * i18nOffset;
            this.contentOffset.setValue(state.dx - selectedPageOffset);
        };
        this.onPanResponderRelease = (event, state) => {
            if (Math.abs(state.vx) >= 0.5 || Math.abs(state.dx) >= 0.5 * this.contentWidth) {
                const i18nOffset = devsupport_1.RTLService.select(state.dx, -state.dx);
                const index = i18nOffset > 0 ? this.props.selectedIndex - 1 : this.props.selectedIndex + 1;
                this.scrollToIndex({ index, animated: true });
            }
            else {
                const index = this.props.selectedIndex;
                this.scrollToIndex({ index, animated: true });
            }
        };
        this.scrollToOffset = (params) => {
            this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
        };
        this.onLayout = (event) => {
            this.contentWidth = event.nativeEvent.layout.width / this.children.length;
            this.scrollToIndex({ index: this.props.selectedIndex });
        };
        this.onContentOffsetAnimationStateChanged = (state) => {
            this.contentOffsetValue = devsupport_1.RTLService.select(-state.value, state.value);
            if (this.props.onOffsetChange) {
                this.props.onOffsetChange(this.contentOffsetValue);
            }
        };
        this.onContentOffsetAnimationStateEnd = (_result) => {
            const selectedIndex = this.contentOffsetValue / this.contentWidth;
            if (selectedIndex !== this.props.selectedIndex && this.props.onSelect) {
                this.props.onSelect(Math.round(selectedIndex));
            }
        };
        this.createOffsetAnimation = (params) => {
            const animationDuration = params.animated ? 300 : 0;
            return react_native_1.Animated.timing(this.contentOffset, {
                toValue: devsupport_1.RTLService.select(-params.offset, params.offset),
                easing: react_native_1.Easing.linear,
                duration: animationDuration,
                useNativeDriver: react_native_1.Platform.OS !== 'web',
            });
        };
        this.getContainerStyle = () => {
            return {
                width: `${100 * this.children.length}%`,
                // @ts-ignore: RN has no types for `Animated` styles
                transform: [{ translateX: this.contentOffset }],
            };
        };
        this.renderComponentChild = (source, index) => {
            const contentView = this.props.shouldLoadComponent(index) ? source : null;
            return (react_1.default.createElement(react_native_1.View, { style: styles.contentContainer }, contentView));
        };
        this.renderComponentChildren = () => {
            return react_1.default.Children.map(this.children, this.renderComponentChild);
        };
    }
    get children() {
        return react_1.default.Children.toArray(this.props.children).filter(Boolean);
    }
    componentDidMount() {
        this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
            const index = this.props.selectedIndex;
            this.scrollToIndex({ index, animated: true });
        }
    }
    componentWillUnmount() {
        this.contentOffset.removeAllListeners();
    }
    scrollToIndex(params) {
        const { index, ...rest } = params;
        const childCount = this.children.length - 1;
        const offset = this.contentWidth * (index < 0 ? 0 : index > childCount ? childCount : index);
        this.scrollToOffset({ offset, ...rest });
    }
    render() {
        const { style, children, swipeEnabled, ...viewProps } = this.props;
        const panResponderConfig = swipeEnabled ? this.panResponder.panHandlers : null;
        const animatedViewProps = { ...viewProps, ...panResponderConfig };
        return (react_1.default.createElement(react_native_1.Animated.View, Object.assign({}, animatedViewProps, { style: [styles.container, style, this.getContainerStyle()], onLayout: this.onLayout, 
            // @ts-ignore
            ref: this.containerRef }), this.renderComponentChildren()));
    }
}
exports.ViewPager = ViewPager;
ViewPager.defaultProps = {
    selectedIndex: 0,
    swipeEnabled: true,
    shouldLoadComponent: () => true,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
    },
});
//# sourceMappingURL=viewPager.component.js.map