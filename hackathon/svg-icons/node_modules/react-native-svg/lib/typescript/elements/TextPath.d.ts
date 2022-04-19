import React from 'react';
import { NumberProp, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class TextPath extends Shape<{
    children?: NumberProp | [NumberProp | React.ComponentType];
    alignmentBaseline?: string;
    startOffset?: NumberProp;
    xlinkHref?: string;
    midLine?: string;
    spacing?: string;
    method?: string;
    href?: string;
    side?: string;
}> {
    static displayName: string;
    setNativeProps: (props: Object & {
        matrix?: number[];
        style?: [] | {};
    } & TransformProps) => void;
    render(): JSX.Element;
}
