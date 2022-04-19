/// <reference types="react" />
import Shape from './Shape';
import { NumberProp } from '../lib/extract/types';
export default class Polygon extends Shape<{
    points?: number[];
}> {
    static displayName: string;
    static defaultProps: {
        points: string;
    };
    setNativeProps: (props: Object & {
        points?: string | NumberProp[];
        d?: string;
    }) => void;
    render(): JSX.Element;
}
