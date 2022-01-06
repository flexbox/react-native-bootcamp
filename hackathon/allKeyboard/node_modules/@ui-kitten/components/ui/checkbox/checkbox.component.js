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
const checkmark_component_1 = require("../shared/checkmark.component");
const minus_component_1 = require("../shared/minus.component");
/**
 * Checkboxes allow the user to select one or more items from a set.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(checked: boolean, indeterminate: boolean) => void} onChange - Called when checkbox
 * should switch it's value.
 * Called with *checked* and *indeterminate* values.
 * If *indeterminate* was provided, it should be changed to the value passed in this function.
 *
 * @property {boolean} indeterminate - Whether checked status is indeterminate.
 * Will set indeterminate to false when the checked property is changed.
 * Defaults to *false*.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the checkbox.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CheckboxSimpleUsage
 *
 * @overview-example CheckboxStates
 * CheckBoxes can be checked or disabled.
 *
 * @overview-example CheckboxIndeterminate
 * An extra state is `indeterminate`, which may be useful for grouping inner checkboxes.
 * Indeterminate will be set to `false` when the checked state is changed.
 *
 * @overview-example CheckboxStatus
 * Checkboxes may also be marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example CheckboxStyling
 * CheckBox and it's inner views can be styled by passing them as function components.
 * ```
 * import { CheckBox, Text } from '@ui-kitten/components';
 *
 * <CheckBox>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </CheckBox>
 * ```
 *
 * @overview-example CheckboxTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
let CheckBox = class CheckBox extends react_1.default.Component {
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
        this.onPress = () => {
            this.props.eva.dispatch([]);
            this.props.onChange && this.props.onChange(!this.props.checked, false);
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
            const { textMarginHorizontal, textFontFamily, textFontSize, textFontWeight, textColor, iconWidth, iconHeight, iconBorderRadius, iconTintColor, outlineWidth, outlineHeight, outlineBorderRadius, outlineBackgroundColor, ...containerParameters } = source;
            return {
                selectContainer: containerParameters,
                text: {
                    marginHorizontal: textMarginHorizontal,
                    fontFamily: textFontFamily,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    color: textColor,
                },
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    fill: iconTintColor,
                    stroke: iconTintColor,
                    strokeWidth: 3,
                },
                highlight: {
                    width: outlineWidth,
                    height: outlineHeight,
                    borderRadius: outlineBorderRadius,
                    backgroundColor: outlineBackgroundColor,
                },
            };
        };
        this.renderIconElement = (style) => {
            const Icon = this.props.indeterminate ? minus_component_1.Minus : checkmark_component_1.CheckMark;
            return (react_1.default.createElement(Icon, Object.assign({}, style)));
        };
    }
    render() {
        const { eva, style, disabled, children, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [styles.container, style], disabled: disabled, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, onBlur: this.onBlur, onPress: this.onPress, onPressIn: this.onPressIn, onPressOut: this.onPressOut }),
            react_1.default.createElement(react_native_1.View, { style: styles.highlightContainer },
                react_1.default.createElement(react_native_1.View, { style: [evaStyle.highlight, styles.highlight] }),
                react_1.default.createElement(react_native_1.View, { style: [evaStyle.selectContainer, styles.selectContainer] }, this.renderIconElement(evaStyle.icon))),
            react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyle.text, component: children })));
    }
};
CheckBox = __decorate([
    theme_1.styled('CheckBox')
], CheckBox);
exports.CheckBox = CheckBox;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    highlightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        position: 'absolute',
    },
});
//# sourceMappingURL=checkbox.component.js.map