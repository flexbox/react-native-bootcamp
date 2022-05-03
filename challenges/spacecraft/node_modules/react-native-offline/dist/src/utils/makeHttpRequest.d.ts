import { HTTPHeaders } from '../types';
declare type Options = {
    method?: 'HEAD' | 'OPTIONS';
    url: string;
    timeout?: number;
    testMethod?: 'onload/2xx' | 'onload/3xx' | 'onload/4xx' | 'onload/5xx' | 'onerror' | 'ontimeout';
    customHeaders?: HTTPHeaders;
};
declare type ResolvedValue = {
    status: number;
};
export declare const headers: {
    'Cache-Control': string;
    Pragma: "no-cache";
    Expires: string;
};
export default function makeHttpRequest(args?: Options): Promise<ResolvedValue>;
export {};
