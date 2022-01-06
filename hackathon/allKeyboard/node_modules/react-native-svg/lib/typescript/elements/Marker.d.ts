/// <reference types="react" />
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class Marker extends Shape<{
    id?: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    refX?: NumberProp;
    refY?: NumberProp;
    markerWidth?: NumberProp;
    markerHeight?: NumberProp;
    markerUnits?: 'strokeWidth' | 'userSpaceOnUse';
    orient?: 'auto' | 'auto-start-reverse' | NumberProp;
}> {
    static displayName: string;
    static defaultProps: {
        refX: number;
        refY: number;
        orient: string;
        markerWidth: number;
        markerHeight: number;
        markerUnits: string;
    };
    render(): JSX.Element;
}
