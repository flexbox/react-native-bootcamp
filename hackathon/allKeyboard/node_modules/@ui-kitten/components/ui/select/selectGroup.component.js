"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const checkbox_component_1 = require("../checkbox/checkbox.component");
const selectItem_component_1 = require("./selectItem.component");
/**
 * A group of items displayed in Select.
 * Groups should be rendered within Select and contain SelectItem components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]} children -
 * items to be rendered within group.
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the group.
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
 * @overview-example SelectWithGroups
 */
class SelectGroup extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.createAccessoryProps = (props) => {
            return {
                checked: props.selected,
                onChange: () => props.onPress && props.onPress(props.descriptor),
            };
        };
        this.createGroupedItemProps = (props) => {
            const accessoryProps = this.createAccessoryProps(props);
            return {
                appearance: 'grouped',
                accessoryLeft: evaProps => this.renderAccessory({ ...evaProps, ...accessoryProps }),
            };
        };
        this.renderAccessory = (props) => {
            if (!this.isMultiSelect) {
                return null;
            }
            return (react_1.default.createElement(checkbox_component_1.CheckBox, Object.assign({}, props)));
        };
        this.renderGroupedItems = (source) => {
            return react_1.default.Children.map(source, (item, key) => {
                const groupedProps = this.createGroupedItemProps(item.props);
                return react_1.default.cloneElement(item, { key, ...groupedProps, ...item.props });
            });
        };
    }
    get isMultiSelect() {
        if (this.props.descriptor) {
            return this.props.descriptor.multiSelect;
        }
        return false;
    }
    get groupAccessoryState() {
        const nestedElements = react_1.default.Children.toArray(this.props.children);
        const selectedElements = nestedElements.filter(el => el.props.selected);
        const indeterminate = selectedElements.length > 0 && selectedElements.length < nestedElements.length;
        const checked = selectedElements.length === nestedElements.length;
        return { checked, indeterminate };
    }
    get groupAccessoryProps() {
        return {
            ...this.createAccessoryProps(this.props),
            ...this.groupAccessoryState,
        };
    }
    render() {
        const { children, ...itemProps } = this.props;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(selectItem_component_1.SelectItem, Object.assign({ accessoryLeft: evaProps => this.renderAccessory({ ...evaProps, ...this.groupAccessoryProps }) }, itemProps)),
            this.renderGroupedItems(children)));
    }
}
exports.SelectGroup = SelectGroup;
//# sourceMappingURL=selectGroup.component.js.map