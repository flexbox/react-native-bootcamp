/// <reference types="react" />
import { MeasureInWindowOnSuccessCallback, MeasureLayoutOnSuccessCallback, MeasureOnSuccessCallback, ViewStyle } from 'react-native';
import { ClipProps, Color, FillProps, NumberProp, ResponderProps, StrokeProps, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class Svg extends Shape<{
    color?: Color;
    viewBox?: string;
    opacity?: NumberProp;
    onLayout?: () => void;
    preserveAspectRatio?: string;
    style?: ViewStyle[] | ViewStyle;
} & TransformProps & ResponderProps & StrokeProps & FillProps & ClipProps> {
    static displayName: string;
    static defaultProps: {
        preserveAspectRatio: string;
    };
    measureInWindow: (callback: MeasureInWindowOnSuccessCallback) => void;
    measure: (callback: MeasureOnSuccessCallback) => void;
    measureLayout: (relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail: () => void) => void;
    setNativeProps: (props: Object & {
        width?: NumberProp;
        height?: NumberProp;
        bbWidth?: NumberProp;
        bbHeight?: NumberProp;
    }) => void;
    toDataURL: (callback: () => void, options?: Object | undefined) => void;
    render(): JSX.Element;
}
