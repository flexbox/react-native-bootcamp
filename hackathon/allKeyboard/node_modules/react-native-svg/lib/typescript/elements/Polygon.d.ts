/// <reference types="react" />
import Shape from './Shape';
export default class Polygon extends Shape<{
    points?: number[];
}> {
    static displayName: string;
    static defaultProps: {
        points: string;
    };
    setNativeProps: (props: Object & {
        points?: string | (string | number)[] | undefined;
        d?: string | undefined;
    }) => void;
    render(): JSX.Element;
}
