/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { StyleSheet } from 'react-native';
export declare type StyleType = Record<string, any>;
export declare type Styles<T> = StyleSheet.NamedStyles<T>;
/**
 * User interactions that can be handled by Eva.
 */
export declare enum Interaction {
    HOVER = "hover",
    ACTIVE = "active",
    FOCUSED = "focused",
    INDETERMINATE = "indeterminate",
    VISIBLE = "visible"
}
/**
 * Component states that can be handled by Eva.
 */
export declare enum State {
    CHECKED = "checked",
    SELECTED = "selected",
    DISABLED = "disabled"
}
/**
 * Takes a theme provided by ApplicationProvider or ThemeProvider and applies it to style.
 * Consider not using this function when not using Eva theme variables.
 *
 * @overview-example UseStyleSheetSimpleUsage
 */
export declare const useStyleSheet: <T extends StyleSheet.NamedStyles<T>>(styles: StyleSheet.NamedStyles<T>) => T;
/**
 * Service for creating styles that fit current theme.
 * Unlike StyleSheet class exported from React Native package, it allows using Eva theme variables.
 */
export declare class StyleService {
    /**
     * Unlike `StyleSheet.create` from RN package,
     * this does nothing with `styles` validation because of inability to process Eva theme variables
     * and returns styles as it is just to support the syntax we used to.
     *
     * However, this may be useful to have this function
     * because future RN versions may allow pre-processing.
     * @see {StyleSheet.setStyleAttributePreprocessor}
     *
     * Notice it is better to use `StyleSheet.create` from RN package since it does style registering.
     * You don't need to use this function if custom variables are not used.
     *
     * When using Eva theme variables, `useStyleSheet` should be called.
     *
     * @example
     * ```
     * const Component = () => {
     *   const styles = useStyleSheet(themedStyles);
     *   return (
     *     <View style={styles.container} />
     *   );
     * };
     *
     * const themedStyles = StyleService.create({
     *   container: { backgroundColor: 'color-primary-default' },
     * });
     * ```
     */
    static create: <T extends StyleSheet.NamedStyles<T>>(styles: T) => T;
    /**
     * @returns stylesheet mapped to theme
     */
    static createThemed: <T extends StyleSheet.NamedStyles<T>>(styles: StyleSheet.NamedStyles<T>, theme: Record<string, string>) => T;
    /**
     * @returns a style mapped to theme
     */
    static createThemedEntry: (style: Record<string, any>, theme: Record<string, string>) => Record<string, any>;
}
