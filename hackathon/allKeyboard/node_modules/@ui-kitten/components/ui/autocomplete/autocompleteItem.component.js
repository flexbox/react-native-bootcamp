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
const listItem_component_1 = require("../list/listItem.component");
/**
 * A single item in Autocomplete List.
 * Items should be rendered within Autocomplete children to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the button.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example AutocompleteItemSimpleUsage
 */
class AutocompleteItem extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(listItem_component_1.ListItem, Object.assign({}, this.props)));
    }
}
exports.AutocompleteItem = AutocompleteItem;
//# sourceMappingURL=autocompleteItem.component.js.map