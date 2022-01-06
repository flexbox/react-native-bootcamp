"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const iconAnimation_1 = require("./iconAnimation");
const iconRegistry_service_1 = require("./service/iconRegistry.service");
/**
 * Animated Icon component.
 *
 * @extends React.Component
 *
 * @method {(callback?: Animated.EndCallback) => void} startAnimation - Toggle animation to start.
 *
 * @method {() => void} stopAnimation - Toggle animation to stop.
 *
 * @property {string} name - A name of icon registered in a specific pack.
 *
 * @property {string} pack - A name of icon pack registered in IconRegistry that is able to provide
 * an icon for a given name.
 *
 * @property {string} animation - Animation name. Can be `zoom`, `pulse`, `shake` or null.
 * Defaults to *zoom*.
 *
 * @property {AnimationConfig} animationConfig - Animation config.
 *
 * @property {any} ...props - Accepts any props
 * depending on the component registered in IconRegistry for a given `name` property.
 * In case of using `@ui-kitten/eva-icons` package, Icon accepts any props for react-native-svg component.
 *
 * @overview-example IconSimpleUsage
 * Icon component provides a simple way to render image by requesting it from an icon set.
 * Icons come with [additional packages](guides/icon-packages),
 * that should be configured before using component.
 * We recommend using [Eva Icons](https://akveo.github.io/eva-icons),
 * to provide a full consistency with Eva Design System.
 *
 * @overview-example IconWithinComponents
 * All UI Kitten components that may contain inner views have support for Eva Icons.
 * When using icons as nested components, icon styles are handled by Eva.
 *
 * @overview-example IconAnimation
 * Icons have 3 types of animations: `zoom`, `pulse` and `shake`.
 *
 * @overview-example IconTheming
 * In particular cases, Icon should be styled in a different way.
 * In case of using Eva Icons it renders [svg images](https://github.com/react-native-community/react-native-svg).
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
class Icon extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.startAnimation = (callback) => {
            this.animation?.start(callback);
        };
        this.stopAnimation = () => {
            this.animation?.stop();
        };
        this.animation = iconAnimation_1.getIconAnimation(props.animation, props.animationConfig);
    }
    componentWillUnmount() {
        this.animation?.release();
    }
    render() {
        const { name, pack, animation, animationConfig, ...iconProps } = this.props;
        const registeredIcon = iconRegistry_service_1.IconRegistryService.getIcon(name, pack);
        const iconElement = registeredIcon.icon.toReactElement(iconProps);
        if (!this.animation) {
            return iconElement;
        }
        return (react_1.default.createElement(react_native_1.Animated.View, Object.assign({}, this.animation.toProps()), iconElement));
    }
}
exports.Icon = Icon;
Icon.defaultProps = {
    animation: 'zoom',
};
//# sourceMappingURL=icon.component.js.map