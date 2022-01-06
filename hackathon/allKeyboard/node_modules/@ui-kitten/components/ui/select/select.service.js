"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const devsupport_1 = require("../../devsupport");
const SEPARATOR = ', ';
class SelectService {
    constructor() {
        this.selectItem = (multiSelect, descriptor, selected) => {
            if (multiSelect) {
                return this.createMultiSelectIndices(descriptor, selected);
            }
            return descriptor.index;
        };
        this.toStringSelected = (selected) => {
            if (!Array.isArray(selected)) {
                return '';
            }
            const options = selected.map((index) => {
                return `Option ${index.toString()}`;
            });
            return options.join(SEPARATOR);
        };
        this.isSelected = (descriptor, selected) => {
            if (descriptor.multiSelect && this.isGroup(descriptor)) {
                return this.containsSomeFromGroup(descriptor.index, selected);
            }
            return this.contains(descriptor.index, selected);
        };
        this.isDisabled = (descriptor) => {
            return !descriptor.multiSelect && this.isGroup(descriptor);
        };
        this.createDescriptorForElement = (element, multiSelect, index) => {
            const groupIndices = react_1.default.Children.map(element.props.children, ((child, row) => {
                return new devsupport_1.IndexPath(row, index);
            }));
            return { multiSelect, groupIndices, index: new devsupport_1.IndexPath(index) };
        };
        this.createDescriptorForNestedElement = (element, descriptor, index) => {
            return {
                ...descriptor,
                index: new devsupport_1.IndexPath(index, descriptor.index.row),
                groupIndices: [],
            };
        };
        this.createMultiSelectIndices = (descriptor, selected) => {
            const isIndexSelected = this.isSelected(descriptor, selected);
            return !isIndexSelected ? this.addIndex(descriptor, selected) : this.removeIndex(descriptor, selected);
        };
        this.isGroup = (descriptor) => {
            return descriptor.groupIndices && descriptor.groupIndices.length > 0;
        };
        this.createGroupIndices = (descriptor) => {
            return this.isGroup(descriptor) ? descriptor.groupIndices : [descriptor.index];
        };
        this.addIndex = (descriptor, selected) => {
            return [...selected, ...this.createGroupIndices(descriptor)];
        };
        this.removeIndex = (descriptor, selected) => {
            const groupIndices = this.createGroupIndices(descriptor);
            return selected.filter((selectedIndex) => {
                return !this.contains(selectedIndex, groupIndices);
            });
        };
        this.contains = (index, selected) => {
            return selected.some((selectedIndex) => {
                return selectedIndex.equals(index);
            });
        };
        this.containsSomeFromGroup = (index, selected) => {
            return selected.some((selectedIndex) => {
                return selectedIndex.section === index.row;
            });
        };
    }
}
exports.SelectService = SelectService;
//# sourceMappingURL=select.service.js.map