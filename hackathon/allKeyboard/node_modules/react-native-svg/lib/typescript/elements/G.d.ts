/// <reference types="react" />
import { TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class G<P> extends Shape<P> {
    static displayName: string;
    setNativeProps: (props: Object & {
        matrix?: number[] | undefined;
    } & TransformProps) => void;
    render(): JSX.Element;
}
