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
 * A single item rendered in List.
 * Items should be rendered within List by providing them through `renderItem` property to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} description - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 *
 * @property {ReactNode} children - Component to render within the item.
 * Useful when needed to render a custom item and get a feedback when it is pressed.
 * If provided, *title* and other properties will be ignored.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ListItemSimpleUsage
 *
 * @overview-example ListItemStyling
 * List Item and it's inner views can be styled by passing them as function components.
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { ListItem, Text } from '@ui-kitten/components';
 *
 * <ListItem
 *   title={evaProps => <Text {...evaProps}>TITLE</Text>}
 *   description={evaProps => <Text {...evaProps}>DESCRIPTION</Text>}
 * />
 * ```
 */
let ListItem = class ListItem extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onPressIn = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.ACTIVE]);
            this.props.onPressIn && this.props.onPressIn(event);
        };
        this.onPressOut = (event) => {
            this.props.eva.dispatch([]);
            this.props.onPressOut && this.props.onPressOut(event);
        };
        this.getComponentStyle = (source) => {
            const { iconWidth, iconHeight, iconMarginHorizontal, iconTintColor, titleMarginHorizontal, titleFontFamily, titleFontSize, titleFontWeight, titleColor, descriptionFontFamily, descriptionFontSize, descriptionFontWeight, descriptionColor, descriptionMarginHorizontal, accessoryMarginHorizontal, ...containerParameters } = source;
            return {
                container: containerParameters,
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    marginHorizontal: iconMarginHorizontal,
                    tintColor: iconTintColor,
                },
                title: {
                    marginHorizontal: titleMarginHorizontal,
                    fontFamily: titleFontFamily,
                    fontSize: titleFontSize,
                    fontWeight: titleFontWeight,
                    color: titleColor,
                },
                description: {
                    color: descriptionColor,
                    fontFamily: descriptionFontFamily,
                    fontSize: descriptionFontSize,
                    fontWeight: descriptionFontWeight,
                    marginHorizontal: descriptionMarginHorizontal,
                },
                accessory: {
                    marginHorizontal: accessoryMarginHorizontal,
                },
            };
        };
        this.renderTemplateChildren = (props, evaStyle) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: props.accessoryLeft }),
                react_1.default.createElement(react_native_1.View, { style: styles.contentContainer },
                    react_1.default.createElement(devsupport_1.FalsyText, { style: [evaStyle.title, styles.title], component: props.title }),
                    react_1.default.createElement(devsupport_1.FalsyText, { style: [evaStyle.description, styles.description], component: props.description })),
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: props.accessoryRight })));
        };
    }
    render() {
        const { eva, style, children, title, description, accessoryLeft, accessoryRight, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [evaStyle.container, styles.container, webStyles.container, style], onPressIn: this.onPressIn, onPressOut: this.onPressOut }), children || this.renderTemplateChildren(this.props, evaStyle)));
    }
};
ListItem = __decorate([
    theme_1.styled('ListItem')
], ListItem);
exports.ListItem = ListItem;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        textAlign: 'left',
    },
    description: {
        textAlign: 'left',
    },
});
const webStyles = react_native_1.Platform.OS === 'web' && react_native_1.StyleSheet.create({
    container: {
        // @ts-ignore
        outlineWidth: 0,
    },
});
//# sourceMappingURL=listItem.component.js.map