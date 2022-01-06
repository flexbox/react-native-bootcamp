import { Color } from './types';
export declare const colors: {
    [colorname: string]: number[];
};
export declare const colorNames: {
    [colorname: string]: number | void;
};
export declare const integerColor: (x: number) => number;
export default function extractColor(color: Color | void): number | void | null;
