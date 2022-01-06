/// <reference types="react" />
import Shape from './Shape';
import { TransformProps } from '../lib/extract/types';
export default class TSpan extends Shape<{}> {
    static displayName: string;
    setNativeProps: (props: Object & {
        matrix?: number[] | undefined;
        style?: {} | [] | undefined;
    } & TransformProps) => void;
    render(): JSX.Element;
}
