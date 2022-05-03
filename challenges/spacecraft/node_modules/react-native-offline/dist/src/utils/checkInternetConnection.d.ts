import { HTTPMethod, HTTPHeaders } from '../types';
/**
 * Utility that allows to query for internet connectivity on demand
 * @param url
 * @param timeout
 * @param shouldPing
 * @param method
 * @returns {Promise<boolean>}
 */
export default function checkInternetConnection(url?: string, timeout?: number, shouldPing?: boolean, method?: HTTPMethod, customHeaders?: HTTPHeaders): Promise<boolean | null>;
