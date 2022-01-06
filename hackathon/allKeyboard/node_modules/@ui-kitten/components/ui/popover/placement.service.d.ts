/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { PlacementOptions, PopoverPlacement } from './type';
export declare class PopoverPlacementService {
    find(preferredValue: PopoverPlacement, options: PlacementOptions): PopoverPlacement;
    private findRecursive;
    private findFromFamily;
}
