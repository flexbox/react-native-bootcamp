export declare class Point {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    static zero(): Point;
    static outscreen(): Point;
    equals(other: Point): boolean;
}
export declare class Size {
    readonly width: number;
    readonly height: number;
    constructor(width: number, height: number);
    static zero(): Size;
    equals(other: Size): boolean;
}
export declare class Frame {
    readonly origin: Point;
    readonly size: Size;
    constructor(x: number, y: number, width: number, height: number);
    static zero(): Frame;
    static window(): Frame;
    static outscreen(): Frame;
    equals(other: Frame): boolean;
    /**
     * Creates new frame aligned to left of other
     */
    leftOf(other: Frame): Frame;
    /**
     * Creates new frame aligned to top of other
     */
    topOf(other: Frame): Frame;
    /**
     * Creates new frame aligned to right of other
     */
    rightOf(other: Frame): Frame;
    /**
     * Creates new frame aligned to bottom of other
     */
    bottomOf(other: Frame): Frame;
    /**
     * Creates new frame centered horizontally to other
     */
    centerHorizontalOf(other: Frame): Frame;
    /**
     * Creates new frame centered vertically to other
     */
    centerVerticalOf(other: Frame): Frame;
    centerOf(other: Frame): Frame;
}
