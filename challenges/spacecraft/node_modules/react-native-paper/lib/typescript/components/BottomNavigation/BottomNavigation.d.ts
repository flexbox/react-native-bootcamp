import * as React from 'react';
import { TouchableWithoutFeedbackProps, StyleProp, ViewStyle } from 'react-native';
import { IconSource } from '../Icon';
declare type Route = {
    key: string;
    title?: string;
    icon?: IconSource;
    badge?: string | number | boolean;
    color?: string;
    accessibilityLabel?: string;
    testID?: string;
};
declare type NavigationState = {
    index: number;
    routes: Route[];
};
declare type TabPressEvent = {
    defaultPrevented: boolean;
    preventDefault(): void;
};
declare type TouchableProps = TouchableWithoutFeedbackProps & {
    key: string;
    route: Route;
    children: React.ReactNode;
    borderless?: boolean;
    centered?: boolean;
    rippleColor?: string;
};
declare type Props = {
    /**
     * Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label.
     *
     * By default, this is `true` when you have more than 3 tabs.
     * Pass `shifting={false}` to explicitly disable this animation, or `shifting={true}` to always use this animation.
     */
    shifting?: boolean;
    /**
     * Whether to show labels in tabs. When `false`, only icons will be displayed.
     */
    labeled?: boolean;
    /**
     * State for the bottom navigation. The state should contain the following properties:
     *
     * - `index`: a number representing the index of the active route in the `routes` array
     * - `routes`: an array containing a list of route objects used for rendering the tabs
     *
     * Each route object should contain the following properties:
     *
     * - `key`: a unique key to identify the route (required)
     * - `title`: title of the route to use as the tab label
     * - `icon`: icon to use as the tab icon, can be a string, an image source or a react component
     * - `color`: color to use as background color for shifting bottom navigation
     * - `badge`: badge to show on the tab icon, can be `true` to show a dot, `string` or `number` to show text.
     * - `accessibilityLabel`: accessibility label for the tab button
     * - `testID`: test id for the tab button
     *
     * Example:
     *
     * ```js
     * {
     *   index: 1,
     *   routes: [
     *     { key: 'music', title: 'Music', icon: 'queue-music', color: '#3F51B5' },
     *     { key: 'albums', title: 'Albums', icon: 'album', color: '#009688' },
     *     { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
     *     { key: 'purchased', title: 'Purchased', icon: 'shopping-cart', color: '#607D8B' },
     *   ]
     * }
     * ```
     *
     * `BottomNavigation` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback.
     */
    navigationState: NavigationState;
    /**
     * Callback which is called on tab change, receives the index of the new tab as argument.
     * The navigation state needs to be updated when it's called, otherwise the change is dropped.
     */
    onIndexChange: (index: number) => void;
    /**
     * Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:
     *
     * ```js
     * renderScene = ({ route, jumpTo }) => {
     *   switch (route.key) {
     *     case 'music':
     *       return <MusicRoute jumpTo={jumpTo} />;
     *     case 'albums':
     *       return <AlbumsRoute jumpTo={jumpTo} />;
     *   }
     * }
     * ```
     *
     * Pages are lazily rendered, which means that a page will be rendered the first time you navigate to it.
     * After initial render, all the pages stay rendered to preserve their state.
     *
     * You need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance.
     * To make it easier to specify the components, you can use the `SceneMap` helper:
     *
     * ```js
     * renderScene = BottomNavigation.SceneMap({
     *   music: MusicRoute,
     *   albums: AlbumsRoute,
     * });
     * ```
     *
     * Specifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.
     * Each component will receive the current route and a `jumpTo` method as it's props.
     * The `jumpTo` method can be used to navigate to other tabs programmatically:
     *
     * ```js
     * this.props.jumpTo('albums')
     * ```
     */
    renderScene: (props: {
        route: Route;
        jumpTo: (key: string) => void;
    }) => React.ReactNode | null;
    /**
     * Callback which returns a React Element to be used as tab icon.
     */
    renderIcon?: (props: {
        route: Route;
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which React Element to be used as tab label.
     */
    renderLabel?: (props: {
        route: Route;
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to be used as the touchable for the tab item.
     * Renders a `TouchableRipple` on Android and `TouchableWithoutFeedback` with `View` on iOS.
     */
    renderTouchable?: (props: TouchableProps) => React.ReactNode;
    /**
     * Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component.
     */
    getLabelText?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get accessibility label for the tab button. This is read by the screen reader when the user taps the tab.
     * Uses `route.accessibilityLabel` by default.
     */
    getAccessibilityLabel?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get the id to locate this tab button in tests, uses `route.testID` by default.
     */
    getTestID?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Get badge for the tab, uses `route.badge` by default.
     */
    getBadge?: (props: {
        route: Route;
    }) => boolean | number | string | undefined;
    /**
     * Get color for the tab, uses `route.color` by default.
     */
    getColor?: (props: {
        route: Route;
    }) => string | undefined;
    /**
     * Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top.
     */
    onTabPress?: (props: {
        route: Route;
    } & TabPressEvent) => void;
    /**
     * Custom color for icon and label in the active tab.
     */
    activeColor?: string;
    /**
     * Custom color for icon and label in the inactive tab.
     */
    inactiveColor?: string;
    /**
     * Whether animation is enabled for scenes transitions in `shifting` mode.
     * By default, the scenes cross-fade during tab change when `shifting` is enabled.
     * Specify `sceneAnimationEnabled` as `false` to disable the animation.
     */
    sceneAnimationEnabled?: boolean;
    /**
     * Whether the bottom navigation bar is hidden when keyboard is shown.
     * On Android, this works best when [`windowSoftInputMode`](https://developer.android.com/guide/topics/manifest/activity-element#wsoft) is set to `adjustResize`.
     */
    keyboardHidesNavigationBar?: boolean;
    /**
     * Safe area insets for the tab bar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     * The bottom insets for iOS is added by default. You can override the behavior with this option.
     */
    safeAreaInsets?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /**
     * Style for the bottom navigation bar.  You can pass a custom background color here:
     *
     * ```js
     * barStyle={{ backgroundColor: '#694fad' }}
     * ```
     */
    barStyle?: StyleProp<ViewStyle>;
    /**
     * Specifies the largest possible scale a label font can reach.
     */
    labelMaxFontSizeMultiplier?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "navigationState" | "renderScene" | "renderIcon" | "renderLabel" | "renderTouchable" | "getLabelText" | "getBadge" | "getColor" | "getAccessibilityLabel" | "getTestID" | "activeColor" | "inactiveColor" | "keyboardHidesNavigationBar" | "barStyle" | "labeled" | "sceneAnimationEnabled" | "onTabPress" | "onIndexChange" | "shifting" | "safeAreaInsets" | "labelMaxFontSizeMultiplier"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ navigationState, renderScene, renderIcon, renderLabel, renderTouchable, getLabelText, getBadge, getColor, getAccessibilityLabel, getTestID, activeColor, inactiveColor, keyboardHidesNavigationBar, barStyle, labeled, style, theme, sceneAnimationEnabled, onTabPress, onIndexChange, shifting, safeAreaInsets, labelMaxFontSizeMultiplier, }: Props): JSX.Element;
    /**
     * Function which takes a map of route keys to components.
     * Pure components are used to minimize re-rendering of the pages.
     * This drastically improves the animation performance.
     */
    SceneMap(scenes: {
        [key: string]: React.ComponentType<{
            route: Route;
            jumpTo: (key: string) => void;
        }>;
    }): ({ route, jumpTo, }: {
        route: Route;
        jumpTo: (key: string) => void;
    }) => JSX.Element;
}, {}>;
export default _default;
