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
const menuItem_component_1 = require("../menu/menuItem.component");
/**
 * A single item in Drawer.
 * Items should be rendered within Drawer or DrawerGroup children to provide a usable component.
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
 * @overview-example DrawerItemSimpleUsage
 */
class DrawerItem extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(menuItem_component_1.MenuItem, Object.assign({}, this.props)));
    }
}
exports.DrawerItem = DrawerItem;
//# sourceMappingURL=drawerItem.component.js.map