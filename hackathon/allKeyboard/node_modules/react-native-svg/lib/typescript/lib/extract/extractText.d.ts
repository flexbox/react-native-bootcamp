import React, { ComponentType } from 'react';
import { NumberArray, NumberProp } from './types';
interface fontProps {
    fontData?: unknown;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: NumberProp;
    fontStretch?: string;
    fontSize?: NumberProp;
    fontFamily?: string;
    textAnchor?: string;
    textDecoration?: string;
    letterSpacing?: NumberProp;
    wordSpacing?: NumberProp;
    kerning?: NumberProp;
    fontFeatureSettings?: string;
    fontVariantLigatures?: string;
    fontVariationSettings?: string;
    font?: string;
}
export declare function extractFont(props: fontProps): {};
export declare function setTSpan(TSpanImplementation: ComponentType): void;
export declare type TextProps = {
    x?: NumberArray;
    y?: NumberArray;
    dx?: NumberArray;
    dy?: NumberArray;
    rotate?: NumberArray;
    children?: string | number | (string | number | ComponentType)[];
    inlineSize?: NumberProp;
    baselineShift?: NumberProp;
    verticalAlign?: NumberProp;
    alignmentBaseline?: string;
} & fontProps;
export default function extractText(props: TextProps, container: boolean): {
    content: string | null;
    children: JSX.Element | (JSX.Element | React.ComponentClass<{}, any> | React.FunctionComponent<{}>)[] | null | undefined;
    inlineSize: string | number | undefined;
    baselineShift: string | number | undefined;
    verticalAlign: string | number | undefined;
    alignmentBaseline: string | undefined;
    font: {};
    x: (string | number)[];
    y: (string | number)[];
    dx: (string | number)[];
    dy: (string | number)[];
    rotate: (string | number)[];
};
export {};
