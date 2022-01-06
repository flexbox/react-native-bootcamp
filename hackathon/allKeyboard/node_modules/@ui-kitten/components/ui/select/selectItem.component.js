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
const checkbox_component_1 = require("../checkbox/checkbox.component");
/**
 * A single item in Select.
 * Items should be rendered within Select or SelectGroup children to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
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
 * @overview-example SelectItemSimpleUsage
 */
let SelectItem = class SelectItem extends react_1.default.Component {
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
        this.onAccessoryCheckedChange = () => {
            this.props.onPress && this.props.onPress(this.props.descriptor);
        };
        this.getComponentStyle = (style) => {
            const { paddingHorizontal, paddingLeft, paddingVertical, backgroundColor } = style;
            const textStyles = devsupport_1.PropsService.allWithPrefix(style, 'text');
            const iconStyles = devsupport_1.PropsService.allWithPrefix(style, 'icon');
            return {
                container: {
                    paddingHorizontal: paddingHorizontal,
                    paddingLeft: paddingLeft,
                    paddingVertical: paddingVertical,
                    backgroundColor: backgroundColor,
                },
                text: {
                    marginHorizontal: textStyles.textMarginHorizontal,
                    fontFamily: textStyles.textFontFamily,
                    fontSize: textStyles.textFontSize,
                    fontWeight: textStyles.textFontWeight,
                    color: textStyles.textColor,
                },
                icon: {
                    width: iconStyles.iconWidth,
                    height: iconStyles.iconHeight,
                    marginHorizontal: iconStyles.iconMarginHorizontal,
                    tintColor: iconStyles.iconTintColor,
                },
            };
        };
        this.renderAccessory = (evaStyle) => {
            if (!this.isMultiSelect) {
                return null;
            }
            return (react_1.default.createElement(checkbox_component_1.CheckBox, { style: evaStyle, checked: this.props.selected, onChange: this.onAccessoryCheckedChange }));
        };
    }
    get isMultiSelect() {
        if (this.props.descriptor) {
            return this.props.descriptor.multiSelect;
        }
        return false;
    }
    render() {
        const { eva, style, title, accessoryLeft, accessoryRight, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: [styles.container, evaStyle.container, style], onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, onBlur: this.onBlur, onPress: this.onPress, onPressIn: this.onPressIn, onPressOut: this.onPressOut }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryLeft, fallback: this.renderAccessory(evaStyle.icon) }),
            react_1.default.createElement(devsupport_1.FalsyText, { style: [styles.text, evaStyle.text], component: title }),
            react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryRight })));
    }
};
SelectItem = __decorate([
    theme_1.styled('SelectOption')
], SelectItem);
exports.SelectItem = SelectItem;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
        textAlign: 'left',
    },
});
//# sourceMappingURL=selectItem.component.js.map