/**
 * Safely retrieves R value of T object with reducer
 *
 * @param value (T | undefined) - unsafe object which should be processed
 * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
 *
 * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `undefined` otherwise
 **/
export declare function safe<T, R>(value: T | undefined, reducer: (value: T) => R): R | undefined;
/**
 * Maps 2-dim array to 1-dim
 *
 * @param params (T[][]) - 2-dim array
 *
 * @return 1-dim array
 */
export declare function flatten<T>(params: T[][]): T[];
/**
 * Removes all duplicates from array
 *
 * @param params (T[]) - array with possible duplicate values
 *
 * @return (T[]) - processed array
 */
export declare function noDuplicates<T>(params: T[]): T[];
/**
 * Removes null and undefined values from array
 *
 * @param params (T[]) - array with possible null values
 *
 * @return (T[]) - processed array
 */
export declare function noNulls<T>(params: T[]): T[];
/**
 * Returns Object with string keys from array type [string, IndexSignatureBase]
 *
 * @param array like [string, IndexSignatureBase]
 *
 * @return object with string keys and IndexSignatureBase values
 */
export declare function toObject(array: [string, any][]): any;
/**
 * Check value for null or undefined
 *
 *
 * @return boolean
 * @param value
 */
export declare function isNil(value: any): boolean;
