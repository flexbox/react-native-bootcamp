/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ChildrenWithProps } from '../../devsupport';
import { InputProps } from '../input/input.component';
import { PopoverElement } from '../popover/popover.component';
import { AutocompleteItemProps } from './autocompleteItem.component';
export interface AutocompleteProps extends InputProps {
    children?: ChildrenWithProps<AutocompleteItemProps>;
    onSelect?: (index: number) => void;
    placement?: string;
}
export declare type AutocompleteElement = React.ReactElement<AutocompleteProps>;
interface State {
    listVisible: boolean;
}
/**
 * Autocomplete is a normal text input enhanced by a panel of suggested options.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets data list visible.
 *
 * @method {() => void} hide - Sets data list invisible.
 *
 * @method {() => void} focus - Focuses an input field and sets data list visible.
 *
 * @method {() => void} blur - Removes focus from input field and sets data list invisible.
 *
 * @method {() => boolean} isFocused - Returns true if the input field is currently focused.
 *
 * @method {() => void} clear - Removes all text from the input field.
 *
 * @property {ReactElement<AutocompleteItemProps> | ReactElement<AutocompleteItemProps>[]} children -
 * Options displayed within list.
 *
 * @property {(number) => void} onSelect - Called when option is pressed.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Useful for giving user a hint on the input validity.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {ReactText | (TextProps) => ReactElement} label - String, number or a function component
 * to render to top of the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {string | PopoverPlacement} placement - Position of the options list relative to the input field.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {() => void} onFocus - Called when options list becomes visible.
 *
 * @property {() => void} onBlur - Called when options list becomes invisible.
 *
 * @property {InputProps} ...InputProps - Any props applied to Input component.
 *
 * @overview-example AutocompleteSimpleUsage
 * Autocomplete may contain options to be rendered within suggestions list.
 * Options should be provided by passing them to children.
 *
 * @overview-example AutocompleteAccessories
 * Autocomplete may contain accessories by passing `accessoryLeft` or `accessoryRight` props.
 * By default, we expect it to be images.
 *
 * @example AutocompleteHandleKeyboard
 * On mobile devices, options may be overlapped by keyboard.
 * It can be handled with `placement` property.
 *
 * @example AutocompleteAsync
 * For requesting a real-world data by typing, http requests may be sent with debounce.
 */
export declare class Autocomplete extends React.Component<AutocompleteProps, State> {
    state: State;
    private popoverRef;
    private inputRef;
    private get data();
    show: () => void;
    hide: () => void;
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    clear: () => void;
    componentDidUpdate(prevProps: AutocompleteProps): void;
    private onInputFocus;
    private onInputSubmitEditing;
    private onBackdropPress;
    private onItemPress;
    private setOptionsListVisible;
    private setOptionsListInvisible;
    private renderItem;
    private renderInputElement;
    render(): PopoverElement;
}
export {};
