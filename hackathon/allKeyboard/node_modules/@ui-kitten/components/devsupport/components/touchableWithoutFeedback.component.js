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
/**
 * Helper component for the Touchable component with no opacity feedback.
 *
 * Applies recommended hitSlop by default.
 * @see https://reactnative.dev/docs/view#hitslop
 *
 * Allows passing ReactNode as children whereas original TouchableWithoutFeedback not.
 */
class TouchableWithoutFeedback extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.createHitSlopInsets = () => {
            const flatStyle = react_native_1.StyleSheet.flatten(this.props.style || {});
            // @ts-ignore: `width` is restricted to be a number
            const value = 40 - flatStyle.height || 0;
            return {
                left: value,
                top: value,
                right: value,
                bottom: value,
            };
        };
    }
    render() {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({ activeOpacity: 1.0, hitSlop: this.props.useDefaultHitSlop && this.createHitSlopInsets() }, this.props)));
    }
}
exports.TouchableWithoutFeedback = TouchableWithoutFeedback;
//# sourceMappingURL=touchableWithoutFeedback.component.js.map