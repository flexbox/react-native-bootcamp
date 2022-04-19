import { ReactElement } from 'react';
import { NumberProp, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class LinearGradient extends Shape<{
    id?: string;
    x1?: NumberProp;
    y1?: NumberProp;
    x2?: NumberProp;
    y2?: NumberProp;
    children?: ReactElement[];
    transform?: number[] | string | TransformProps;
    gradientTransform?: number[] | string | TransformProps;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
}> {
    static displayName: string;
    static defaultProps: {
        x1: string;
        y1: string;
        x2: string;
        y2: string;
    };
    render(): JSX.Element;
}
