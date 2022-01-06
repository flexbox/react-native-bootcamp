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
const themeContext_1 = require("./themeContext");
/**
 * High Order Function for creating styles mapped to current theme
 * Returns component class which can be used as themed component.
 *
 * @param Component - Type: {ComponentType}. Component to be themed.
 *
 * @param createStyles - Type: {(ThemeType) => NamedStyles}. Function used to create styles mapped on theme.
 *
 * @overview-example WithStylesSimpleUsage
 *
 * @overview-example WithStylesEvaProp
 * A withStyles function injects `eva` property into props of wrapped component, where
 * theme - a current theme,
 * styles - a styles object provided by a function used as a second argument of withStyles.
 * ```
 * interface EvaProp {
 *   theme: ThemeType;
 *   style: StyleType;
 * }
 * ```
 */
exports.withStyles = (Component, createStyles) => {
    class Wrapper extends react_1.default.Component {
        constructor() {
            super(...arguments);
            this.withThemedProps = (props, theme) => {
                const style = createStyles && createStyles(theme);
                return {
                    ...props,
                    eva: {
                        theme,
                        style,
                    },
                };
            };
            this.renderWrappedElement = (theme) => {
                const { forwardedRef, ...restProps } = this.props;
                const props = this.withThemedProps(restProps, theme);
                return (react_1.default.createElement(Component, Object.assign({}, props, { ref: forwardedRef })));
            };
        }
        render() {
            return (react_1.default.createElement(themeContext_1.ThemeContext.Consumer, null, this.renderWrappedElement));
        }
    }
    const WrappingElement = (props, ref) => {
        return (
        // @ts-ignore
        react_1.default.createElement(Wrapper, Object.assign({}, props, { forwardedRef: ref })));
    };
    const ThemedComponent = react_1.default.forwardRef(WrappingElement);
    ThemedComponent.displayName = Component.displayName || Component.name;
    hoist_non_react_statics_1.default(ThemedComponent, Component);
    // @ts-ignore
    return ThemedComponent;
};
//# sourceMappingURL=withStyles.js.map