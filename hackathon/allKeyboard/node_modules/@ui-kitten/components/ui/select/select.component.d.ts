/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';
import { ChildrenWithProps, EvaInputSize, EvaStatus, IndexPath, RenderProp, TouchableWebProps, Overwrite, LiteralUnion } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { SelectGroupProps } from './selectGroup.component';
import { SelectItemProps } from './selectItem.component';
declare type SelectStyledProps = Overwrite<StyledComponentProps, {
    appearance?: LiteralUnion<'default'>;
}>;
export interface SelectProps extends TouchableWebProps, SelectStyledProps {
    children?: ChildrenWithProps<SelectItemProps | SelectGroupProps>;
    selectedIndex?: IndexPath | IndexPath[];
    onSelect?: (index: IndexPath | IndexPath[]) => void;
    value?: RenderProp<TextProps> | React.ReactText;
    multiSelect?: boolean;
    placeholder?: RenderProp<TextProps> | React.ReactText;
    label?: RenderProp<TextProps> | React.ReactText;
    caption?: RenderProp<TextProps> | React.ReactText;
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
    status?: EvaStatus;
    size?: EvaInputSize;
}
export declare type SelectElement = React.ReactElement<SelectProps>;
interface State {
    listVisible: boolean;
}
/**
 * A dropdown menu for displaying selectable options.
 * Select should contain SelectItem or SelectGroup components to provide a useful component.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets options list visible.
 *
 * @method {() => void} hide - Sets options list invisible.
 *
 * @method {() => void} focus - Focuses input field and sets options list visible.
 *
 * @method {() => void} blur - Removes focus from input field and sets options list invisible.
 *
 * @method {() => boolean} isFocused - Whether input field is currently focused and options list is visible.
 *
 * @method {() => void} clear - Removes all text from the Select.
 *
 * @property {ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]} children -
 * Items to be rendered within options list.
 *
 * @property {IndexPath | IndexPath[]} selectedIndex - Index or array of indices of selected options.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Select becomes sectioned when SelectGroup is rendered within children.
 *
 * @property {(IndexPath | IndexPath[]) => void} onSelect - Called when option is pressed.
 * Called with `row: number` for non-grouped items.
 * Called with `row: number, section: number` for items rendered within group,
 * where row - index of item in group, section - index of group in list.
 * Called with array if *multiSelect* was set to true.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} value - String, number or a function component
 * to render for the selected options.
 * By default, calls *toString()* for each index in selectedIndex property.
 * If it is a function, expected to return a Text.
 *
 * @property {boolean} multiSelect - Whether multiple options can be selected.
 * If true, calls onSelect with IndexPath[] in arguments.
 * Otherwise, with IndexPath in arguments.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} placeholder - String, number or a function component
 * to render when there is no selected option.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} label - String, number or a function component
 * to render above input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} caption - String, number or a function component
 * to render below the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {() => void} onFocus - Called when options list becomes visible.
 *
 * @property {() => void} onBlur - Called when options list becomes invisible.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example SelectSimpleUsage
 *
 * @overview-example SelectIndexType
 * Select works with special index object - IndexPath.
 * For non-grouped items in select, there is only a `row` property.
 * Otherwise, `row` is an index of option within the group, section - index of group in options list.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example SelectMultiSelect
 * Multiple options can be selected if `multiSelect` property is configured.
 * For multiple options, `onSelect` function is called with array if indices.
 *
 * @overview-example SelectWithGroups
 * Options may be grouped within `SelectGroup` component.
 *
 * @overview-example SelectDisplayValue
 * By default, Select displays a value by building strings for selected indices.
 * For a real-word examples, a `value` property should be configured.
 *
 * @overview-example SelectStates
 * Select can be disabled with `disabled` property.
 *
 * @overview-example SelectDisabledOptions
 * Same for options.
 *
 * @overview-example SelectStatus
 * It also may be marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example SelectAccessories
 * Select may contain labels, captions and inner views by configuring `accessoryLeft` or `accessoryRight` properties.
 * Within Eva, Select accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example SelectSize
 * To resize Select, a `size` property may be used.
 *
 * @overview-example SelectStyling
 * Select and it's inner views can be styled by passing them as function components.
 * ```
 * import { Select, SelectItem, Text } from '@ui-kitten/components';
 *
 * <Select
 *   label={evaProps => <Text {...evaProps}>Label</Text>}
 *   caption={evaProps => <Text {...evaProps}>Caption</Text>}>
 *   <SelectItem title={evaProps => <Text {...evaProps}>Option 1</Text>} />
 * </Select>
 * ```
 *
 * @overview-example SelectTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
export declare class Select extends React.Component<SelectProps, State> {
    static defaultProps: {
        placeholder: string;
        selectedIndex: any[];
    };
    state: State;
    private service;
    private popoverRef;
    private expandAnimation;
    private get isMultiSelect();
    private get data();
    private get selectedIndices();
    private get expandToRotateInterpolation();
    show: () => void;
    hide: () => void;
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    clear: () => void;
    private onMouseEnter;
    private onMouseLeave;
    private onPress;
    private onPressIn;
    private onPressOut;
    private onItemPress;
    private onBackdropPress;
    private onListVisible;
    private onListInvisible;
    private getComponentStyle;
    private setOptionsListVisible;
    private setOptionsListInvisible;
    private createExpandAnimation;
    private cloneItemWithProps;
    private renderItem;
    private renderDefaultIconElement;
    private renderInputElement;
    render(): React.ReactElement<ViewProps>;
}
export {};
