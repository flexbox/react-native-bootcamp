import * as React from 'react';
import { StyleProp, Animated, LayoutRectangle, ViewStyle } from 'react-native';
import type { $Omit } from '../../types';
declare type Props = {
    /**
     * Whether the Menu is currently visible.
     */
    visible: boolean;
    /**
     * The anchor to open the menu from. In most cases, it will be a button that opens the menu.
     */
    anchor: React.ReactNode | {
        x: number;
        y: number;
    };
    /**
     * Extra margin to add at the top of the menu to account for translucent status bar on Android.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to and customize it.
     * This is automatically handled on iOS.
     */
    statusBarHeight?: number;
    /**
     * Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Accessibility label for the overlay. This is read by the screen reader when the user taps outside the menu.
     */
    overlayAccessibilityLabel?: string;
    /**
     * Content of the `Menu`.
     */
    children: React.ReactNode;
    /**
     * Style of menu's inner content.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type Layout = $Omit<$Omit<LayoutRectangle, 'x'>, 'y'>;
declare type State = {
    rendered: boolean;
    top: number;
    left: number;
    menuLayout: Layout;
    anchorLayout: Layout;
    opacityAnimation: Animated.Value;
    scaleAnimation: Animated.ValueXY;
};
/**
 * Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/menu-1.png" />
 *   <img class="medium" src="screenshots/menu-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Menu, Divider, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const openMenu = () => setVisible(true);
 *
 *   const closeMenu = () => setVisible(false);
 *
 *   return (
 *     <Provider>
 *       <View
 *         style={{
 *           paddingTop: 50,
 *           flexDirection: 'row',
 *           justifyContent: 'center',
 *         }}>
 *         <Menu
 *           visible={visible}
 *           onDismiss={closeMenu}
 *           anchor={<Button onPress={openMenu}>Show menu</Button>}>
 *           <Menu.Item onPress={() => {}} title="Item 1" />
 *           <Menu.Item onPress={() => {}} title="Item 2" />
 *           <Divider />
 *           <Menu.Item onPress={() => {}} title="Item 3" />
 *         </Menu>
 *       </View>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare class Menu extends React.Component<Props, State> {
    static Item: React.ComponentType<Pick<{
        title: React.ReactNode;
        icon?: import("../Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        contentStyle?: StyleProp<ViewStyle>; /**
         * Extra margin to add at the top of the menu to account for translucent status bar on Android.
         * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
         * Pass `0` or a custom value to and customize it.
         * This is automatically handled on iOS.
         */
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        accessibilityLabel?: string | undefined;
    }, "style" | "title" | "onPress" | "testID" | "accessibilityLabel" | "icon" | "disabled" | "titleStyle" | "contentStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<{
        title: React.ReactNode;
        icon?: import("../Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        contentStyle?: StyleProp<ViewStyle>; /**
         * Extra margin to add at the top of the menu to account for translucent status bar on Android.
         * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
         * Pass `0` or a custom value to and customize it.
         * This is automatically handled on iOS.
         */
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
        accessibilityLabel?: string | undefined;
    }> & {
        ({ icon, title, disabled, onPress, style, contentStyle, testID, titleStyle, accessibilityLabel, theme, }: {
            title: React.ReactNode;
            icon?: import("../Icon").IconSource | undefined;
            disabled?: boolean | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
            contentStyle?: StyleProp<ViewStyle>; /**
             * Extra margin to add at the top of the menu to account for translucent status bar on Android.
             * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
             * Pass `0` or a custom value to and customize it.
             * This is automatically handled on iOS.
             */
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
            accessibilityLabel?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }, {}>;
    static defaultProps: {
        statusBarHeight: any;
        overlayAccessibilityLabel: string;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        rendered: boolean;
    } | null;
    state: {
        rendered: boolean;
        top: number;
        left: number;
        menuLayout: {
            width: number;
            height: number;
        };
        anchorLayout: {
            width: number;
            height: number;
        };
        opacityAnimation: Animated.Value;
        scaleAnimation: Animated.ValueXY;
    };
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private anchor?;
    private menu?;
    private backHandlerSubscription;
    private dimensionsSubscription;
    private isCoordinate;
    private measureMenuLayout;
    private measureAnchorLayout;
    private updateVisibility;
    private isBrowser;
    private focusFirstDOMNode;
    private handleDismiss;
    private handleKeypress;
    private attachListeners;
    private removeListeners;
    private show;
    private hide;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<Pick<Props, "style" | "anchor" | "children" | "visible" | "contentStyle" | "statusBarHeight" | "onDismiss" | "overlayAccessibilityLabel"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof Menu, {}>;
export default _default;
