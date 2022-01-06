/**
 * Matches FlexBox style properties that can affect on Layout depending on LTR/RTL mode corresponding Mappers
 */
export declare const RtlFlexMap: Record<string, RTLFlexMapper<any>>;
interface RTLFlexMapper<T> {
    toRTL(value: T, rtl: boolean): T;
}
export {};
