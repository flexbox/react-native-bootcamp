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
const mappingProvider_component_1 = require("../mapping/mappingProvider.component");
const themeProvider_component_1 = require("../theme/themeProvider.component");
class StyleProvider extends react_1.default.PureComponent {
    render() {
        const { styles, theme, children } = this.props;
        return (react_1.default.createElement(mappingProvider_component_1.MappingProvider, { styles: styles },
            react_1.default.createElement(themeProvider_component_1.ThemeProvider, { theme: theme }, children)));
    }
}
exports.StyleProvider = StyleProvider;
//# sourceMappingURL=styleProvider.component.js.map