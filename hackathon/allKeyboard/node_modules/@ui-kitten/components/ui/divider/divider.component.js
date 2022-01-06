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
 * A divider is a thin line that groups content in lists and layouts.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example DividerSimpleUsage
 */
let Divider = class Divider extends react_1.default.Component {
    render() {
        const { eva, style, ...viewProps } = this.props;
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [eva.style, style] })));
    }
};
Divider = __decorate([
    theme_1.styled('Divider')
], Divider);
exports.Divider = Divider;
//# sourceMappingURL=divider.component.js.map