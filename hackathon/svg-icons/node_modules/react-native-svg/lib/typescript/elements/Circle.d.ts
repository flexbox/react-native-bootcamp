/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class Circle extends Shape<{
    cx?: NumberProp;
    cy?: NumberProp;
    r?: NumberProp;
}> {
    static displayName: string;
    static defaultProps: {
        cx: number;
        cy: number;
        r: number;
    };
    render(): JSX.Element;
}
