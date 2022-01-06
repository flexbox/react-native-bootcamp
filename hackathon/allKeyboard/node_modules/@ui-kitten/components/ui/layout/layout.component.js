"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
/**
 * Overall page container.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the layout.
 *
 * @property {string} level - Background color level of component.
 * Can be `1`, `2`, `3` or `4`.
 * Defaults to *1*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example LayoutLevel
 * Layout should be used as a root component of the screen.
 * Comparative to `View` element, it uses a background color with respect to current theme.
 * Using Layout is redundant, when background color is configured with `style` property.
 *
 * Layouts can be used in different levels.
 * It is useful, when needed to highlight the container relative to another.
 */
let Layout = class Layout extends react_1.default.Component {
    render() {
        const { eva, style, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [eva.style, style] })));
    }
};
Layout = __decorate([
    theme_1.styled('Layout')
], Layout);
exports.Layout = Layout;
//# sourceMappingURL=layout.component.js.map