/// <reference types="react" />
import type { TextInput as NativeTextInput, Animated, TextStyle, LayoutChangeEvent, ColorValue } from 'react-native';
import type { TextInputProps } from './TextInput';
import type { $Omit } from './../../types';
export declare type TextInputLabelProp = string | React.ReactElement;
export declare type RenderProps = {
    ref: (a?: NativeTextInput | null) => void;
    onChangeText?: (a: string) => void;
    placeholder?: string;
    placeholderTextColor?: ColorValue;
    editable?: boolean;
    selectionColor?: string;
    onFocus?: (args: any) => void;
    onBlur?: (args: any) => void;
    underlineColorAndroid?: string;
    style: any;
    multiline?: boolean;
    numberOfLines?: number;
    value?: string;
    adjustsFontSizeToFit?: boolean;
};
declare type TextInputTypesWithoutMode = $Omit<TextInputProps, 'mode'>;
export declare type State = {
    labeled: Animated.Value;
    error: Animated.Value;
    focused: boolean;
    placeholder?: string;
    value?: string;
    labelLayout: {
        measured: boolean;
        width: number;
        height: number;
    };
    leftLayout: {
        height: number | null;
        width: number | null;
    };
    rightLayout: {
        height: number | null;
        width: number | null;
    };
};
export declare type ChildTextInputProps = {
    parentState: State;
    innerRef: (ref?: NativeTextInput | null) => void;
    onFocus?: (args: any) => void;
    onBlur?: (args: any) => void;
    forceFocus: () => void;
    onChangeText?: (value: string) => void;
    onLayoutAnimatedText: (args: any) => void;
    onLeftAffixLayoutChange: (event: LayoutChangeEvent) => void;
    onRightAffixLayoutChange: (event: LayoutChangeEvent) => void;
} & TextInputTypesWithoutMode;
export declare type LabelProps = {
    mode?: 'flat' | 'outlined';
    placeholderStyle: any;
    placeholderOpacity: number | Animated.Value | Animated.AnimatedInterpolation;
    baseLabelTranslateX: number;
    baseLabelTranslateY: number;
    wiggleOffsetX: number;
    labelScale: number;
    fontSize: number;
    fontWeight: TextStyle['fontWeight'];
    font: any;
    topPosition: number;
    paddingOffset?: {
        paddingLeft: number;
        paddingRight: number;
    } | null;
    labelTranslationXOffset?: number;
    placeholderColor: string | null;
    backgroundColor?: ColorValue;
    label?: TextInputLabelProp | null;
    hasActiveOutline?: boolean | null;
    activeColor: string;
    errorColor?: string;
    error?: boolean | null;
    onLayoutAnimatedText: (args: any) => void;
    roundness: number;
    maxFontSizeMultiplier?: number | undefined | null;
};
export declare type InputLabelProps = {
    parentState: State;
    labelProps: LabelProps;
    labelBackground?: any;
    maxFontSizeMultiplier?: number | undefined | null;
};
export declare type LabelBackgroundProps = {
    labelProps: LabelProps;
    labelStyle: any;
    parentState: State;
    maxFontSizeMultiplier?: number | undefined | null;
};
export {};
