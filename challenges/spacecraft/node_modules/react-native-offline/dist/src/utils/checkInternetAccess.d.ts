import { HTTPMethod, AddUndefined, HTTPHeaders } from '../types';
declare type Arguments = {
    url: string;
    timeout: number;
    method?: HTTPMethod;
    customHeaders: HTTPHeaders;
};
export default function checkInternetAccess(args?: AddUndefined<Arguments>): Promise<boolean>;
export {};
