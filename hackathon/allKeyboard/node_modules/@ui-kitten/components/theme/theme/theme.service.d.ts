/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export declare type ThemeValue = string;
export declare type ThemeType = Record<string, ThemeValue>;
/**
 * Takes an actual theme provided by ApplicationProvider or ThemeProvider and
 * @returns it to a functional component.
 *
 * @overview-example UseThemeSimpleUsage
 */
export declare const useTheme: () => Record<string, string>;
/**
 * Service for working with Eva themes
 */
export declare class ThemeService {
    /**
     * @returns compiled theme since Eva theme may contain variables referencing each other.
     */
    static create: (theme: Record<string, string>) => Record<string, string>;
    /**
     * Finds theme value recursively since eva theme variables can reference each other.
     *
     * @returns ThemeValue if found, fallback param otherwise.
     */
    static getValue: (name: string, theme: Record<string, string>, fallback?: string) => string;
    /**
     * Finds theme value recursively since eva theme variables can reference each other.
     *
     * @returns ThemeValue if found.
     */
    private static findValue;
    /**
     * @returns true if theme value references to another
     */
    private static isReference;
    /**
     * Transforms reference key to theme key
     */
    private static createKeyFromReference;
}
