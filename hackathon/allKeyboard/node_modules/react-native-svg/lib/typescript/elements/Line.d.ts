/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class Line extends Shape<{
    x1?: NumberProp;
    y1?: NumberProp;
    x2?: NumberProp;
    y2?: NumberProp;
}> {
    static displayName: string;
    static defaultProps: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    render(): JSX.Element;
}
