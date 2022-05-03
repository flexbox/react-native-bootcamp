import { ObservableQuery, ApolloQueryResult, OperationVariables } from '../../core';
import { ObservableSubscription } from '../../utilities';
export default function subscribeAndCount<TData, TVariables = OperationVariables>(reject: (reason: any) => any, observable: ObservableQuery<TData, TVariables>, cb: (handleCount: number, result: ApolloQueryResult<TData>) => any): ObservableSubscription;
//# sourceMappingURL=subscribeAndCount.d.ts.map