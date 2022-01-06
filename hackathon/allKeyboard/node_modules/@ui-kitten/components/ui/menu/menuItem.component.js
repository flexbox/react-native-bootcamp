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
 * A single item in Menu.
 * Items should be rendered within Menu or MenuGroup to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuItemSimpleUsage
 */
let MenuItem = class MenuItem extends react_1.default.Component {
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
        this.onPress = (event) => {
            this.props.onPress && this.props.onPress(this.props.descriptor, event);
        };
        this.onPressIn = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.ACTIVE]);
            this.props.onPressIn && this.props.onPressIn(event);
        };
        this.onPressOut = (event) => {
            this.props.eva.dispatch([]);
            this.props.onPressOut && this.props.onPressOut(event);
        };
        this.getComponentStyle = (style) => {
            const { paddingHorizontal, paddingVertical, paddingLeft, backgroundColor } = style;
            const titleStyles = devsupport_1.PropsService.allWithPrefix(style, 'title');
            const indicatorStyles = devsupport_1.PropsService.allWithPrefix(style, 'indicator');
            const iconStyles = devsupport_1.PropsService.allWithPrefix(style, 'icon');
            return {
                container: {
                    paddingHorizontal: paddingHorizontal,
                    paddingLeft: paddingLeft,
                    paddingVertical: paddingVertical,
                    backgroundColor: backgroundColor,
                },
                title: {
                    marginHorizontal: titleStyles.titleMarginHorizontal,
                    fontFamily: titleStyles.titleFontFamily,
                    fontSize: titleStyles.titleFontSize,
                    fontWeight: titleStyles.titleFontWeight,
                    color: titleStyles.titleColor,
                },
                indicator: {
                    width: indicatorStyles.indicatorWidth,
                    backgroundColor: indicatorStyles.indicatorBackgroundColor,
                },
                icon: {
                    width: iconStyles.iconWidth,
                    height: iconStyles.iconHeight,
                    marginHorizontal: iconStyles.iconMarginHorizontal,
                    tintColor: iconStyles.iconTintColor,
                },
            };
        };
    }
    render() {
        const { eva, style, title, accessoryLeft, accessoryRight, children, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [styles.container, evaStyle.container, style], onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, onBlur: this.onBlur, onPress: this.onPress, onPressIn: this.onPressIn, onPressOut: this.onPressOut }),
            react_1.default.createElement(react_native_1.View, { style: [react_native_1.StyleSheet.absoluteFill, evaStyle.indicator] }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryLeft }),
            react_1.default.createElement(devsupport_1.FalsyText, { style: [evaStyle.title, styles.title], component: title }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryRight })));
    }
};
MenuItem = __decorate([
    theme_1.styled('MenuItem')
], MenuItem);
exports.MenuItem = MenuItem;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        textAlign: 'left',
    },
});
//# sourceMappingURL=menuItem.component.js.map