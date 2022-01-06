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
 * Provides to select a single state from multiple options.
 * RadioGroup should contain Radio components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Index of currently checked radio.
 *
 * @property {(number) => void} onChange - Called when one of the radios is pressed.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example RadioGroupSimpleUsage
 */
let RadioGroup = class RadioGroup extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onRadioChange = (index) => {
            this.props.onChange && this.props.onChange(index);
        };
        this.getComponentStyle = (source) => {
            const { itemMarginVertical, ...containerParameters } = source;
            return {
                container: containerParameters,
                item: {
                    marginVertical: itemMarginVertical,
                },
            };
        };
        this.renderRadioElements = (source, style) => {
            return react_1.default.Children.map(source, (element, index) => {
                return react_1.default.cloneElement(element, {
                    key: index,
                    style: [style, element.props.style],
                    checked: this.props.selectedIndex === index,
                    onChange: () => this.onRadioChange(index),
                });
            });
        };
    }
    render() {
        const { eva, style, children, ...viewProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        const radioElements = this.renderRadioElements(children, evaStyle.item);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.container, style] }), radioElements));
    }
};
RadioGroup.defaultProps = {
    selectedIndex: -1,
};
RadioGroup = __decorate([
    theme_1.styled('RadioGroup')
], RadioGroup);
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=radioGroup.component.js.map