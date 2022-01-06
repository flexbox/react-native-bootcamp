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
const hoist_non_react_statics_1 = __importDefault(require("hoist-non-react-statics"));
const styleConsumer_service_1 = require("./styleConsumer.service");
const mappingContext_1 = require("../mapping/mappingContext");
const themeContext_1 = require("../theme/themeContext");
/**
 * `@styled` is a High Order Function to apply style mapping on a component.
 * Used by all UI Kitten components and can be used when building custom components with Eva.
 *
 * @property {string} appearance - Appearance of component. Default is provided by mapping.
 *
 * @property {EvaProp} eva - Additional property injected to all `styled` components. Includes following properties:
 * `theme` - current theme,
 * `style` - style provided by Eva,
 * `dispatch` - Function for requesting styles from Eva for current component state.
 *
 * @param name - Type: {string}. Name of the component in mapping.json.
 *
 * @overview-example StyledComponentSimpleUsage
 * The below examples demonstrate how components can be styled with Eva.
 * See [the guide](design-system/custom-component-mapping) for more details.
 *
 * @overview-example StyledComponentEvaProp
 * A styled function injects `eva` property into props of decorated component, where
 * theme - a current theme,
 * styles - a styles object provided by Eva
 * dispatch - a function to request styles for a particular state.
 *
 * ```
 * interface EvaProp {
 *   theme: ThemeType;
 *   style: StyleType;
 *   dispatch: (interaction: Interaction[]) => void;
 * }
 * ```
 *
 * @overview-example StyledComponentStates
 * Styled components may describe its style for a particular state.
 *
 * Let's say we don't like the standard behavior of TouchableOpacity when it's pressed and
 * we want the component to change it's color rather being highlighted.
 *
 * We define an active state in `meta` key and in mapping, so that component will change `backgroundColor`,
 * when `active` is requested. To do this, we call `dispatch` function when Touchable is pressed.
 * Then, when touch is released, we request nothing, which stands for `default`.
 *
 * @overview-example StyledComponentVariants
 * Now let's say we want to have a `status` property to make component change its color, for example,
 * within the forms validation. Furthermore, we want to control its color for both statuses when it is pressed.
 *
 * The `variantGroups` key in `meta` defines all properties that can be applied by component.
 * Each key in variant group is a string value that can be passed to component props.
 */
exports.styled = (name) => {
    return (component) => {
        return styleInjector(component, name);
    };
};
const styleInjector = (Component, name) => {
    if (!name) {
        console.warn('Components annotated with @styled function should also have its in mapping.json.');
        return null;
    }
    class Wrapper extends react_1.default.Component {
        constructor() {
            super(...arguments);
            this.state = {
                interaction: [],
            };
            this.init = false;
            this.onInit = (style, theme) => {
                this.service = new styleConsumer_service_1.StyleConsumerService(name, style);
                this.defaultProps = this.service.createDefaultProps();
                this.init = true;
            };
            this.onDispatch = (interaction) => {
                this.setState({ interaction });
            };
            this.withEvaProp = (sourceProps, sourceStyle, theme) => {
                const props = { ...this.defaultProps, ...sourceProps };
                const style = this.service.createStyleProp(props, sourceStyle, theme, this.state.interaction);
                return {
                    ...props,
                    eva: {
                        theme,
                        style,
                        dispatch: this.onDispatch,
                    },
                };
            };
            this.renderWrappedElement = (style, theme) => {
                if (!this.init) {
                    this.onInit(style, theme);
                }
                const { forwardedRef, ...restProps } = this.props;
                return (react_1.default.createElement(Component, Object.assign({}, this.withEvaProp(restProps, style, theme), { ref: forwardedRef })));
            };
        }
        render() {
            return (react_1.default.createElement(mappingContext_1.MappingContext.Consumer, null, (style) => (react_1.default.createElement(themeContext_1.ThemeContext.Consumer, null, (theme) => {
                return this.renderWrappedElement(style, theme);
            }))));
        }
    }
    const WrappingElement = (props, ref) => {
        return (react_1.default.createElement(Wrapper, Object.assign({}, props, { forwardedRef: ref })));
    };
    const ResultComponent = react_1.default.forwardRef(WrappingElement);
    ResultComponent.displayName = Component.displayName || Component.name;
    hoist_non_react_statics_1.default(ResultComponent, Component);
    return ResultComponent;
};
//# sourceMappingURL=styled.js.map