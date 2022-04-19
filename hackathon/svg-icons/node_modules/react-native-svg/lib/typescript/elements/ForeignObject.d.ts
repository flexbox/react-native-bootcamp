/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import G from './G';
export default class ForeignObject extends G<{
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
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
