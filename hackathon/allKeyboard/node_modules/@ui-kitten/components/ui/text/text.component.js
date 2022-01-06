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
const theme_1 = require("../../theme");
/**
 * Basic text writing.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement<TextProps>} children - String or number to be rendered as text.
 * Also can be ReactElement<TextProps> - nested Text component.
 *
 * @property {string} appearance - Can be `default`, `alternative` or `hint`.
 * Use `alternative` for displaying light text on a dark content and vice versa.
 * Use `hint` for giving user a hint on something.
 *
 * @property {string} category - Can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `s1`, `s2`, `p1`, `p2`, `c1`, `c2`, `label`.
 * Defaults to *p1*.
 * Use *h* categories when needed to display headings.
 * Use *s* categories when needed to display subtitles.
 * Use *p* categories when needed to display regular text.
 * Use *c* and *label* categories when needed to give user a hint on something.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TextProps} ...TextProps - Any props applied to Text component.
 *
 * @overview-example TextCategories
 * Text has pre-defined set of styles for headings, subtitles, paragraphs, and more.
 *
 * @overview-example TextAppearances
 * Also, it has 2 types of additional appearances:
 * `hint` and `alternative`.
 *
 * Use hints when needed to give user a hint on action.
 * And use alternative when needed to display light text in light themes (same for dark).
 *
 * @overview-example TextStatuses
 *
 * @overview-example TextStyling
 * Text can be styled with `style` property.
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { Text } from '@ui-kitten/components';
 *
 * <Text style={...}>Place your Text</Text>
 * ```
 */
let Text = class Text extends react_1.default.Component {
    render() {
        const { eva, style, ...textProps } = this.props;
        return (react_1.default.createElement(react_native_1.Text, Object.assign({}, textProps, { style: [eva.style, style] })));
    }
};
Text = __decorate([
    theme_1.styled('Text')
], Text);
exports.Text = Text;
//# sourceMappingURL=text.component.js.map