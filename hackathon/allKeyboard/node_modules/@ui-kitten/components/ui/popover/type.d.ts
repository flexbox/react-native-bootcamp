/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { FlexStyle, StyleProp } from 'react-native';
import { Frame } from '../../devsupport';
export interface Offset {
    rawValue: string;
    apply(frame: Frame, value: number): Frame;
}
export declare class Offsets {
    static MARGIN: Offset;
    static MARGIN_HORIZONTAL: Offset;
    static MARGIN_VERTICAL: Offset;
    static MARGIN_LEFT: Offset;
    static MARGIN_TOP: Offset;
    static MARGIN_RIGHT: Offset;
    static MARGIN_BOTTOM: Offset;
    static find(source: StyleProp<FlexStyle>): Frame;
    static parse(value: string | Offset, fallback?: Offset): Offset | undefined;
    private static parseString;
    private static typeOf;
}
export declare class PlacementOptions {
    readonly source: Frame;
    readonly other: Frame;
    readonly bounds: Frame;
    readonly offsets: Frame;
    constructor(source?: Frame, other?: Frame, bounds?: Frame, offsets?: Frame);
}
export interface PopoverPlacement {
    rawValue: string;
    frame(options: PlacementOptions): Frame;
    flex(): FlexPlacement;
    parent(): PopoverPlacement;
    reverse(): PopoverPlacement;
    family(): PopoverPlacement[];
    fits(frame: Frame, other: Frame): boolean;
}
export declare class PopoverPlacements {
    static RIGHT_START: PopoverPlacement;
    static LEFT_START: PopoverPlacement;
    static RIGHT_END: PopoverPlacement;
    static LEFT_END: PopoverPlacement;
    static RIGHT: PopoverPlacement;
    static LEFT: PopoverPlacement;
    static BOTTOM_START: PopoverPlacement;
    static TOP_START: PopoverPlacement;
    static BOTTOM_END: PopoverPlacement;
    static TOP_END: PopoverPlacement;
    static BOTTOM: PopoverPlacement;
    static TOP: PopoverPlacement;
    static parse(value: string | PopoverPlacement, fallback?: PopoverPlacement): PopoverPlacement | undefined;
    private static parseString;
    private static typeOf;
}
export interface FlexPlacement {
    direction: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    alignment: 'flex-start' | 'flex-end' | 'center';
}
