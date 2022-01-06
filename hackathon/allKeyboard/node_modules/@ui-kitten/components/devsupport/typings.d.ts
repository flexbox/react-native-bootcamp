import { ReactElement } from 'react';
export declare type ChildrenProp<Element extends ReactElement = ReactElement> = Element | Element[];
export declare type ChildrenWithProps<Props = {}> = ChildrenProp<ReactElement<Props>>;
export declare type LiteralUnion<T extends U, U = string> = T | (U & {});
export declare type EvaStatus = LiteralUnion<'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control'>;
export declare type EvaSize = LiteralUnion<'tiny' | 'small' | 'medium' | 'large' | 'giant'>;
export declare type EvaInputSize = LiteralUnion<'small' | 'medium' | 'large'>;
export declare class IndexPath {
    readonly row: number;
    readonly section?: number;
    constructor(row: number, section?: number);
    get groupIndex(): IndexPath;
    toString(): string;
    equals: (other: IndexPath) => boolean;
}
export declare type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T>> = Pick<I, keyof I>;
export declare type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>;
export declare type SetDifference<A, B> = A extends B ? never : A;
export declare type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>;
