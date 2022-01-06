import { Component } from 'react';
export declare function getUriFromSource(source?: string | number): any;
export declare function loadLocalRawResourceDefault(source?: string | number): Promise<string>;
export declare function isUriAnAndroidResourceIdentifier(uri?: string | number): boolean;
export declare function loadAndroidRawResource(uri?: string | number): Promise<any>;
export declare function loadLocalRawResourceAndroid(source?: string | number): Promise<any>;
export declare const loadLocalRawResource: typeof loadLocalRawResourceAndroid;
export declare type LocalProps = {
    asset?: string | number;
    override?: Object;
};
export declare type LocalState = {
    xml: string | null;
};
export declare function LocalSvg(props: LocalProps): JSX.Element;
export declare class WithLocalSvg extends Component<LocalProps, LocalState> {
    state: {
        xml: null;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: {
        asset?: string | number;
    }): void;
    load(asset?: string | number): Promise<void>;
    render(): JSX.Element;
}
export default LocalSvg;
