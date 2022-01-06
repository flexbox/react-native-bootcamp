/// <reference types="react" />
import { NumberProp, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class Pattern extends Shape<{
    id?: string;
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    viewBox?: string;
    preserveAspectRatio?: string;
    transform?: number[] | string | TransformProps;
    patternTransform?: number[] | string | TransformProps;
    patternUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    patternContentUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
}> {
    static displayName: string;
    static defaultProps: {
        x: string;
        y: string;
        width: string;
        height: string;
    };
    render(): JSX.Element;
}
