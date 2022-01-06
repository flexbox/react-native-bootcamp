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
class Minus extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({}, this.props, { viewBox: '0 0 24 24' }),
            react_1.default.createElement(react_native_svg_1.G, { "data-name": 'Layer 2' },
                react_1.default.createElement(react_native_svg_1.G, { "data-name": 'minus' },
                    react_1.default.createElement(react_native_svg_1.Rect, { width: '24', height: '24', transform: 'rotate(180 12 12)', opacity: '0' }),
                    react_1.default.createElement(react_native_svg_1.Path, { d: 'M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z' })))));
    }
}
exports.Minus = Minus;
//# sourceMappingURL=minus.component.js.map