import { ViewStyle } from 'react-native';
declare class RTLServiceStatic {
    /**
     * @returns true if it is Right-to-Left layout
     */
    isRTL(): boolean;
    select<T>(ltr: T, rtl: T): T;
    /**
     * Iterates through {RtlFlexMap} and reverses style values if needed.
     *
     * @param {ViewStyle} source - style to convert
     * @param {boolean} rtl - is layout currently in RTL mode (Needed for tests, because unable to mock this)
     *
     * @returns {ViewStyle} - style reversed to fit RTL
     */
    ignoreRTL(source: ViewStyle, rtl?: boolean): ViewStyle;
}
export declare const RTLService: RTLServiceStatic;
export {};
