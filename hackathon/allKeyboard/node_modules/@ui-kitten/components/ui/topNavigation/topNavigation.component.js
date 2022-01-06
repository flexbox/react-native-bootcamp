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
 * TopNavigation provides a heading component for the entire page.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the top navigation.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} subtitle - String, number or a function component
 * to render within the top navigation.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | () => ReactElement} accessoryLeft - Function component
 * to render to the left edge the top navigation.
 *
 * @property {ReactElement | () => ReactElement} accessoryRight - Function component
 * to render to the right edge the top navigation.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default`, `control`.
 * Use *control* appearance when needed to display within a contrast container.
 *
 * @property {string} alignment - Alignment of nested components.
 * Can be `center` or `start`.
 * Defaults to *start*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example TopNavigationSimpleUsage
 * In basic example TopNavigation contains a title and actions.
 *
 * @overview-example TopNavigationAccessories
 * TopNavigation may contain a single action on the left,
 * and as many actions as needed on the right. In common practices, actions may be wrapped in menus.
 *
 * @overview-example TopNavigationDivider
 * It is a good idea to separate TopNavigation and screen contents with `Divider` component.
 *
 * @overview-example TopNavigationImageTitle
 * Sometimes it is needed to have an image as title.
 * In this case, a function component can be provided to `title` property.
 *
 * @overview-example TopNavigationStyling
 * TopNavigation and it's inner views can be styled by passing them as function components.
 *
 * In most cases, this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { TopNavigation, Text } from '@ui-kitten/components';
 *
 * <TopNavigation
 *   title={evaProps => <Text {...evaProps}>Title</Text>}
 *   subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
 * />
 * ```
 */
let TopNavigation = class TopNavigation extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getAlignmentDependentStyles = (alignment) => {
            if (alignment === 'center') {
                return {
                    container: styles.containerCentered,
                    titleContainer: styles.titleContainerCentered,
                };
            }
            return {
                rightControlsContainer: styles.rightControlsContainerStart,
            };
        };
        this.getComponentStyle = (source) => {
            const { titleTextAlign, titleFontFamily, titleFontSize, titleFontWeight, titleColor, subtitleTextAlign, subtitleFontFamily, subtitleFontSize, subtitleFontWeight, subtitleColor, ...containerParameters } = source;
            return {
                container: containerParameters,
                title: {
                    textAlign: titleTextAlign,
                    fontFamily: titleFontFamily,
                    fontSize: titleFontSize,
                    fontWeight: titleFontWeight,
                    color: titleColor,
                },
                subtitle: {
                    textAlign: subtitleTextAlign,
                    fontFamily: subtitleFontFamily,
                    fontSize: subtitleFontSize,
                    color: subtitleColor,
                    fontWeight: subtitleFontWeight,
                },
            };
        };
    }
    render() {
        const { eva, style, title, subtitle, alignment, accessoryLeft, accessoryRight, ...viewProps } = this.props;
        const evaStyles = this.getComponentStyle(eva.style);
        const alignmentStyles = this.getAlignmentDependentStyles(alignment);
        return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [evaStyles.container, styles.container, alignmentStyles.container, style] }, viewProps),
            react_1.default.createElement(react_native_1.View, { style: styles.leftControlContainer },
                react_1.default.createElement(devsupport_1.FalsyFC, { component: accessoryLeft })),
            react_1.default.createElement(react_native_1.View, { style: alignmentStyles.titleContainer || styles.titleContainer },
                react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyles.title, component: title }),
                react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyles.subtitle, component: subtitle })),
            react_1.default.createElement(react_native_1.View, { style: [styles.rightControlsContainer, alignmentStyles.rightControlsContainer] },
                react_1.default.createElement(devsupport_1.FalsyFC, { component: accessoryRight }))));
    }
};
TopNavigation = __decorate([
    theme_1.styled('TopNavigation')
], TopNavigation);
exports.TopNavigation = TopNavigation;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerCentered: {
        justifyContent: 'space-between',
    },
    titleContainerCentered: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        flex: 1
    },
    leftControlContainer: {
        flexDirection: 'row',
        zIndex: 1,
    },
    rightControlsContainer: {
        flexDirection: 'row',
        zIndex: 1,
    },
    rightControlsContainerStart: {
        flex: 0,
        justifyContent: 'flex-end',
    },
});
//# sourceMappingURL=topNavigation.component.js.map