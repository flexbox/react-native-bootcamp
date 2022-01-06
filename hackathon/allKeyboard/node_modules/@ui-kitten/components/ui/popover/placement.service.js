"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const PLACEMENT_FAMILIES = [
    type_1.PopoverPlacements.BOTTOM.rawValue,
    type_1.PopoverPlacements.TOP.rawValue,
    type_1.PopoverPlacements.LEFT.rawValue,
    type_1.PopoverPlacements.RIGHT.rawValue,
];
class PopoverPlacementService {
    find(preferredValue, options) {
        const placement = this.findRecursive(preferredValue, PLACEMENT_FAMILIES, options);
        return placement || preferredValue;
    }
    findRecursive(placement, families, options) {
        const oneOfCurrentFamily = this.findFromFamily(placement, options);
        if (oneOfCurrentFamily) {
            return oneOfCurrentFamily;
        }
        const oneOfReversedFamily = this.findFromFamily(placement.reverse(), options);
        if (oneOfReversedFamily) {
            return oneOfReversedFamily;
        }
        delete families[families.indexOf(placement.parent().rawValue)];
        delete families[families.indexOf(placement.reverse().parent().rawValue)];
        const firstTruthy = families.filter(Boolean)[0];
        if (firstTruthy) {
            const nextPlacement = type_1.PopoverPlacements.parse(firstTruthy);
            return this.findRecursive(nextPlacement, families, options);
        }
        return null;
    }
    findFromFamily(placement, options) {
        const preferredFrame = placement.frame(options);
        if (placement.fits(preferredFrame, options.bounds)) {
            return placement;
        }
        return placement.family().find((familyValue) => {
            const familyFrame = familyValue.frame(options);
            return familyValue.fits(familyFrame, options.bounds);
        });
    }
}
exports.PopoverPlacementService = PopoverPlacementService;
//# sourceMappingURL=placement.service.js.map