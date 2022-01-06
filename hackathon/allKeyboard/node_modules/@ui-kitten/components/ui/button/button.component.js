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
const devsupport_1 = require("../../devsupport");
const theme_1 = require("../../theme");
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render within the button.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
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
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ButtonSimpleUsage
 * Default button size is `medium` and status color is `primary`.
 *
 * @overview-example ButtonStates
 * Button can be disabled with `disabled` property.
 *
 * @overview-example ButtonAppearances
 * Within Eva Design System, it can be `filled`, `outline` or `ghost`.
 *
 * @overview-example ButtonAccessories
 * Also, it may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](guides/icon-packages).
 *
 * @overview-example ButtonSize
 * Buttons can be resized by using `size` property.
 *
 * @overview-example ButtonStatus
 * Or marked with `status` property.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ButtonOutline
 * Status can be combined with `outline` appearance.
 *
 * @overview-example ButtonGhost
 * As well as for `ghost`.
 *
 * @overview-example ButtonStyling
 * Button and it's inner views can be styled by passing them as function components.
 * ```
 * import { Button, Text } from '@ui-kitten/components';
 *
 * <Button style={...}>
 *   {evaProps => <Text {...evaProps}>BUTTON</Text>}
 * </Button>
 * ```
 *
 * @overview-example ButtonTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
let Button = class Button extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onMouseEnter = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.HOVER]);
            this.props.onMouseEnter && this.props.onMouseEnter(event);
        };
        this.onMouseLeave = (event) => {
            this.props.eva.dispatch([]);
            this.props.onMouseLeave && this.props.onMouseLeave(event);
        };
        this.onFocus = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.FOCUSED]);
            this.props.onFocus && this.props.onFocus(event);
        };
        this.onBlur = (event) => {
            this.props.eva.dispatch([]);
            this.props.onBlur && this.props.onBlur(event);
        };
        this.onPressIn = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.ACTIVE]);
            this.props.onPressIn && this.props.onPressIn(event);
        };
        this.onPressOut = (event) => {
            this.props.eva.dispatch([]);
            this.props.onPressOut && this.props.onPressOut(event);
        };
        this.getComponentStyle = (source) => {
            const { textColor, textFontFamily, textFontSize, textFontWeight, textMarginHorizontal, iconWidth, iconHeight, iconTintColor, iconMarginHorizontal, ...containerParameters } = source;
            return {
                container: containerParameters,
                text: {
                    color: textColor,
                    fontFamily: textFontFamily,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    marginHorizontal: textMarginHorizontal,
                },
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    tintColor: iconTintColor,
                    marginHorizontal: iconMarginHorizontal,
                },
            };
        };
    }
    render() {
        const { eva, style, accessoryLeft, accessoryRight, children, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [evaStyle.container, styles.container, style], onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, onBlur: this.onBlur, onPressIn: this.onPressIn, onPressOut: this.onPressOut }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryLeft }),
            react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyle.text, component: children }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryRight })));
    }
};
Button = __decorate([
    theme_1.styled('Button')
], Button);
exports.Button = Button;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=button.component.js.map