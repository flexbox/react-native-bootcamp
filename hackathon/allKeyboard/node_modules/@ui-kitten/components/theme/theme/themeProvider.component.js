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
const theme_service_1 = require("./theme.service");
/**
 * Since ApplicationProvider is the root component of the application,
 * it provides same theme for all underlying components.
 *
 * ThemeProvider allows modifying this theme so that each component that is the child
 * of ThemeProvider will use modified theme.
 *
 * @overview-example ThemeProviderSimpleUsage
 */
class ThemeProvider extends react_1.default.PureComponent {
    render() {
        const { theme, children } = this.props;
        return (react_1.default.createElement(themeContext_1.ThemeContext.Provider, { value: theme_service_1.ThemeService.create(theme) }, children));
    }
}
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=themeProvider.component.js.map