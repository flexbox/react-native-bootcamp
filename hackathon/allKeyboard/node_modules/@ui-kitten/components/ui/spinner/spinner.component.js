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
const animation_1 = require("./animation");
/**
 * Displays a loading state of a page or a section.
 *
 * @extends React.Component
 *
 * @property {boolean} animating - Whether component is animating.
 * Default is *true*.
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
 * @overview-example SpinnerSimpleUsage
 * Default Spinner status is `primary` and size is `medium`.
 *
 * @overview-example SpinnerSizes
 * To resize Spinner, a `size` property may be used.
 *
 * @overview-example SpinnerStatuses
 * A color can be changed with `status` property
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example SpinnerTheming
 * Styling of Spinner is possible with [configuring a custom theme](guides/branding).
 *
 * @example SpinnerDataLoading
 */
let Spinner = class Spinner extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.animation = new animation_1.SpinnerAnimation(this.containerSize.height);
        this.startAnimation = () => {
            this.animation.start();
        };
        this.stopAnimation = () => {
            this.animation.stop();
        };
        this.getComponentStyle = (source) => {
            const start = {
                container: source.container,
                arc: source.start,
            };
            const end = {
                container: source.container,
                arc: source.end,
                overflow: { top: this.containerSize.height / 2 },
            };
            return { start, end };
        };
        this.renderArcElement = (style, size) => {
            const arcSize = new devsupport_1.Size(size.width, size.height / 2);
            return (react_1.default.createElement(react_native_1.Animated.View, { style: [react_native_1.StyleSheet.absoluteFill, style.container, size] },
                react_1.default.createElement(react_native_1.View, { style: [styles.noOverflow, style.overflow, arcSize] },
                    react_1.default.createElement(react_native_1.Animated.View, { style: [style.arc, size] },
                        react_1.default.createElement(react_native_1.View, { style: [styles.noOverflow, arcSize] },
                            react_1.default.createElement(react_native_1.View, { style: [this.props.eva.style, this.props.style] }))))));
        };
    }
    get containerSize() {
        const { width, height } = react_native_1.StyleSheet.flatten([this.props.eva.style, this.props.style]);
        // @ts-ignore: width and height are restricted to be a number
        return new devsupport_1.Size(width, height);
    }
    componentDidMount() {
        if (this.props.animating) {
            this.startAnimation();
        }
    }
    componentDidUpdate(prevProps) {
        const animatingChanged = this.props.animating !== prevProps.animating;
        if (animatingChanged && this.props.animating) {
            this.startAnimation();
        }
        if (animatingChanged && !this.props.animating) {
            this.stopAnimation();
        }
    }
    componentWillUnmount() {
        this.animation.release();
    }
    render() {
        const containerSize = this.containerSize;
        const evaStyle = this.getComponentStyle(this.animation.toProps());
        return (react_1.default.createElement(react_native_1.View, { testID: this.props.testID, style: containerSize },
            this.renderArcElement(evaStyle.start, containerSize),
            this.renderArcElement(evaStyle.end, containerSize)));
    }
};
Spinner.defaultProps = {
    animating: true,
};
Spinner = __decorate([
    theme_1.styled('Spinner')
], Spinner);
exports.Spinner = Spinner;
const styles = react_native_1.StyleSheet.create({
    noOverflow: {
        overflow: 'hidden',
    },
});
//# sourceMappingURL=spinner.component.js.map