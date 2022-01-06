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
class ModalResolver extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.renderChildElement = (source) => {
            return react_1.default.cloneElement(source, {
                style: [source.props.style, this.props.style],
            });
        };
        this.renderComponentChildren = (source) => {
            return react_1.default.Children.map(source, this.renderChildElement);
        };
        this.renderComponent = () => {
            const componentChildren = this.renderComponentChildren(this.props.children);
            return (react_1.default.createElement(react_native_1.View, { style: react_native_1.StyleSheet.absoluteFill },
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: [react_native_1.StyleSheet.absoluteFill, this.props.backdropStyle], activeOpacity: 1.0, onPress: this.props.onBackdropPress }),
                componentChildren));
        };
    }
    render() {
        return this.props.visible && this.renderComponent();
    }
}
exports.ModalResolver = ModalResolver;
ModalResolver.defaultProps = {
    visible: false,
};
//# sourceMappingURL=modalResolver.component.js.map