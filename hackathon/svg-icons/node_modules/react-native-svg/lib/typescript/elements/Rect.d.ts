/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class Rect extends Shape<{
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
}> {
    static displayName: string;
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    render(): JSX.Element;
}
