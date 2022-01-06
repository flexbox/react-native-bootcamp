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
class ChevronDown extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_native_svg_1.Svg, Object.assign({}, this.props, { viewBox: '0 0 24 24' }),
            react_1.default.createElement(react_native_svg_1.G, { "data-name": 'Layer 2' },
                react_1.default.createElement(react_native_svg_1.G, { "data-name": 'chevron-down' },
                    react_1.default.createElement(react_native_svg_1.Rect, { width: '24', height: '24', opacity: '0' }),
                    react_1.default.createElement(react_native_svg_1.Path, { d: 'M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z' })))));
    }
}
exports.ChevronDown = ChevronDown;
//# sourceMappingURL=chevronDown.component.js.map