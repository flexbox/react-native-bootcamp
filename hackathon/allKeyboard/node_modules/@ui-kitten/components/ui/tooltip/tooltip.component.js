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
const popover_component_1 = require("../popover/popover.component");
const popoverIndicator_component_1 = require("../popover/popoverIndicator.component");
/**
 * Tooltip displays informative text when users focus on or tap an element.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets Tooltip visible.
 *
 * @method {() => void} hide - Sets Tooltip invisible.
 *
 * @property {() => ReactElement} anchor - A component relative to which content component will be shown.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render within the tooltip.
 * If it is a function, expected to return a Text.
 *
 * @property {boolean} visible - Whether content component is visible.
 * Defaults to false.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {() => void} onBackdropPress - Called when tooltip is visible and the underlying view was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {boolean} fullWidth - Whether a content component should take the width of `anchor`.
 *
 * @property {string | PopoverPlacement} placement - Position of the content component relative to the `anchor`.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @overview-example TooltipSimpleUsage
 * Tooltip accepts it's text as child element and is displayed relative to `anchor` view.
 *
 * @overview-example TooltipAccessories
 * Also, it may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](docs/guides/icon-packages).
 *
 * @overview-example TooltipStyledBackdrop
 * To style the underlying view, `backdropStyle` property may be used.
 *
 * @overview-example TooltipPlacement
 * By default, tooltip is displayed to the bottom of `anchor` view, but it is configurable with `placement` property.
 *
 * @overview-example TooltipStyling
 * Tooltip and it's inner views can be styled by passing them as function components.
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 * ```
 * import { Tooltip, Text } from '@ui-kitten/components';
 *
 * <Tooltip style={...}>
 *   {evaProps => <Text {...evaProps}>TEXT</Text>}
 * </Tooltip>
 * ```
 */
let Tooltip = class Tooltip extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.popoverRef = react_1.default.createRef();
        this.show = () => {
            this.popoverRef.current?.show();
        };
        this.hide = () => {
            this.popoverRef.current?.hide();
        };
        this.getComponentStyle = (source) => {
            const { indicatorBackgroundColor, iconWidth, iconHeight, iconMarginHorizontal, iconTintColor, textMarginHorizontal, textFontSize, textFontWeight, textFontFamily, textColor, ...containerParameters } = source;
            return {
                container: containerParameters,
                indicator: {
                    backgroundColor: indicatorBackgroundColor,
                },
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    marginHorizontal: iconMarginHorizontal,
                    tintColor: iconTintColor,
                },
                text: {
                    marginHorizontal: textMarginHorizontal,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    fontFamily: textFontFamily,
                    color: textColor,
                },
            };
        };
        this.renderPopoverIndicatorElement = (props) => {
            const evaStyle = this.getComponentStyle(this.props.eva.style);
            return (react_1.default.createElement(popoverIndicator_component_1.PopoverIndicator, Object.assign({}, props, { style: [props.style, evaStyle.indicator] })));
        };
    }
    render() {
        const { eva, style, accessoryLeft, accessoryRight, children, ...popoverProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(popover_component_1.Popover, Object.assign({}, popoverProps, { ref: this.popoverRef, style: [evaStyle.container, style], indicator: this.renderPopoverIndicatorElement }),
            react_1.default.createElement(react_native_1.View, { style: styles.content },
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryLeft }),
                react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyle.text, component: children }),
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryRight }))));
    }
};
Tooltip = __decorate([
    theme_1.styled('Tooltip')
], Tooltip);
exports.Tooltip = Tooltip;
const styles = react_native_1.StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=tooltip.component.js.map