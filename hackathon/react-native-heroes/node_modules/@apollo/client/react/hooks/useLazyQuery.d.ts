import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { LazyQueryHookOptions, QueryTuple } from '../types/types';
import { OperationVariables } from '../../core';
export declare function useLazyQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: LazyQueryHookOptions<TData, TVariables>): QueryTuple<TData, TVariables>;
//# sourceMappingURL=useLazyQuery.d.ts.map