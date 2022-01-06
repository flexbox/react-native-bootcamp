import { StyleType } from '../../../theme';
export declare const TextStyleProps: string[];
export declare const FlexStyleProps: string[];
export declare const FlexViewCrossStyleProps: string[];
export interface Props {
    [key: string]: any;
}
export interface RestProps {
    rest?: Partial<Props>;
}
export declare type AllOfProps = Partial<Props>;
export declare type AllWithRestProps = Partial<Props> & RestProps;
declare class NativePropsService {
    /**
     * Retrieves all props included in `from` array
     *
     * @param source (Props) - source object
     * @param from (string[]) - array of keys needed to retrieve from `source`
     *
     * @return (Partial<Props>) - object with keys contained in `from` array
     */
    all(source: Props | undefined, from: string[]): AllOfProps;
    /**
     * Retrieves all props included in `from` array, rest props includes in under the `rest` key
     */
    allWithRest(source: Props | undefined, from: string[]): AllWithRestProps;
    /**
     * Returns all styles with prefix
     *
     * @param {StyleType} source - Eva Styles
     * @param {string} key - prefix
     *
     * @return {StyleType} - all styles with prefix
     */
    allWithPrefix(source: StyleType, key: string): StyleType;
}
export declare const PropsService: NativePropsService;
export {};
