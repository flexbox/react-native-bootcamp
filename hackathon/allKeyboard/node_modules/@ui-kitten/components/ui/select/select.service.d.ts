import { IndexPath } from '../../devsupport';
import { SelectItemElement } from './selectItem.component';
export interface SelectItemDescriptor {
    multiSelect: boolean;
    index: IndexPath;
    groupIndices?: IndexPath[];
}
export declare class SelectService {
    selectItem: (multiSelect: boolean, descriptor: SelectItemDescriptor, selected: IndexPath[]) => IndexPath | IndexPath[];
    toStringSelected: (selected: IndexPath[]) => string;
    isSelected: (descriptor: SelectItemDescriptor, selected: IndexPath[]) => boolean;
    isDisabled: (descriptor: SelectItemDescriptor) => boolean;
    createDescriptorForElement: (element: SelectItemElement, multiSelect: boolean, index: number) => SelectItemDescriptor;
    createDescriptorForNestedElement: (element: SelectItemElement, descriptor: SelectItemDescriptor, index: number) => SelectItemDescriptor;
    private createMultiSelectIndices;
    private isGroup;
    private createGroupIndices;
    private addIndex;
    private removeIndex;
    private contains;
    private containsSomeFromGroup;
}
