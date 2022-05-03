import { Operation } from '../core';
export declare type ServerParseError = Error & {
    response: Response;
    statusCode: number;
    bodyText: string;
};
export declare function parseAndCheckHttpResponse(operations: Operation | Operation[]): (response: Response) => Promise<any>;
//# sourceMappingURL=parseAndCheckHttpResponse.d.ts.map