export declare const hasOwnProperty: (v: string | number | symbol) => boolean;
export declare const toArray: (collection: Set<any>) => any[];
export declare type Unsubscribable = {
    unsubscribe?: void | (() => any);
};
export declare function maybeUnsubscribe(entryOrDep: Unsubscribable): void;
