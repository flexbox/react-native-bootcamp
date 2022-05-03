import { OperationVariables } from '../../core';
import { DocumentNode, TypedDocumentNode } from '../../core';
import { QueryHookOptions, QueryResult } from '../types/types';
export declare function useQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: QueryHookOptions<TData, TVariables>): QueryResult<TData, TVariables>;
//# sourceMappingURL=useQuery.d.ts.map