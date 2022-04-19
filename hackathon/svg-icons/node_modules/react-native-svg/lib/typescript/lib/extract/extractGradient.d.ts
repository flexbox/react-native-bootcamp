import React, { ReactElement } from 'react';
import { TransformProps } from './types';
export default function extractGradient(props: {
    id?: string;
    children?: ReactElement[];
    transform?: number[] | string | TransformProps;
    gradientTransform?: number[] | string | TransformProps;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
} & TransformProps, parent: {}): {
    name: string;
    gradient: number[];
    children: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>[];
    gradientUnits: number;
    gradientTransform: number[] | null;
} | null;
