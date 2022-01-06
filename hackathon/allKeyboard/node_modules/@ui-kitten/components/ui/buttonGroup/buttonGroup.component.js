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
 * A group of buttons with additional styles provided by Eva.
 * ButtonGroup should contain Button components to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<ButtonProps> | ReactElement<ButtonProps>[]} children -
 * Buttons to be rendered within the group.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled`, `outline` or `ghost`.
 * Defaults to *filled*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ButtonGroupSimpleUsage
 * Button Group accepts buttons as child elements.
 *
 * @overview-example ButtonGroupAppearance
 * Appearance passed to group is also applied for grouped buttons.
 *
 * @overview-example ButtonGroupStatus
 * Same for status.
 *
 * @overview-example ButtonGroupSize
 * And size.
 *
 * @overview-example ButtonGroupOutline
 *
 * @overview-example ButtonGroupWithIcons
 */
let ButtonGroup = class ButtonGroup extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getComponentStyle = (source) => {
            const { dividerBackgroundColor, dividerWidth, ...containerParameters } = source;
            return {
                container: {
                    ...containerParameters,
                    borderWidth: containerParameters.borderWidth + 0.25,
                },
                button: {
                    borderWidth: dividerWidth,
                    borderColor: dividerBackgroundColor,
                },
            };
        };
        this.isFirstElement = (index) => {
            return index === 0;
        };
        this.isLastElement = (index) => {
            return index === react_1.default.Children.count(this.props.children) - 1;
        };
        this.renderButtonElement = (element, index, style) => {
            const { appearance, size, status } = this.props;
            const { borderRadius } = style.container;
            const { borderWidth, borderColor } = style.button;
            const shapeStyle = !this.isLastElement(index) && {
                borderEndWidth: borderWidth,
                borderEndColor: borderColor,
            };
            const startShapeStyle = this.isFirstElement(index) && {
                borderTopStartRadius: borderRadius,
                borderBottomStartRadius: borderRadius,
            };
            const endShapeStyle = this.isLastElement(index) && {
                borderTopEndRadius: borderRadius,
                borderBottomEndRadius: borderRadius,
            };
            return react_1.default.cloneElement(element, {
                key: index,
                appearance: appearance,
                size: size,
                status: status,
                style: [element.props.style, styles.button, shapeStyle, startShapeStyle, endShapeStyle],
            });
        };
        this.renderButtonElements = (source, style) => {
            return react_1.default.Children.map(source, (element, index) => {
                return this.renderButtonElement(element, index, style);
            });
        };
    }
    render() {
        const { eva, style, children, ...viewProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(react_native_1.View, Object.assign({}, viewProps, { style: [evaStyle.container, styles.container, style] }), this.renderButtonElements(children, evaStyle)));
    }
};
ButtonGroup = __decorate([
    theme_1.styled('ButtonGroup')
], ButtonGroup);
exports.ButtonGroup = ButtonGroup;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        overflow: 'hidden',
    },
    button: {
        borderRadius: 0,
        borderWidth: 0,
    },
});
//# sourceMappingURL=buttonGroup.component.js.map