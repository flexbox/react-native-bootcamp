import React from 'react';
import { ChildrenWithProps } from '../../devsupport';
import { SelectItemProps } from './selectItem.component';
export interface SelectGroupProps extends SelectItemProps {
    children?: ChildrenWithProps<SelectItemProps>;
}
export declare type SelectGroupElement = React.ReactElement<SelectItemProps>;
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
export declare class SelectGroup extends React.Component<SelectGroupProps> {
    private get isMultiSelect();
    private get groupAccessoryState();
    private get groupAccessoryProps();
    private createAccessoryProps;
    private createGroupedItemProps;
    private renderAccessory;
    private renderGroupedItems;
    render(): React.ReactElement;
}
