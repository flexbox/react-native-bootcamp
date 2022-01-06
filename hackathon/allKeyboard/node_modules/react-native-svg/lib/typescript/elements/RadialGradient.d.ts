import { ReactElement } from 'react';
import { NumberProp, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class RadialGradient extends Shape<{
    fx?: NumberProp;
    fy?: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
    r?: NumberProp;
    cx?: NumberProp;
    cy?: NumberProp;
    id?: string;
    children?: ReactElement[];
    transform?: number[] | string | TransformProps;
    gradientTransform?: number[] | string | TransformProps;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
}> {
    static displayName: string;
    static defaultProps: {
        cx: string;
        cy: string;
        r: string;
    };
    render(): JSX.Element;
}
