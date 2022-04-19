/// <reference types="react" />
import Shape from './Shape';
export default class Path extends Shape<{
    d?: string;
}> {
    static displayName: string;
    render(): JSX.Element;
}
