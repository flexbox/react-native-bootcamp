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
 * Performant interface for rendering simple, flat lists.
 *
 * @extends React.Component
 *
 * @property {any[]} data - An array of anything to be rendered within the list
 *
 * @property {(ListRenderItemInfo<ItemT>) => ReactElement} renderItem - Takes an
 * item from *data* and renders it into the list.
 *
 * @property {FlatListProps} ...FlatListProps - Any props applied to FlatList component.
 *
 * @overview-example ListSimpleUsage
 * Lists should render ListItem components by providing them through `renderItem` property
 * to provide a useful component.
 *
 * @overview-example ListDividers
 * It is a good idea to separate items with `Divider` component.
 *
 * @overview-example ListAccessories
 * Items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 *
 * @overview-example ListCustomItem
 * Using ListItem is helpful for basic lists, but not required. For example, `Card` may be used.
 */
let List = class List extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.listRef = react_1.default.createRef();
        this.scrollToEnd = (params) => {
            this.listRef.current?.scrollToEnd(params);
        };
        this.scrollToIndex = (params) => {
            this.listRef.current?.scrollToIndex(params);
        };
        this.keyExtractor = (item, index) => {
            return index.toString();
        };
    }
    scrollToOffset(params) {
        this.listRef.current?.scrollToOffset(params);
    }
    render() {
        const { eva, style, keyExtractor, ...flatListProps } = this.props;
        return (react_1.default.createElement(react_native_1.FlatList, Object.assign({ keyExtractor: keyExtractor || this.keyExtractor }, flatListProps, { ref: this.listRef, style: [eva.style, style] })));
    }
};
List = __decorate([
    theme_1.styled('List')
], List);
exports.List = List;
//# sourceMappingURL=list.component.js.map