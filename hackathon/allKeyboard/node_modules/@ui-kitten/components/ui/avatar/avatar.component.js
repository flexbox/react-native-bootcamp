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
 * An Image with additional styles provided by Eva.
 *
 * @extends React.Component
 *
 * @property {string} shape - Shape of the component.
 * Can be `round`, `rounded` or `square`.
 * Defaults to *round*.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {React.ComponentType} ImageComponent - A component to render.
 * Defaults to Image.
 *
 * @property {P = ImageProps} ...P - Any props that may be accepted by the component passed to ImageComponent property.
 *
 * @overview-example AvatarSimpleUsage
 *
 * @overview-example AvatarSize
 * Avatar can be resized by passing `size` property.
 *
 * @overview-example AvatarShape
 * Also, it may have different shape configurable with `shape` property.
 *
 * @overview-example AvatarImageComponent
 * Avatar may have different root component to render images.
 * This might be helpful when needed to improve image loading with 3rd party image libraries.
 */
let Avatar = class Avatar extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getComponentStyle = (source) => {
            const { roundCoefficient, ...containerParameters } = source;
            // @ts-ignore: avoid checking `containerParameters`
            const baseStyle = react_native_1.StyleSheet.flatten([
                containerParameters,
                this.props.style,
            ]);
            // @ts-ignore: rhs operator is restricted to be number
            const borderRadius = roundCoefficient * baseStyle.height;
            return {
                borderRadius,
                ...baseStyle,
            };
        };
    }
    render() {
        const { eva, ImageComponent, ...imageProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(ImageComponent, Object.assign({}, imageProps, { style: [styles.image, evaStyle] })));
    }
};
Avatar.defaultProps = {
    ImageComponent: react_native_1.Image,
};
Avatar = __decorate([
    theme_1.styled('Avatar')
], Avatar);
exports.Avatar = Avatar;
const styles = react_native_1.StyleSheet.create({
    image: {
        overflow: 'hidden',
    },
});
//# sourceMappingURL=avatar.component.js.map