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
/**
 * Switches toggle the state of a single setting on or off.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(boolean) => void} onChange - Called when toggle
 * should switch it's value.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the toggle.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ToggleSimpleUsage
 *
 * @overview-example ToggleStates
 * Toggle can be checked or disabled.
 *
 * @overview-example ToggleStatus
 * Toggle may marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ToggleStyling
 * Toggle and it's inner views can be styled by passing them as function components.
 * ```
 * import { Toggle, Text } from '@ui-kitten/components';
 *
 * <Toggle>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </Toggle>
 * ```
 *
 * @overview-example ToggleTheming
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 */
let Toggle = class Toggle extends react_1.default.Component {
    constructor(props) {
        super(props);
        // PanResponderCallbacks
        this.onStartShouldSetPanResponder = () => {
            return true;
        };
        this.onStartShouldSetPanResponderCapture = () => {
            return true;
        };
        this.onMoveShouldSetPanResponder = () => {
            return true;
        };
        this.onMoveShouldSetPanResponderCapture = () => {
            return true;
        };
        this.onPanResponderTerminationRequest = () => {
            return false;
        };
        this.onPanResponderGrant = (event) => {
            const { checked, disabled, eva } = this.props;
            if (disabled) {
                return;
            }
            this.onPressIn(event);
            if (this.thumbTranslateAnimationActive) {
                this.thumbTranslateAnimationActive = false;
                this.stopAnimations();
                return;
            }
            this.animateThumbWidth(eva.style.thumbWidth * 1.2);
            this.animateEllipseScale(checked ? 1 : 0.01);
        };
        this.onPanResponderMove = () => {
            return true;
        };
        this.onPanResponderRelease = (event, gestureState) => {
            const { checked, disabled, eva } = this.props;
            if (!disabled) {
                if ((!checked && gestureState.dx > -5) || (checked && gestureState.dx < 5)) {
                    this.toggle(this.onPress);
                }
                else {
                    this.animateEllipseScale(checked ? 0.01 : 1);
                }
            }
            this.animateThumbWidth(eva.style.thumbWidth);
            this.onPressOut(event);
        };
        this.onMouseLeave = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.eva.dispatch([]);
            if (this.props.onMouseLeave) {
                this.props.onMouseLeave(event);
            }
        };
        this.onMouseEnter = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.eva.dispatch([theme_1.Interaction.HOVER]);
            if (this.props.onMouseEnter) {
                this.props.onMouseEnter(event);
            }
        };
        this.onFocus = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.eva.dispatch([theme_1.Interaction.FOCUSED]);
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        };
        this.onBlur = (event) => {
            if (this.props.disabled) {
                return;
            }
            this.props.eva.dispatch([]);
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        };
        this.onPressIn = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.ACTIVE]);
            if (this.props.onPressIn) {
                this.props.onPressIn(event);
            }
        };
        this.onPressOut = (event) => {
            this.props.eva.dispatch([]);
            if (this.props.onPressOut) {
                this.props.onPressOut(event);
            }
        };
        this.onPress = () => {
            if (this.props.onChange) {
                this.props.onChange(!this.props.checked);
            }
        };
        this.getComponentStyle = (source) => {
            const { checked, disabled } = this.props;
            const { outlineWidth, outlineHeight, outlineBorderRadius, outlineBackgroundColor, thumbWidth, thumbHeight, thumbBorderRadius, thumbBackgroundColor, textMarginHorizontal, textFontSize, textFontWeight, textFontFamily, textColor, iconWidth, iconHeight, iconTintColor, backgroundColor, borderColor, ...containerParameters } = source;
            return {
                ellipseContainer: {
                    borderColor: borderColor,
                    backgroundColor: backgroundColor,
                    ...containerParameters,
                },
                highlight: {
                    width: outlineWidth,
                    height: outlineHeight,
                    borderRadius: outlineBorderRadius,
                    backgroundColor: outlineBackgroundColor,
                },
                ellipse: {
                    width: containerParameters.width - (containerParameters.borderWidth * 2),
                    height: containerParameters.height - (containerParameters.borderWidth * 2),
                    borderRadius: (source.height - (source.borderWidth * 2)) / 2,
                    backgroundColor: backgroundColor,
                },
                thumb: {
                    alignSelf: checked ? 'flex-end' : 'flex-start',
                    width: this.thumbWidthAnimation,
                    height: thumbHeight,
                    borderRadius: thumbBorderRadius,
                    backgroundColor: thumbBackgroundColor,
                    elevation: disabled ? 0 : 5,
                    transform: [{ translateX: this.thumbTranslateAnimation }],
                },
                text: {
                    marginHorizontal: textMarginHorizontal,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    fontFamily: textFontFamily,
                    color: textColor,
                },
                icon: {
                    width: source.iconWidth,
                    height: source.iconHeight,
                    fill: iconTintColor,
                    stroke: iconTintColor,
                    strokeWidth: 3,
                },
            };
        };
        this.animateThumbTranslate = (value, callback = () => null) => {
            this.thumbTranslateAnimationActive = true;
            react_native_1.Animated.timing(this.thumbTranslateAnimation, {
                toValue: devsupport_1.RTLService.select(value, -value),
                duration: 150,
                easing: react_native_1.Easing.linear,
                useNativeDriver: false,
            }).start(() => {
                this.thumbTranslateAnimationActive = false;
                callback();
            });
        };
        this.animateThumbWidth = (value, callback = () => null) => {
            react_native_1.Animated.timing(this.thumbWidthAnimation, {
                toValue: value,
                duration: 150,
                easing: react_native_1.Easing.linear,
                useNativeDriver: false,
            }).start(callback);
        };
        this.animateEllipseScale = (value, callback = () => null) => {
            react_native_1.Animated.timing(this.ellipseScaleAnimation, {
                toValue: value,
                duration: 200,
                easing: react_native_1.Easing.linear,
                useNativeDriver: false,
            }).start(callback);
        };
        this.stopAnimations = () => {
            const value = this.props.checked ? 0.01 : 1;
            this.thumbTranslateAnimation.stopAnimation();
            this.ellipseScaleAnimation.stopAnimation();
            this.thumbWidthAnimation.stopAnimation();
            this.ellipseScaleAnimation.setValue(value);
        };
        this.toggle = (callback = (nextValue) => null) => {
            const value = this.props.checked ? -20 : 20;
            this.animateThumbTranslate(value, () => {
                this.thumbTranslateAnimation.setValue(0);
                callback(!this.props.checked);
            });
            this.animateThumbWidth(this.props.eva.style.thumbWidth);
        };
        const { checked, eva } = props;
        this.thumbWidthAnimation = new react_native_1.Animated.Value(eva.style.thumbWidth);
        this.thumbTranslateAnimation = new react_native_1.Animated.Value(0);
        this.ellipseScaleAnimation = new react_native_1.Animated.Value(checked ? 0.01 : 1.0);
        this.thumbTranslateAnimationActive = false;
        this.panResponder = react_native_1.PanResponder.create(this);
    }
    render() {
        const { eva, style, checked, children, testID, ...touchableProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(react_native_1.View, Object.assign({ testID: testID }, this.panResponder.panHandlers, { style: [styles.container, style] }),
            react_1.default.createElement(devsupport_1.TouchableWeb, Object.assign({}, touchableProps, { style: styles.toggleContainer, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, onBlur: this.onBlur }),
                react_1.default.createElement(react_native_1.View, { style: [evaStyle.highlight, styles.highlight] }),
                react_1.default.createElement(react_native_1.Animated.View, { style: [evaStyle.ellipseContainer, styles.ellipseContainer] },
                    react_1.default.createElement(react_native_1.Animated.View, { style: [evaStyle.ellipse, styles.ellipse] }),
                    react_1.default.createElement(react_native_1.Animated.View, { style: [evaStyle.thumb, styles.thumb] },
                        react_1.default.createElement(checkmark_component_1.CheckMark, Object.assign({}, evaStyle.icon))))),
            react_1.default.createElement(devsupport_1.FalsyText, { style: evaStyle.text, component: children })));
    }
};
Toggle = __decorate([
    theme_1.styled('Toggle')
], Toggle);
exports.Toggle = Toggle;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ellipseContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    ellipse: {
        alignSelf: 'center',
        position: 'absolute',
    },
    highlight: {
        alignSelf: 'center',
        position: 'absolute',
    },
    thumb: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
//# sourceMappingURL=toggle.component.js.map