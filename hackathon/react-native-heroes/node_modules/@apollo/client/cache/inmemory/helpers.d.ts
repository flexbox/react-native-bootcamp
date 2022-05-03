import { SelectionSetNode } from 'graphql';
import { NormalizedCache, InMemoryCacheConfig } from './types';
import { KeyFieldsContext } from './policies';
import { Reference, StoreValue, StoreObject, DeepMerger } from '../../utilities';
export declare const hasOwn: (v: PropertyKey) => boolean;
export declare function defaultDataIdFromObject({ __typename, id, _id }: Readonly<StoreObject>, context?: KeyFieldsContext): string | undefined;
export declare function normalizeConfig(config: InMemoryCacheConfig): {
    dataIdFromObject: typeof defaultDataIdFromObject;
    addTypename: boolean;
    resultCaching: boolean;
    canonizeResults: boolean;
} & InMemoryCacheConfig;
export declare function shouldCanonizeResults(config: Pick<InMemoryCacheConfig, "canonizeResults">): boolean;
export declare function getTypenameFromStoreObject(store: NormalizedCache, objectOrReference: StoreObject | Reference): string | undefined;
export declare const TypeOrFieldNameRegExp: RegExp;
export declare function fieldNameFromStoreName(storeFieldName: string): string;
export declare function selectionSetMatchesResult(selectionSet: SelectionSetNode, result: Record<string, any>, variables?: Record<string, any>): boolean;
export declare function storeValueIsStoreObject(value: StoreValue): value is StoreObject;
export declare function makeProcessedFieldsMerger(): DeepMerger<any[]>;
export declare const isArray: (a: any) => a is any[] | readonly any[];
//# sourceMappingURL=helpers.d.ts.map