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
const themeContext_1 = require("./themeContext");
/**
 * Takes an actual theme provided by ApplicationProvider or ThemeProvider and
 * @returns it to a functional component.
 *
 * @overview-example UseThemeSimpleUsage
 */
exports.useTheme = () => {
    return react_1.default.useContext(themeContext_1.ThemeContext);
};
/**
 * Service for working with Eva themes
 */
class ThemeService {
}
exports.ThemeService = ThemeService;
/**
 * @returns compiled theme since Eva theme may contain variables referencing each other.
 */
ThemeService.create = (theme) => {
    return Object.keys(theme).reduce((acc, key) => {
        return { ...acc, [key]: ThemeService.getValue(key, theme, key) };
    }, {});
};
/**
 * Finds theme value recursively since eva theme variables can reference each other.
 *
 * @returns ThemeValue if found, fallback param otherwise.
 */
ThemeService.getValue = (name, theme, fallback) => {
    if (ThemeService.isReference(name)) {
        const themeKey = ThemeService.createKeyFromReference(name);
        return ThemeService.findValue(themeKey, theme) || fallback;
    }
    return ThemeService.findValue(name, theme) || fallback;
};
/**
 * Finds theme value recursively since eva theme variables can reference each other.
 *
 * @returns ThemeValue if found.
 */
ThemeService.findValue = (name, theme) => {
    const value = theme[name];
    if (ThemeService.isReference(value)) {
        const themeKey = ThemeService.createKeyFromReference(value);
        return ThemeService.findValue(themeKey, theme);
    }
    return value;
};
/**
 * @returns true if theme value references to another
 */
ThemeService.isReference = (value) => {
    return `${value}`.startsWith('$');
};
/**
 * Transforms reference key to theme key
 */
ThemeService.createKeyFromReference = (value) => {
    return `${value}`.substring(1);
};
//# sourceMappingURL=theme.service.js.map