/// <reference types="react" />
import { NumberProp, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class Mask extends Shape<{
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    transform?: number[] | string | TransformProps;
    maskTransform?: number[] | string | TransformProps;
    maskUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    maskContentUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
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
