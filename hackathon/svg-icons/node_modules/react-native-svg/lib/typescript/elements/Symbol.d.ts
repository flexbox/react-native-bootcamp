/// <reference types="react" />
import Shape from './Shape';
export default class Symbol extends Shape<{
    id?: string;
    viewBox?: string;
    preserveAspectRatio?: string;
}> {
    static displayName: string;
    render(): JSX.Element;
}
