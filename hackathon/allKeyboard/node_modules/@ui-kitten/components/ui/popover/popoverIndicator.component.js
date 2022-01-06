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
const react_native_1 = require("react-native");
class PopoverIndicator extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getComponentStyle = (source) => {
            const flatStyle = react_native_1.StyleSheet.flatten(source);
            return {
                container: {
                    // @ts-ignore: `width` is restricted to be a number
                    borderLeftWidth: flatStyle.width,
                    // @ts-ignore: `width` is restricted to be a number
                    borderRightWidth: flatStyle.width,
                    // @ts-ignore: `height` is restricted to be a number
                    borderBottomWidth: flatStyle.height,
                    borderBottomColor: flatStyle.backgroundColor,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    backgroundColor: 'transparent',
                },
            };
        };
    }
    render() {
        const { style, ...props } = this.props;
        const evaStyle = this.getComponentStyle(style);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, props, { style: [style, styles.container, evaStyle.container] })));
    }
}
exports.PopoverIndicator = PopoverIndicator;
const styles = react_native_1.StyleSheet.create({
    container: {},
});
//# sourceMappingURL=popoverIndicator.component.js.map