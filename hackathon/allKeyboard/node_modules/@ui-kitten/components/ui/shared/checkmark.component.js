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
const react_native_svg_1 = require("react-native-svg");
class CheckMark extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({}, this.props, { viewBox: '0 0 24 24' }),
            react_1.default.createElement(react_native_svg_1.G, { "data-name": 'Layer 2' },
                react_1.default.createElement(react_native_svg_1.G, { "data-name": 'checkmark' },
                    react_1.default.createElement(react_native_svg_1.Rect, { width: '24', height: '24', opacity: '0' }),
                    react_1.default.createElement(react_native_svg_1.Path, { d: 'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z' })))));
    }
}
exports.CheckMark = CheckMark;
//# sourceMappingURL=checkmark.component.js.map