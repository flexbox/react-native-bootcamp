/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class Ellipse extends Shape<{
    cx?: NumberProp;
    cy?: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
}> {
    static displayName: string;
    static defaultProps: {
        cx: number;
        cy: number;
        rx: number;
        ry: number;
    };
    render(): JSX.Element;
}
