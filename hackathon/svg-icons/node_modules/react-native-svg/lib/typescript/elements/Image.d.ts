/// <reference types="react" />
import { ImageSourcePropType } from 'react-native';
import { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export default class SvgImage extends Shape<{
    preserveAspectRatio?: string;
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    xlinkHref?: string | number | ImageSourcePropType;
    href?: string | number | ImageSourcePropType;
}> {
    static displayName: string;
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        preserveAspectRatio: string;
    };
    render(): JSX.Element;
}
