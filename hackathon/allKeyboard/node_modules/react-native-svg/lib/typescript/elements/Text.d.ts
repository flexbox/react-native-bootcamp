/// <reference types="react" />
import { TransformProps } from '../lib/extract/types';
import Shape from './Shape';
import './TSpan';
export default class Text extends Shape<{}> {
    static displayName: string;
    setNativeProps: (props: Object & {
        matrix?: number[] | undefined;
        style?: {} | [] | undefined;
    } & TransformProps) => void;
    render(): JSX.Element;
}
